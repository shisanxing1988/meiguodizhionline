import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const output = join(root, "dist");

const entries = [
  "_headers",
  "about",
  "ads.txt",
  "assets",
  "blog",
  "contact",
  "en",
  "favicon.svg",
  "index.html",
  "privacy",
  "robots.txt",
  "sitemap.xml",
  "tax-free-address",
  "terms"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

await Promise.all(
  entries.map((entry) =>
    cp(join(root, entry), join(output, entry), {
      recursive: true,
      force: true
    })
  )
);

async function removeSystemFiles(directory) {
  const children = await readdir(directory, { withFileTypes: true });

  await Promise.all(
    children.map(async (child) => {
      const childPath = join(directory, child.name);

      if (child.name === ".DS_Store") {
        await rm(childPath, { force: true });
        return;
      }

      if (child.isDirectory()) {
        await removeSystemFiles(childPath);
      }
    })
  );
}

await removeSystemFiles(output);
