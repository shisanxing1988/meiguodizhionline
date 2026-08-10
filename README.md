# meiguodizhionline

美国地址在线，一个可直接部署到 Cloudflare Pages 的静态工具站。支持生成 50 个常用国家和地区的地址格式测试数据。

## 页面

- `/` 中文地址生成器，支持美国、香港、日本、英国、加拿大、澳大利亚、德国、法国、中国、印度、墨西哥、巴西、新加坡、意大利、西班牙、荷兰、韩国、新西兰、瑞典、波兰、瑞士、土耳其、阿联酋和批量生成
- `/en/` 英文地址生成器，支持 50 个常用国家和地区
- `/tax-free-address/` 美国免税州地址生成器，支持批量生成
- `/blog/` 博客入口
- `/about/`、`/privacy/`、`/terms/`、`/contact/`

## Cloudflare Pages 部署

推荐配置：

- Build command: `npm run build`
- Build output directory: `dist`

也可以作为纯静态站部署：

- Build command 留空
- Build output directory 填 `/` 或 `.`

如果 Cloudflare Pages 要求输出目录，使用推荐配置即可。
