const US_STATES = [
  ["AL", "阿拉巴马州", "Alabama", ["Birmingham", "Montgomery", "Mobile", "Huntsville"], ["35203", "36104", "36602", "35801"], ["205", "334", "251", "256"]],
  ["AK", "阿拉斯加州", "Alaska", ["Anchorage", "Juneau", "Fairbanks"], ["99501", "99801", "99701"], ["907"]],
  ["AZ", "亚利桑那州", "Arizona", ["Phoenix", "Tucson", "Mesa", "Scottsdale"], ["85004", "85701", "85201", "85251"], ["480", "520", "602", "623"]],
  ["AR", "阿肯色州", "Arkansas", ["Little Rock", "Fayetteville", "Fort Smith"], ["72201", "72701", "72901"], ["479", "501", "870"]],
  ["CA", "加利福尼亚州", "California", ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento"], ["90012", "94103", "92101", "95113", "95814"], ["213", "310", "415", "619", "408"]],
  ["CO", "科罗拉多州", "Colorado", ["Denver", "Colorado Springs", "Boulder"], ["80202", "80903", "80302"], ["303", "719", "720"]],
  ["CT", "康涅狄格州", "Connecticut", ["Hartford", "New Haven", "Stamford"], ["06103", "06510", "06901"], ["203", "475", "860"]],
  ["DE", "特拉华州", "Delaware", ["Wilmington", "Dover", "Newark"], ["19801", "19901", "19711"], ["302"]],
  ["DC", "华盛顿特区", "District of Columbia", ["Washington"], ["20001", "20005", "20036"], ["202"]],
  ["FL", "佛罗里达州", "Florida", ["Miami", "Orlando", "Tampa", "Jacksonville"], ["33130", "32801", "33602", "32202"], ["305", "407", "813", "904"]],
  ["GA", "佐治亚州", "Georgia", ["Atlanta", "Savannah", "Augusta"], ["30303", "31401", "30901"], ["404", "470", "678", "912"]],
  ["HI", "夏威夷州", "Hawaii", ["Honolulu", "Hilo", "Kailua"], ["96813", "96720", "96734"], ["808"]],
  ["ID", "爱达荷州", "Idaho", ["Boise", "Idaho Falls", "Meridian"], ["83702", "83402", "83642"], ["208", "986"]],
  ["IL", "伊利诺伊州", "Illinois", ["Chicago", "Springfield", "Naperville"], ["60601", "62701", "60540"], ["312", "217", "630", "773"]],
  ["IN", "印第安纳州", "Indiana", ["Indianapolis", "Fort Wayne", "Bloomington"], ["46204", "46802", "47401"], ["317", "260", "812"]],
  ["IA", "爱荷华州", "Iowa", ["Des Moines", "Cedar Rapids", "Iowa City"], ["50309", "52401", "52240"], ["515", "319", "563"]],
  ["KS", "堪萨斯州", "Kansas", ["Wichita", "Topeka", "Kansas City"], ["67202", "66603", "66101"], ["316", "785", "913"]],
  ["KY", "肯塔基州", "Kentucky", ["Louisville", "Lexington", "Bowling Green"], ["40202", "40507", "42101"], ["502", "859", "270"]],
  ["LA", "路易斯安那州", "Louisiana", ["New Orleans", "Baton Rouge", "Lafayette"], ["70112", "70802", "70501"], ["504", "225", "337"]],
  ["ME", "缅因州", "Maine", ["Portland", "Augusta", "Bangor"], ["04101", "04330", "04401"], ["207"]],
  ["MD", "马里兰州", "Maryland", ["Baltimore", "Annapolis", "Rockville"], ["21202", "21401", "20850"], ["301", "410", "443"]],
  ["MA", "马萨诸塞州", "Massachusetts", ["Boston", "Cambridge", "Worcester"], ["02108", "02139", "01608"], ["617", "857", "508"]],
  ["MI", "密歇根州", "Michigan", ["Detroit", "Grand Rapids", "Ann Arbor"], ["48226", "49503", "48104"], ["313", "616", "734"]],
  ["MN", "明尼苏达州", "Minnesota", ["Minneapolis", "Saint Paul", "Duluth"], ["55401", "55102", "55802"], ["612", "651", "218"]],
  ["MS", "密西西比州", "Mississippi", ["Jackson", "Biloxi", "Oxford"], ["39201", "39530", "38655"], ["601", "228", "662"]],
  ["MO", "密苏里州", "Missouri", ["Kansas City", "St. Louis", "Columbia"], ["64106", "63101", "65201"], ["314", "417", "573", "816"]],
  ["MT", "蒙大拿州", "Montana", ["Billings", "Missoula", "Helena"], ["59101", "59802", "59601"], ["406"]],
  ["NE", "内布拉斯加州", "Nebraska", ["Omaha", "Lincoln", "Grand Island"], ["68102", "68508", "68801"], ["308", "402", "531"]],
  ["NV", "内华达州", "Nevada", ["Las Vegas", "Reno", "Henderson"], ["89101", "89501", "89015"], ["702", "725", "775"]],
  ["NH", "新罕布什尔州", "New Hampshire", ["Manchester", "Concord", "Nashua"], ["03101", "03301", "03060"], ["603"]],
  ["NJ", "新泽西州", "New Jersey", ["Newark", "Jersey City", "Trenton"], ["07102", "07302", "08608"], ["201", "609", "732", "973"]],
  ["NM", "新墨西哥州", "New Mexico", ["Albuquerque", "Santa Fe", "Las Cruces"], ["87102", "87501", "88001"], ["505", "575"]],
  ["NY", "纽约州", "New York", ["New York", "Buffalo", "Albany", "Rochester"], ["10001", "14202", "12207", "14604"], ["212", "315", "518", "716"]],
  ["NC", "北卡罗来纳州", "North Carolina", ["Charlotte", "Raleigh", "Durham"], ["28202", "27601", "27701"], ["704", "919", "980"]],
  ["ND", "北达科他州", "North Dakota", ["Fargo", "Bismarck", "Grand Forks"], ["58102", "58501", "58201"], ["701"]],
  ["OH", "俄亥俄州", "Ohio", ["Columbus", "Cleveland", "Cincinnati"], ["43215", "44114", "45202"], ["216", "513", "614"]],
  ["OK", "俄克拉荷马州", "Oklahoma", ["Oklahoma City", "Tulsa", "Norman"], ["73102", "74103", "73069"], ["405", "539", "918"]],
  ["OR", "俄勒冈州", "Oregon", ["Portland", "Salem", "Eugene"], ["97204", "97301", "97401"], ["503", "541", "971"]],
  ["PA", "宾夕法尼亚州", "Pennsylvania", ["Philadelphia", "Pittsburgh", "Harrisburg"], ["19103", "15222", "17101"], ["215", "412", "717"]],
  ["RI", "罗德岛州", "Rhode Island", ["Providence", "Newport", "Warwick"], ["02903", "02840", "02886"], ["401"]],
  ["SC", "南卡罗来纳州", "South Carolina", ["Charleston", "Columbia", "Greenville"], ["29401", "29201", "29601"], ["803", "843", "864"]],
  ["SD", "南达科他州", "South Dakota", ["Sioux Falls", "Rapid City", "Pierre"], ["57104", "57701", "57501"], ["605"]],
  ["TN", "田纳西州", "Tennessee", ["Nashville", "Memphis", "Knoxville"], ["37203", "38103", "37902"], ["615", "901", "865"]],
  ["TX", "德克萨斯州", "Texas", ["Austin", "Dallas", "Houston", "San Antonio"], ["78701", "75201", "77002", "78205"], ["214", "512", "713", "210"]],
  ["UT", "犹他州", "Utah", ["Salt Lake City", "Provo", "Ogden"], ["84101", "84601", "84401"], ["385", "435", "801"]],
  ["VT", "佛蒙特州", "Vermont", ["Burlington", "Montpelier", "Rutland"], ["05401", "05602", "05701"], ["802"]],
  ["VA", "弗吉尼亚州", "Virginia", ["Richmond", "Arlington", "Norfolk"], ["23219", "22201", "23510"], ["703", "757", "804"]],
  ["WA", "华盛顿州", "Washington", ["Seattle", "Spokane", "Tacoma"], ["98101", "99201", "98402"], ["206", "253", "509"]],
  ["WV", "西弗吉尼亚州", "West Virginia", ["Charleston", "Morgantown", "Huntington"], ["25301", "26505", "25701"], ["304", "681"]],
  ["WI", "威斯康星州", "Wisconsin", ["Milwaukee", "Madison", "Green Bay"], ["53202", "53703", "54301"], ["414", "608", "920"]],
  ["WY", "怀俄明州", "Wyoming", ["Cheyenne", "Casper", "Laramie"], ["82001", "82601", "82070"], ["307"]]
];

const TAX_FREE = new Set(["AK", "DE", "MT", "NH", "OR"]);
const FIRST_NAMES = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Emma", "Olivia", "Ava", "Sophia", "Mia", "Charlotte", "Amelia", "Harper", "Evelyn", "Liam", "Noah", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason", "Logan", "Henry", "Alexander"];
const LAST_NAMES = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson"];
const STREETS = ["Main St", "Oak Ave", "Maple Dr", "Cedar Ln", "Pine St", "Washington Ave", "Lakeview Dr", "Hillcrest Rd", "Market St", "Park Ave", "Broadway", "Sunset Blvd", "River Rd", "Church St", "Highland Ave"];

const TEXT = {
  zh: {
    random: "随机 Random",
    generate: "生成地址",
    copyAll: "复制全部",
    save: "保存",
    exportCsv: "导出 CSV",
    exportJson: "导出 JSON",
    clear: "清空",
    delete: "删除",
    empty: "点击上方按钮生成一个美国地址",
    noSaved: "暂无保存的地址",
    copied: "已复制",
    saved: "地址已保存",
    duplicate: "这个地址已经保存过",
    cleared: "已清空保存记录",
    needGenerate: "请先生成地址",
    firstName: "名 / First Name",
    lastName: "姓 / Last Name",
    gender: "性别 / Gender",
    phone: "电话 / Phone",
    street: "街道地址 / Street Address",
    city: "城市 / City",
    state: "州 / State",
    zip: "邮编 / ZIP Code",
    full: "完整地址 / Full Address",
    male: "男",
    female: "女"
  },
  en: {
    random: "Random",
    generate: "Generate Address",
    copyAll: "Copy All",
    save: "Save",
    exportCsv: "Export CSV",
    exportJson: "Export JSON",
    clear: "Clear",
    delete: "Delete",
    empty: "Generate a US address to start",
    noSaved: "No saved addresses yet",
    copied: "Copied",
    saved: "Address saved",
    duplicate: "This address is already saved",
    cleared: "Saved addresses cleared",
    needGenerate: "Generate an address first",
    firstName: "First Name",
    lastName: "Last Name",
    gender: "Gender",
    phone: "Phone",
    street: "Street Address",
    city: "City",
    state: "State",
    zip: "ZIP Code",
    full: "Full Address",
    male: "Male",
    female: "Female"
  }
};

const $ = (selector) => document.querySelector(selector);
const pageLocale = document.documentElement.lang && document.documentElement.lang.startsWith("en") ? "en" : "zh";
const pageType = document.body.dataset.page || "home";
const t = TEXT[pageLocale];
const storageKey = `meiguodizhionline:saved:${pageLocale}:${pageType}`;
let currentAddress = null;

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function stateObject(row) {
  const [code, zhName, enName, cities, zips, areaCodes] = row;
  return { code, zhName, enName, cities, zips, areaCodes };
}

function allCandidateStates() {
  const rows = pageType === "tax-free" ? US_STATES.filter((row) => TAX_FREE.has(row[0])) : US_STATES;
  return rows.map(stateObject);
}

function selectedState() {
  const select = $("#state-select");
  const candidates = allCandidateStates();
  if (!select || select.value === "RANDOM") return pick(candidates);
  return candidates.find((state) => state.code === select.value) || pick(candidates);
}

function phone(areaCodes) {
  const prefix = pick(areaCodes);
  const mid = String(Math.floor(200 + Math.random() * 700));
  const last = String(Math.floor(1000 + Math.random() * 9000));
  return `+1 (${prefix}) ${mid}-${last}`;
}

function generateAddress() {
  const state = selectedState();
  const firstName = pick(FIRST_NAMES);
  const lastName = pick(LAST_NAMES);
  const gender = Math.random() > 0.5 ? t.male : t.female;
  const city = pick(state.cities);
  const zip = pick(state.zips);
  const street = `${Math.floor(100 + Math.random() * 9800)} ${pick(STREETS)}`;
  const stateName = pageLocale === "en" ? state.enName : `${state.zhName} (${state.code})`;
  const fullAddress = `${street}, ${city}, ${state.code} ${zip}, USA`;
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    firstName,
    lastName,
    gender,
    phone: phone(state.areaCodes),
    street,
    city,
    state: stateName,
    stateCode: state.code,
    zip,
    fullAddress,
    createdAt: new Date().toISOString()
  };
}

function fields(address) {
  return [
    ["firstName", t.firstName, address.firstName],
    ["lastName", t.lastName, address.lastName],
    ["gender", t.gender, address.gender],
    ["phone", t.phone, address.phone],
    ["street", t.street, address.street],
    ["city", t.city, address.city],
    ["state", t.state, address.state],
    ["zip", t.zip, address.zip],
    ["fullAddress", t.full, address.fullAddress, true]
  ];
}

function renderAddress(address) {
  const result = $("#address-result");
  if (!result) return;
  result.innerHTML = `<div class="address-grid">${fields(address).map(([key, label, value, full]) => `
    <button class="address-item ${full ? "full" : ""}" data-copy="${escapeHtml(value)}" type="button">
      <span>${label}</span>
      <strong>${escapeHtml(value)}</strong>
    </button>
  `).join("")}</div>`;
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => showToast(t.copied)).catch(() => {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast(t.copied);
  });
}

function addressText(address) {
  return fields(address).map(([, label, value]) => `${label}: ${value}`).join("\n");
}

function getSaved() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function setSaved(items) {
  localStorage.setItem(storageKey, JSON.stringify(items));
  renderSaved();
}

function saveCurrent() {
  if (!currentAddress) {
    showToast(t.needGenerate);
    return;
  }
  const saved = getSaved();
  if (saved.some((item) => item.fullAddress === currentAddress.fullAddress)) {
    showToast(t.duplicate);
    return;
  }
  setSaved([currentAddress, ...saved].slice(0, 100));
  showToast(t.saved);
}

function renderSaved() {
  const list = $("#saved-list");
  if (!list) return;
  const saved = getSaved();
  if (!saved.length) {
    list.innerHTML = `<div class="empty-state">${t.noSaved}</div>`;
    return;
  }
  list.innerHTML = saved.map((item) => `
    <div class="saved-card">
      <div>
        <strong>${escapeHtml(item.firstName)} ${escapeHtml(item.lastName)} · ${escapeHtml(item.phone)}</strong>
        <span>${escapeHtml(item.fullAddress)}</span>
      </div>
      <div class="actions">
        <button class="ghost-btn" type="button" data-copy-saved="${escapeHtml(addressText(item))}">${t.copyAll}</button>
        <button class="danger-btn" type="button" data-delete="${item.id}">${t.delete}</button>
      </div>
    </div>
  `).join("");
}

function exportSaved(format) {
  const saved = getSaved();
  if (!saved.length) {
    showToast(t.noSaved);
    return;
  }
  const name = `us-addresses-${new Date().toISOString().slice(0, 10)}`;
  if (format === "json") {
    download(`${name}.json`, JSON.stringify(saved, null, 2), "application/json;charset=utf-8");
    return;
  }
  const headers = ["firstName", "lastName", "gender", "phone", "street", "city", "stateCode", "zip", "fullAddress"];
  const rows = [headers.join(","), ...saved.map((item) => headers.map((key) => csvCell(item[key])).join(","))];
  download(`${name}.csv`, `\uFEFF${rows.join("\n")}`, "text/csv;charset=utf-8");
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1600);
}

function fillStateSelect() {
  const select = $("#state-select");
  if (!select) return;
  select.innerHTML = `<option value="RANDOM">${t.random}</option>` + allCandidateStates().map((state) => {
    const label = pageLocale === "en" ? `${state.enName} (${state.code})` : `${state.zhName} (${state.code})`;
    return `<option value="${state.code}">${label}</option>`;
  }).join("");
}

function initGenerator() {
  fillStateSelect();
  renderSaved();
  $("#generate-btn")?.addEventListener("click", () => {
    currentAddress = generateAddress();
    renderAddress(currentAddress);
  });
  $("#copy-all-btn")?.addEventListener("click", () => currentAddress ? copyText(addressText(currentAddress)) : showToast(t.needGenerate));
  $("#save-btn")?.addEventListener("click", saveCurrent);
  $("#export-csv-btn")?.addEventListener("click", () => exportSaved("csv"));
  $("#export-json-btn")?.addEventListener("click", () => exportSaved("json"));
  $("#clear-btn")?.addEventListener("click", () => {
    setSaved([]);
    showToast(t.cleared);
  });
  document.addEventListener("click", (event) => {
    const copyTarget = event.target.closest("[data-copy]");
    if (copyTarget) copyText(copyTarget.dataset.copy);
    const copySaved = event.target.closest("[data-copy-saved]");
    if (copySaved) copyText(copySaved.dataset.copySaved);
    const del = event.target.closest("[data-delete]");
    if (del) setSaved(getSaved().filter((item) => item.id !== del.dataset.delete));
  });
}

if ($("#address-result")) {
  initGenerator();
}
