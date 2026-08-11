# meiguodizhionline 项目交接记录

最后更新：2026-08-11

## 当前状态

- 线上域名：`https://meiguodizhionline.com/`
- GitHub 仓库：`https://github.com/shisanxing1988/meiguodizhionline`
- 主分支：`main`
- 当前上线提交：`f9002b5`（Fix region dropdown rendering）。
- 本地项目路径：`/Users/pengguoxin/Documents/GitHub/meiguodizhionline`
- 站点类型：纯静态地址生成工具站，部署到 Cloudflare Workers/Pages。

当前首页已上线为紧凑版布局：

- 顶部为简洁简介。
- 地址生成器紧接简介，全宽展示。
- 提示信息放在生成器下方。
- 支持 50 个常用国家和地区。
- 批量生成分页显示，每页最多 5 条地址。
- 常用入口展示更多国家，可直接点击切换生成。

## 2026-08-11 下拉框修复记录

本次处理的问题：

- 线上 `州/地区` 下拉仍是浏览器原生 `<select>`，展开后会出现很大的白色系统下拉层，遮挡页面内容。
- 之前只修了 `国家/地区` 自定义下拉，`州/地区` 没有接入同一套自定义菜单。
- 线上一度仍引用旧资源 `styles.20260811-controls1.css` 和 `app.20260811-controls1.js`，所以本地修复不等于线上已生效。

已完成修复：

- `assets/js/app.js` 新增 `renderStateCombobox()`，把 `#state-select` 也渲染为自定义下拉。
- `州/地区` 原生 select 会被加上 `native-select-hidden`，但仍保留为底层表单值来源。
- 选择地区后同步底层 `#state-select.value`、按钮文案和 active 状态。
- 切换国家后会重新生成地区选项，并重建 `州/地区` 自定义菜单。
- 免税州页面没有国家下拉，但 `州/地区` 自定义下拉同样生效。
- 国家下拉和地区下拉共用打开、关闭、滚动锁定、点外部关闭、键盘 Enter/空格打开逻辑。

资源版本：

- 当前版本号：`20260811-dropdown2`
- 首页、英文页、免税页、国家索引页、50 个国家详情页均已引用：
  - `/assets/css/styles.20260811-dropdown2.css`
  - `/assets/js/app.20260811-dropdown2.js`
- `scripts/generate-country-pages.mjs` 中的 `appVersion` 已同步为 `20260811-dropdown2`。

验证记录：

- `npm run build` 通过。
- 本地 `http://127.0.0.1:4173/?v=dropdown2` 验证通过：
  - `state-select` 已隐藏。
  - `[data-state-combobox]` 已渲染。
  - 美国州/地区菜单 52 项。
  - 选择 `CA` 后底层值为 `CA`，按钮文案为 `加利福尼亚州 (CA)`。
- 本地切换国家到日本后验证通过：
  - 地区菜单重建为 7 项。
  - 选择 `JP-13` 后文案为 `东京都 (JP-13)`。
- 本地 `/tax-free-address/?v=dropdown2` 验证通过：
  - 无国家下拉。
  - 州/地区自定义下拉 6 项。
- 线上源码已确认引用 `20260811-dropdown2` 版本资源。
- 线上 JS 已确认包含 `renderStateCombobox`、`data-state-value`、`toggleSelectCombobox`。

相关提交：

- `3c3f14b`：Reset scroll on site navigation。
- `f9002b5`：Fix region dropdown rendering。

注意事项：

- 浏览器如果仍显示旧下拉，先强刷：macOS Chrome 使用 `Cmd + Shift + R`。
- 之后若继续改 JS/CSS，建议继续升级资源版本号，避免用户浏览器缓存旧文件。
- 本地执行 `npm run deploy` 需要 `CLOUDFLARE_API_TOKEN`；本次手动部署命令因缺少 token 被 Wrangler 拦截，但 GitHub 推送后线上最终已更新到新资源。

## 主要文件

- `index.html`：中文首页和主地址生成器页面。
- `assets/js/app.js`：地址数据、50 个国家/地区、生成逻辑、分页、保存、复制、CSV/JSON 导出。
- `assets/css/styles.css`：全站样式，包含首页紧凑布局、生成器、国家入口、结果卡片和响应式布局。
- `about/index.html`：关于页面，已改为上下结构，底部展示使用提示。
- `package.json`：构建和部署脚本。
- `scripts/generate-country-pages.mjs`：生成 `/countries/` 国家索引页、50 个国家入口页和 `sitemap.xml`。
- `scripts/build.mjs`：把静态文件复制到 `dist/` 的轻量构建脚本。
- `wrangler.jsonc`：Cloudflare Wrangler 部署配置，静态资产目录指向 `./dist`。
- `dist/`：Cloudflare 当前配置下需要的静态输出目录，已提交到 Git。

## SEO 国家入口页

已将 50 个国家和地区拆成可独立收录的静态入口页：

- 国家索引页：`/countries/`
- 国家详情页示例：
  - `/countries/us-address-generator/`
  - `/countries/japan-address-generator/`
  - `/countries/hong-kong-address-generator/`
  - `/countries/uk-address-generator/`
  - `/countries/canada-address-generator/`

生成逻辑：

- 国家列表、slug、标题和描述维护在 `scripts/generate-country-pages.mjs`。
- 每个国家页都有独立 title、description、canonical。
- 每个国家页内置同一个生成器，并通过 `data-country-default` 默认选择对应国家。
- `sitemap.xml` 由脚本自动生成，包含 50 个国家页 URL。
- 首页导航已增加 `/countries/` 入口。

如果要新增、删除或改国家页面：

1. 修改 `scripts/generate-country-pages.mjs` 中的 `countries` 数组。
2. 执行 `npm run build`。
3. 提交 `countries/`、`sitemap.xml`、`dist/` 和相关源文件。

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

1. 修改源文件，例如 `index.html`、`assets/css/styles.css`、`assets/js/app.js`、`scripts/generate-country-pages.mjs`。
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

- `f9002b5`：修复州/地区原生下拉遮挡问题，并上线 `20260811-dropdown2` 资源版本。
- `3c3f14b`：站内导航时重置滚动位置。
- `8d2228a`：修复国家下拉滚动行为。
- `1994b7e`：首页改为紧凑版生成器布局，当前线上版本。
- `2fc6d98`：新增项目交接文档。
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
- 给 `/countries/` 国家索引页做分组，例如北美、欧洲、亚太、拉美、中东。
- 为 50 个国家补充更细的地区数据，提高地址格式真实性。
- 给 `/en/` 页面同步中文首页的布局优化。
- 增加英文国家入口页，例如 `/en/countries/japan-address-generator/`。
- 如需恢复 `www` 跳转到裸域名，不要再使用 `_redirects` 的绝对 URL，建议在 Cloudflare Redirect Rules 中配置。
