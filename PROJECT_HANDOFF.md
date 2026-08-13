# meiguodizhionline 项目交接记录

最后更新：2026-08-13

## 1. 项目概览

- 线上域名：`https://meiguodizhionline.com/`
- GitHub 仓库：`https://github.com/shisanxing1988/meiguodizhionline`
- 主分支：`main`
- 当前最新提交：`8783c54`（Prevent control clicks from scrolling page）
- 本地项目路径：`/Users/pengguoxin/Documents/GitHub/meiguodizhionline`
- 站点类型：纯静态地址生成工具站，部署到 Cloudflare Workers/Pages。

当前首页形态：

- 顶部为简洁简介。
- 地址生成器紧接简介，全宽展示。
- 提示信息放在生成器下方。
- 支持 50 个常用国家和地区。
- 批量生成分页显示，每页最多 5 条地址。
- 常用入口展示更多国家，可直接点击切换生成。

## 2. 主要文件

- `index.html`：中文首页和主地址生成器页面。
- `en/index.html`：英文首页。
- `tax-free-address/index.html`：美国免税州地址生成页。
- `countries/`：国家索引页和 50 个国家详情页。
- `assets/js/app.js`：地址数据、国家/地区数据、生成逻辑、下拉框、分页、保存、复制、CSV/JSON 导出。
- `assets/css/styles.css`：全站样式，包含首页布局、生成器、国家入口、结果卡片和响应式布局。
- `scripts/generate-country-pages.mjs`：生成 `/countries/` 国家索引页、50 个国家入口页和 `sitemap.xml`。
- `scripts/build.mjs`：把静态文件复制到 `dist/` 的轻量构建脚本。
- `wrangler.jsonc`：Cloudflare Wrangler 部署配置，静态资产目录指向 `./dist`。
- `dist/`：Cloudflare 当前配置下需要的静态输出目录，已提交到 Git。

## 3. 当前资源版本

当前最新源代码资源版本：

- `20260811-scrollfix1`
- 对应文件：
  - `/assets/css/styles.20260811-scrollfix1.css`
  - `/assets/js/app.20260811-scrollfix1.js`

上一版已部署资源：

- `20260811-dropdown2`
- 修复了 `州/地区` 原生下拉遮挡问题。

注意：

- 如果线上首页仍引用 `20260811-dropdown2`，说明 Cloudflare 自动部署还没切到最新 `8783c54`。
- 本地手动执行 `npm run deploy` 需要 `CLOUDFLARE_API_TOKEN`，否则 Wrangler 会在非交互环境中报错。
- 之后每次改 JS/CSS，建议升级 `scripts/generate-country-pages.mjs` 中的 `appVersion`，避免浏览器缓存旧资源。

## 4. 最近问题记录

### 4.1 点击控件导致页面滚动

日期：2026-08-13

提交：

- `8783c54`：Prevent control clicks from scrolling page

问题表现：

- 点击很多控件后页面会跳到结果区附近。
- 受影响控件包括生成、复制、保存、地址字段复制、国家卡片切换、分页等。

原因：

- 生成结果会改变 DOM 高度，浏览器滚动锚定可能把页面带走。
- 复制 fallback 创建的 textarea 在 `.select()` 时可能触发浏览器滚动。
- 分页按钮原先主动执行 `scrollIntoView()`，会把页面滚到结果区。

修复：

- 新增 `preservePageScroll()` 和 `restorePageScroll()`，在非导航点击动作后恢复点击前滚动位置。
- 复制 fallback 的临时 textarea 改成 fixed 隐藏定位，避免 `.select()` 造成滚动。
- 移除分页点击后的主动 `scrollIntoView()`。
- 资源版本升级为 `20260811-scrollfix1`。

验证：

- `npm run build` 通过。
- `node --check assets/js/app.js` 通过。
- 本地验证首页以下控件点击后 `scrollY` 保持不变：
  - 国家下拉、州/地区下拉、数量按钮。
  - 生成、复制全部、保存、地址字段复制。
  - 国家卡片切换。
  - 分页第 2 页。
- 本地验证国家详情页和免税州页：
  - 生成按钮不滚动。
  - 州/地区下拉打开和关闭不滚动。
- 浏览器控制台无页面错误。

部署状态：

- GitHub 已推送到 `origin/main`。
- 检查时线上仍引用 `20260811-dropdown2`，需要等待 Cloudflare 自动部署或在有 `CLOUDFLARE_API_TOKEN` 的环境手动部署。

### 4.2 州/地区下拉遮挡页面

日期：2026-08-11

提交：

- `f9002b5`：Fix region dropdown rendering

问题表现：

- 线上 `州/地区` 下拉仍是浏览器原生 `<select>`。
- 展开后会出现很大的白色系统下拉层，遮挡页面内容。
- 当时只修了 `国家/地区` 自定义下拉，`州/地区` 没有接入同一套自定义菜单。

修复：

- `assets/js/app.js` 新增 `renderStateCombobox()`，把 `#state-select` 渲染为自定义下拉。
- `州/地区` 原生 select 加上 `native-select-hidden`，但仍保留为底层值来源。
- 选择地区后同步底层 `#state-select.value`、按钮文案和 active 状态。
- 切换国家后重新生成地区选项，并重建 `州/地区` 自定义菜单。
- 免税州页面没有国家下拉，但 `州/地区` 自定义下拉同样生效。
- 国家下拉和地区下拉共用打开、关闭、滚动锁定、点外部关闭、键盘 Enter/空格打开逻辑。
- 资源版本升级为 `20260811-dropdown2`。

验证：

- `npm run build` 通过。
- 本地 `/?v=dropdown2` 验证通过：
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
- 线上源码已确认引用 `20260811-dropdown2`。
- 线上 JS 已确认包含 `renderStateCombobox`、`data-state-value`、`toggleSelectCombobox`。

### 4.3 国家下拉滚动和导航位置

相关提交：

- `8d2228a`：Fix dropdown scroll behavior
- `3c3f14b`：Reset scroll on site navigation

处理内容：

- 修复国家下拉打开时页面跳动。
- 增加站内导航时回到顶部的逻辑。
- 避免浏览器历史滚动恢复造成站内页面打开位置异常。

## 5. SEO 国家入口页

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

## 6. 本地开发和验证

检查 JS 语法：

```bash
node --check assets/js/app.js
```

生成 `dist/`：

```bash
npm run build
```

本地静态服务：

```bash
python3 -m http.server 4173
```

提交前建议执行：

```bash
npm run build
node --check assets/js/app.js
git status --short
```

常规提交并推送：

```bash
git add .
git commit -m "Update site"
git push origin main
```

如果 GitHub 推送出现 HTTP/2 网络错误，可临时使用：

```bash
git -c http.version=HTTP/1.1 push origin main
```

## 7. 上线和部署

当前 Cloudflare 配置：

- `wrangler.jsonc` 指定静态资产目录为 `./dist`。
- Cloudflare 当前执行 `npx wrangler deploy`。
- `dist/` 已提交到仓库，兼容当前部署方式。

推荐流程：

1. 修改源文件，例如 `index.html`、`assets/css/styles.css`、`assets/js/app.js`、`scripts/generate-country-pages.mjs`。
2. 如涉及 JS/CSS，升级 `scripts/generate-country-pages.mjs` 中的 `appVersion`。
3. 执行：

```bash
npm run build
node --check assets/js/app.js
```

4. 确认 `dist/` 同步更新：

```bash
git diff --name-only
```

5. 提交源文件、版本资源和 `dist/`：

```bash
git add .
git commit -m "Update site"
git push origin main
```

6. 部署后检查线上资源版本：

```bash
curl -sS https://meiguodizhionline.com/ | rg "assets/(css|js)"
```

浏览器仍显示旧版时，先强刷：

- macOS Chrome：`Cmd + Shift + R`

## 8. Cloudflare 踩坑记录

已遇到的问题：

1. 如果没有 `dist/`，会报错：`assets.directory ... /dist does not exist`。
2. 如果 Wrangler 上传整个仓库，会把 `node_modules/workerd` 当资产上传，报 `Asset too large`。
3. `_redirects` 中使用绝对 URL 会导致 Wrangler 报错：`Only relative URLs are allowed`。
4. 本地执行 `npm run deploy` 时，如果没有 `CLOUDFLARE_API_TOKEN`，Wrangler 会在非交互环境中拒绝部署。

当前解决方式：

- `wrangler.jsonc` 指定：

```jsonc
{
  "assets": {
    "directory": "./dist"
  }
}
```

- `_redirects` 已删除，避免 Wrangler 静态资产部署失败。
- 如需手动部署，需要先在环境中配置 `CLOUDFLARE_API_TOKEN`。

## 9. AdSense 信息

当前 AdSense Publisher ID：

```text
ca-pub-9328440079890728
```

`ads.txt` 内容：

```text
google.com, pub-9328440079890728, DIRECT, f08c47fec0942fa0
```

如果后续复制页面或改模板，注意不要把旧的 publisher ID 写回去。

## 10. 重要提交索引

- `8783c54`：修复多控件点击后页面滚动问题，并上线 `20260811-scrollfix1` 资源版本。
- `7f9ce5a`：整理下拉框修复交接记录。
- `f9002b5`：修复州/地区原生下拉遮挡问题，并上线 `20260811-dropdown2` 资源版本。
- `3c3f14b`：站内导航时重置滚动位置。
- `8d2228a`：修复国家下拉滚动行为。
- `f79a131`：使用版本化下拉资源。
- `1994b7e`：首页改为紧凑版生成器布局。
- `2fc6d98`：新增项目交接文档。
- `3fdb8a4`：删除不兼容 Wrangler 的 `_redirects`。
- `4de95b9`：提交 `dist/`，兼容 Cloudflare 当前 deploy command。
- `977351a`：新增 `wrangler.jsonc`，指定静态资产目录。
- `48680c2`：新增轻量构建脚本。
- `4c5be2a`：升级为 50 个国家和地区的静态地址生成器。
- `5952ee3`：更新 AdSense publisher ID。

## 11. 后续优化建议

- 继续微调首页首屏空间，尤其是桌面端生成器和结果区高度。
- 给 `/countries/` 国家索引页做分组，例如北美、欧洲、亚太、拉美、中东。
- 为 50 个国家补充更细的地区数据，提高地址格式真实性。
- 给 `/en/` 页面同步中文首页的布局优化。
- 增加英文国家入口页，例如 `/en/countries/japan-address-generator/`。
- 如需恢复 `www` 跳转到裸域名，不要再使用 `_redirects` 的绝对 URL，建议在 Cloudflare Redirect Rules 中配置。
