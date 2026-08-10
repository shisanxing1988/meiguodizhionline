# meiguodizhionline 项目交接记录

最后更新：2026-08-10

## 当前状态

- 线上域名：`https://meiguodizhionline.com/`
- GitHub 仓库：`https://github.com/shisanxing1988/meiguodizhionline`
- 主分支：`main`
- 当前上线提交：`1994b7e Compact home generator layout`
- 本地项目路径：`/Users/pengguoxin/Documents/GitHub/meiguodizhionline`
- 站点类型：纯静态地址生成工具站，部署到 Cloudflare Workers/Pages。

当前首页已上线为紧凑版布局：

- 顶部为简洁简介。
- 地址生成器紧接简介，全宽展示。
- 提示信息放在生成器下方。
- 支持 50 个常用国家和地区。
- 批量生成分页显示，每页最多 5 条地址。
- 常用入口展示更多国家，可直接点击切换生成。

## 主要文件

- `index.html`：中文首页和主地址生成器页面。
- `assets/js/app.js`：地址数据、50 个国家/地区、生成逻辑、分页、保存、复制、CSV/JSON 导出。
- `assets/css/styles.css`：全站样式，包含首页紧凑布局、生成器、国家入口、结果卡片和响应式布局。
- `about/index.html`：关于页面，已改为上下结构，底部展示使用提示。
- `package.json`：构建和部署脚本。
- `scripts/build.mjs`：把静态文件复制到 `dist/` 的轻量构建脚本。
- `wrangler.jsonc`：Cloudflare Wrangler 部署配置，静态资产目录指向 `./dist`。
- `dist/`：Cloudflare 当前配置下需要的静态输出目录，已提交到 Git。

## 本地常用命令

检查 JS 语法：

```bash
node --check assets/js/app.js
```

生成 `dist/`：

```bash
npm run build
```

本地提交前建议执行：

```bash
npm run build
node --check assets/js/app.js
git status --short
```

提交并推送：

```bash
git add .
git commit -m "Your message"
git push origin main
```

如果 GitHub 推送出现 HTTP/2 网络错误，可临时使用：

```bash
git -c http.version=HTTP/1.1 push origin main
```

## Cloudflare 部署记录

部署过程中踩过的坑：

1. Cloudflare 当前执行的是 `npx wrangler deploy`。
2. 如果没有 `dist/`，会报错：`assets.directory ... /dist does not exist`。
3. 如果 Wrangler 上传整个仓库，会把 `node_modules/workerd` 当资产上传，报 `Asset too large`。
4. `_redirects` 中使用绝对 URL 会导致 Wrangler 报错：`Only relative URLs are allowed`。

当前解决方式：

- `wrangler.jsonc` 指定：

```jsonc
{
  "assets": {
    "directory": "./dist"
  }
}
```

- `dist/` 已提交到仓库，兼容 Cloudflare 继续执行 `npx wrangler deploy`。
- `_redirects` 已删除，避免 Wrangler 静态资产部署失败。

推荐的 Cloudflare 配置：

- Deploy command：`npx wrangler deploy`
- 静态资产目录由 `wrangler.jsonc` 控制为 `./dist`

如果将来想改成标准构建流程，也可以配置：

- Build command：`npm run build`
- Deploy command：`npx wrangler deploy`

但要确保 Cloudflare 会先执行 build，再执行 deploy。

## 每次修改后的上线流程

1. 修改源文件，例如 `index.html`、`assets/css/styles.css`、`assets/js/app.js`。
2. 执行：

```bash
npm run build
node --check assets/js/app.js
```

3. 确认 `dist/` 同步更新：

```bash
git diff --name-only
```

4. 提交源文件和 `dist/`：

```bash
git add .
git commit -m "Update site"
git push origin main
```

5. Cloudflare 会自动部署最新提交。
6. 部署后用缓存参数检查线上：

```bash
curl -L "https://meiguodizhionline.com/?v=COMMIT_SHA" | sed -n '1,80p'
```

如果浏览器仍显示旧版，先强刷：

- macOS Chrome：`Cmd + Shift + R`

## 已完成的重要提交

- `1994b7e`：首页改为紧凑版生成器布局，当前线上版本。
- `3fdb8a4`：删除不兼容 Wrangler 的 `_redirects`。
- `4de95b9`：提交 `dist/`，兼容 Cloudflare 当前 deploy command。
- `977351a`：新增 `wrangler.jsonc`，指定静态资产目录。
- `48680c2`：新增轻量构建脚本。
- `4c5be2a`：升级为 50 个国家和地区的静态地址生成器。
- `5952ee3`：更新 AdSense publisher ID。

## AdSense 信息

当前 AdSense Publisher ID：

```text
ca-pub-9328440079890728
```

`ads.txt` 内容：

```text
google.com, pub-9328440079890728, DIRECT, f08c47fec0942fa0
```

如果后续复制页面或改模板，注意不要把旧的 publisher ID 写回去。

## 后续优化建议

- 继续微调首页首屏空间，尤其是桌面端生成器和结果区的高度。
- 给常用入口做分组，例如北美、欧洲、亚太、拉美、中东。
- 为 50 个国家补充更细的地区数据，提高地址格式真实性。
- 给 `/en/` 页面同步中文首页的布局优化。
- 如需恢复 `www` 跳转到裸域名，不要再使用 `_redirects` 的绝对 URL，建议在 Cloudflare Redirect Rules 中配置。
