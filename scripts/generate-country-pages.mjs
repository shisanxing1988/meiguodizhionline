import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const baseUrl = "https://meiguodizhionline.com";
const appVersion = "20260811-dropdown2";
const versionedCss = `/assets/css/styles.${appVersion}.css`;
const versionedJs = `/assets/js/app.${appVersion}.js`;
const earlyScrollReset = `<script>if("scrollRestoration"in history)history.scrollRestoration="manual";if(!location.hash)scrollTo(0,0);</script>`;

const countries = [
  ["US", "美国", "United States", "us-address-generator", "美国地址生成器", "生成美国地址、州、城市、ZIP Code、电话和姓名测试数据。"],
  ["HK", "香港", "Hong Kong", "hong-kong-address-generator", "香港地址生成器", "生成香港地区地址、电话、街道和无邮编场景测试数据。"],
  ["JP", "日本", "Japan", "japan-address-generator", "日本地址生成器", "生成日本都道府县、邮编、电话、城市和街道地址测试数据。"],
  ["GB", "英国", "United Kingdom", "uk-address-generator", "英国地址生成器", "生成英国 postcode、城市、地区、电话和姓名测试数据。"],
  ["CA", "加拿大", "Canada", "canada-address-generator", "加拿大地址生成器", "生成加拿大省份、城市、邮编、电话和完整地址测试数据。"],
  ["AU", "澳大利亚", "Australia", "australia-address-generator", "澳大利亚地址生成器", "生成澳大利亚州、城市、邮编、电话和街道地址测试数据。"],
  ["DE", "德国", "Germany", "germany-address-generator", "德国地址生成器", "生成德国城市、邮编、电话和街道地址测试数据。"],
  ["FR", "法国", "France", "france-address-generator", "法国地址生成器", "生成法国地区、城市、邮编、电话和街道地址测试数据。"],
  ["CN", "中国", "China", "china-address-generator", "中国地址生成器", "生成中国城市、省市、邮编、电话和街道地址测试数据。"],
  ["IN", "印度", "India", "india-address-generator", "印度地址生成器", "生成印度邦、城市、邮编、电话和街道地址测试数据。"],
  ["MX", "墨西哥", "Mexico", "mexico-address-generator", "墨西哥地址生成器", "生成墨西哥州、城市、邮编、电话和街道地址测试数据。"],
  ["BR", "巴西", "Brazil", "brazil-address-generator", "巴西地址生成器", "生成巴西州、城市、CEP、电话和街道地址测试数据。"],
  ["SG", "新加坡", "Singapore", "singapore-address-generator", "新加坡地址生成器", "生成新加坡邮编、电话、街道和完整地址测试数据。"],
  ["IT", "意大利", "Italy", "italy-address-generator", "意大利地址生成器", "生成意大利城市、邮编、电话和街道地址测试数据。"],
  ["ES", "西班牙", "Spain", "spain-address-generator", "西班牙地址生成器", "生成西班牙城市、邮编、电话和街道地址测试数据。"],
  ["NL", "荷兰", "Netherlands", "netherlands-address-generator", "荷兰地址生成器", "生成荷兰城市、邮编、电话和街道地址测试数据。"],
  ["KR", "韩国", "South Korea", "south-korea-address-generator", "韩国地址生成器", "生成韩国城市、邮编、电话和街道地址测试数据。"],
  ["NZ", "新西兰", "New Zealand", "new-zealand-address-generator", "新西兰地址生成器", "生成新西兰城市、邮编、电话和街道地址测试数据。"],
  ["SE", "瑞典", "Sweden", "sweden-address-generator", "瑞典地址生成器", "生成瑞典城市、邮编、电话和街道地址测试数据。"],
  ["PL", "波兰", "Poland", "poland-address-generator", "波兰地址生成器", "生成波兰城市、邮编、电话和街道地址测试数据。"],
  ["CH", "瑞士", "Switzerland", "switzerland-address-generator", "瑞士地址生成器", "生成瑞士城市、邮编、电话和街道地址测试数据。"],
  ["TR", "土耳其", "Turkey", "turkey-address-generator", "土耳其地址生成器", "生成土耳其城市、邮编、电话和街道地址测试数据。"],
  ["AE", "阿联酋", "United Arab Emirates", "uae-address-generator", "阿联酋地址生成器", "生成迪拜、阿布扎比等地址、电话和无邮编测试数据。"],
  ["IE", "爱尔兰", "Ireland", "ireland-address-generator", "爱尔兰地址生成器", "生成爱尔兰 Eircode、城市、电话和街道地址测试数据。"],
  ["NO", "挪威", "Norway", "norway-address-generator", "挪威地址生成器", "生成挪威城市、邮编、电话和街道地址测试数据。"],
  ["DK", "丹麦", "Denmark", "denmark-address-generator", "丹麦地址生成器", "生成丹麦城市、邮编、电话和街道地址测试数据。"],
  ["FI", "芬兰", "Finland", "finland-address-generator", "芬兰地址生成器", "生成芬兰城市、邮编、电话和街道地址测试数据。"],
  ["BE", "比利时", "Belgium", "belgium-address-generator", "比利时地址生成器", "生成比利时城市、邮编、电话和街道地址测试数据。"],
  ["AT", "奥地利", "Austria", "austria-address-generator", "奥地利地址生成器", "生成奥地利城市、邮编、电话和街道地址测试数据。"],
  ["PT", "葡萄牙", "Portugal", "portugal-address-generator", "葡萄牙地址生成器", "生成葡萄牙城市、邮编、电话和街道地址测试数据。"],
  ["GR", "希腊", "Greece", "greece-address-generator", "希腊地址生成器", "生成希腊城市、邮编、电话和街道地址测试数据。"],
  ["CZ", "捷克", "Czechia", "czechia-address-generator", "捷克地址生成器", "生成捷克城市、邮编、电话和街道地址测试数据。"],
  ["HU", "匈牙利", "Hungary", "hungary-address-generator", "匈牙利地址生成器", "生成匈牙利城市、邮编、电话和街道地址测试数据。"],
  ["RO", "罗马尼亚", "Romania", "romania-address-generator", "罗马尼亚地址生成器", "生成罗马尼亚城市、邮编、电话和街道地址测试数据。"],
  ["UA", "乌克兰", "Ukraine", "ukraine-address-generator", "乌克兰地址生成器", "生成乌克兰城市、邮编、电话和街道地址测试数据。"],
  ["IL", "以色列", "Israel", "israel-address-generator", "以色列地址生成器", "生成以色列城市、邮编、电话和街道地址测试数据。"],
  ["SA", "沙特阿拉伯", "Saudi Arabia", "saudi-arabia-address-generator", "沙特阿拉伯地址生成器", "生成沙特城市、邮编、电话和街道地址测试数据。"],
  ["QA", "卡塔尔", "Qatar", "qatar-address-generator", "卡塔尔地址生成器", "生成卡塔尔地址、电话和无邮编场景测试数据。"],
  ["MY", "马来西亚", "Malaysia", "malaysia-address-generator", "马来西亚地址生成器", "生成马来西亚城市、邮编、电话和街道地址测试数据。"],
  ["TH", "泰国", "Thailand", "thailand-address-generator", "泰国地址生成器", "生成泰国城市、邮编、电话和街道地址测试数据。"],
  ["ID", "印度尼西亚", "Indonesia", "indonesia-address-generator", "印度尼西亚地址生成器", "生成印尼城市、邮编、电话和街道地址测试数据。"],
  ["PH", "菲律宾", "Philippines", "philippines-address-generator", "菲律宾地址生成器", "生成菲律宾城市、邮编、电话和街道地址测试数据。"],
  ["VN", "越南", "Vietnam", "vietnam-address-generator", "越南地址生成器", "生成越南城市、邮编、电话和街道地址测试数据。"],
  ["PK", "巴基斯坦", "Pakistan", "pakistan-address-generator", "巴基斯坦地址生成器", "生成巴基斯坦城市、邮编、电话和街道地址测试数据。"],
  ["BD", "孟加拉国", "Bangladesh", "bangladesh-address-generator", "孟加拉国地址生成器", "生成孟加拉国城市、邮编、电话和街道地址测试数据。"],
  ["AR", "阿根廷", "Argentina", "argentina-address-generator", "阿根廷地址生成器", "生成阿根廷城市、邮编、电话和街道地址测试数据。"],
  ["CL", "智利", "Chile", "chile-address-generator", "智利地址生成器", "生成智利城市、邮编、电话和街道地址测试数据。"],
  ["CO", "哥伦比亚", "Colombia", "colombia-address-generator", "哥伦比亚地址生成器", "生成哥伦比亚城市、邮编、电话和街道地址测试数据。"],
  ["PE", "秘鲁", "Peru", "peru-address-generator", "秘鲁地址生成器", "生成秘鲁城市、邮编、电话和街道地址测试数据。"],
  ["ZA", "南非", "South Africa", "south-africa-address-generator", "南非地址生成器", "生成南非城市、邮编、电话和街道地址测试数据。"]
];

function htmlEscape(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function layout({ title, description, canonical, body, countryCode = "" }) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${earlyScrollReset}
  <title>${htmlEscape(title)}</title>
  <meta name="description" content="${htmlEscape(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${versionedCss}">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9328440079890728" crossorigin="anonymous"></script>
</head>
<body data-page="country" ${countryCode ? `data-country-default="${countryCode}"` : ""}>
  <header class="site-header">
    <nav class="nav">
      <a class="brand" href="/"><span class="brand-mark">US</span><span>美国地址在线</span></a>
      <div class="nav-links">
        <a href="/">美国地址</a>
        <a href="/countries/">国家入口</a>
        <a href="/tax-free-address/">免税州地址</a>
        <a href="/blog/">博客</a>
        <a href="/about/">关于</a>
        <a class="lang-link" href="/en/">English</a>
      </div>
    </nav>
  </header>
  <main>${body}</main>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div><h3>美国地址在线</h3><p>面向中文用户的多国家地址格式生成与测试工具。</p></div>
      <div><h4>工具</h4><a href="/">地址生成器</a><a href="/countries/">国家入口</a><a href="/tax-free-address/">免税州地址</a></div>
      <div><h4>资源</h4><a href="/blog/">博客</a><a href="/contact/">联系我们</a></div>
      <div><h4>法律</h4><a href="/privacy/">隐私政策</a><a href="/terms/">使用条款</a></div>
    </div>
    <div class="container copyright">© 2026 meiguodizhionline.com</div>
  </footer>
  <div id="toast" class="toast"></div>
  <script src="${versionedJs}"></script>
</body>
</html>
`;
}

function generatorMarkup(code, zhName) {
  return `<div class="tool-panel country-tool" id="generator">
    <div class="tool-top">
      <div class="field">
        <label for="country-select">国家/地区</label>
        <select id="country-select"></select>
      </div>
      <div class="field">
        <label for="state-select">州/地区</label>
        <select id="state-select"></select>
      </div>
      <div class="field compact-field">
        <label for="batch-count">数量</label>
        <select id="batch-count">
          <option value="1">1</option>
          <option value="5" selected>5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <button class="primary-btn generate-main-btn" id="generate-btn" type="button">立即生成${zhName}地址</button>
    </div>
    <div class="result-area">
      <div class="result-head">
        <h2>${zhName}地址生成结果</h2>
        <div class="actions">
          <button class="ghost-btn" id="copy-all-btn" type="button">复制全部</button>
          <button class="secondary-btn" id="save-btn" type="button">保存</button>
        </div>
      </div>
      <div id="address-result" class="empty-state">点击按钮生成${zhName}地址测试数据</div>
    </div>
    <div class="saved-panel">
      <div class="saved-head">
        <h2>已保存地址</h2>
        <div class="actions">
          <button class="ghost-btn" id="export-csv-btn" type="button">导出 CSV</button>
          <button class="ghost-btn" id="export-json-btn" type="button">导出 JSON</button>
          <button class="danger-btn" id="clear-btn" type="button">清空</button>
        </div>
      </div>
      <div id="saved-list" class="saved-list"></div>
    </div>
  </div>
  <div class="notice">提示：${zhName}地址生成内容仅用于测试、开发和地址格式参考，不保证真实可收件。</div>`;
}

function countryPage([code, zhName, enName, slug, title, description]) {
  const canonical = `${baseUrl}/countries/${slug}/`;
  const related = countries.filter(([itemCode]) => itemCode !== code).slice(0, 12);
  const body = `<section class="hero country-hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">国家地址生成器 · ${htmlEscape(enName)}</p>
        <h1>${htmlEscape(title)}</h1>
        <p>${htmlEscape(description)}适合开发测试、表单填写演示、跨境电商后台测试、QA 自动化和地址格式参考。</p>
        <div class="trust-row">
          <span class="pill">默认选择${htmlEscape(zhName)}</span>
          <span class="pill">批量生成</span>
          <span class="pill">字段点击复制</span>
          <span class="pill">CSV / JSON 导出</span>
        </div>
      </div>
      <div class="generator-workspace">${generatorMarkup(code, zhName)}</div>
    </div>
  </section>
  <section class="section country-content">
    <div class="container section-grid">
      <article class="feature">
        <div class="feature-icon">1</div>
        <h2>${htmlEscape(zhName)}地址字段</h2>
        <p>页面会生成姓名、电话、街道地址、城市、州/地区、邮编和完整地址，方便检查表单字段和导出格式。</p>
      </article>
      <article class="feature">
        <div class="feature-icon">2</div>
        <h2>适合测试场景</h2>
        <p>可用于注册表单、结账流程、CRM、跨境电商后台、数据库填充和自动化测试样例。</p>
      </article>
      <article class="feature">
        <div class="feature-icon">3</div>
        <h2>使用边界</h2>
        <p>生成内容是格式参考数据，不验证真实住址，也不保证可收件，请勿用于违法、欺诈或违反平台规则的用途。</p>
      </article>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">更多国家入口</p>
          <h2>继续生成其他国家地址</h2>
        </div>
        <p>这些入口页都可直接访问和收录，适合按国家查找地址格式测试数据。</p>
      </div>
      <div class="country-grid">
        ${related.map(([relatedCode, relatedZh, relatedEn, relatedSlug]) => `<a class="country-card" href="/countries/${relatedSlug}/" data-country="${relatedCode}"><strong>${htmlEscape(relatedZh)}</strong><span>${htmlEscape(relatedEn)}</span></a>`).join("")}
      </div>
    </div>
  </section>`;
  return layout({ title: `${title}｜邮编、电话、姓名测试数据`, description, canonical, body, countryCode: code });
}

function indexPage() {
  const canonical = `${baseUrl}/countries/`;
  const body = `<section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">国家地址生成器索引</p>
        <h1>50 个常用国家和地区地址生成器入口</h1>
        <p>按国家快速进入对应地址生成页面，生成姓名、电话、街道、城市、地区、邮编和完整地址测试数据。</p>
      </div>
    </div>
  </section>
  <section class="section country-section">
    <div class="container">
      <div class="country-grid">
        ${countries.map(([code, zhName, enName, slug]) => `<a class="country-card" href="/countries/${slug}/" data-country="${code}"><strong>${htmlEscape(zhName)}</strong><span>${htmlEscape(enName)}</span></a>`).join("")}
      </div>
    </div>
  </section>`;
  return layout({
    title: "50 个国家地址生成器入口｜美国地址在线",
    description: "美国地址在线提供 50 个常用国家和地区地址生成器入口，支持美国、日本、香港、英国、加拿大、澳大利亚、新加坡等地址测试数据。",
    canonical,
    body
  });
}

function sitemap() {
  const urls = [
    ["/", "1.0"],
    ["/en/", "0.9"],
    ["/countries/", "0.95"],
    ["/tax-free-address/", "0.8"],
    ["/blog/", "0.6"],
    ["/about/", "0.4"],
    ["/privacy/", "0.3"],
    ["/terms/", "0.3"],
    ["/contact/", "0.3"],
    ...countries.map(([, , , slug]) => [`/countries/${slug}/`, "0.85"])
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([path, priority]) => `  <url><loc>${baseUrl}${path}</loc><priority>${priority}</priority></url>`).join("\n")}
</urlset>
`;
}

const countriesDir = join(root, "countries");
await copyFile(join(root, "assets/css/styles.css"), join(root, `assets/css/styles.${appVersion}.css`));
await copyFile(join(root, "assets/js/app.js"), join(root, `assets/js/app.${appVersion}.js`));
await mkdir(countriesDir, { recursive: true });
await writeFile(join(countriesDir, "index.html"), indexPage());

await Promise.all(countries.map(async (country) => {
  const slug = country[3];
  const dir = join(countriesDir, slug);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), countryPage(country));
}));

await writeFile(join(root, "sitemap.xml"), sitemap());
