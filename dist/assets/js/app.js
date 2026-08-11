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
const HK_DISTRICTS = [
  ["HK-CW", "中西区", "Central and Western", ["Central", "Sheung Wan", "Sai Ying Pun", "Kennedy Town"], ["Queen's Road Central", "Des Voeux Road Central", "Connaught Road Central", "Bonham Road"], ["2522", "2541", "2850"]],
  ["HK-WC", "湾仔区", "Wan Chai", ["Wan Chai", "Causeway Bay", "Happy Valley"], ["Hennessy Road", "Johnston Road", "Lockhart Road", "Leighton Road"], ["2572", "2891", "2833"]],
  ["HK-YTM", "油尖旺区", "Yau Tsim Mong", ["Tsim Sha Tsui", "Mong Kok", "Yau Ma Tei"], ["Nathan Road", "Canton Road", "Argyle Street", "Shanghai Street"], ["2782", "2398", "2739"]],
  ["HK-KC", "九龙城区", "Kowloon City", ["Kowloon City", "Hung Hom", "Ho Man Tin"], ["Ma Tau Wai Road", "Gillies Avenue", "Waterloo Road"], ["2713", "2765", "2333"]],
  ["HK-ST", "沙田区", "Sha Tin", ["Sha Tin", "Ma On Shan", "Fo Tan"], ["Sha Tin Centre Street", "Tai Chung Kiu Road", "On Luk Street"], ["2601", "2633", "2698"]],
  ["HK-TW", "荃湾区", "Tsuen Wan", ["Tsuen Wan", "Kwai Chung", "Tsing Yi"], ["Castle Peak Road", "Yeung Uk Road", "Texaco Road"], ["2498", "2411", "2439"]]
];
const JP_PREFECTURES = [
  ["JP-13", "东京都", "Tokyo", ["Shibuya", "Shinjuku", "Chiyoda", "Minato"], ["Jingumae", "Nishishinjuku", "Kanda", "Akasaka"], ["150", "160", "101", "107"], ["03"]],
  ["JP-27", "大阪府", "Osaka", ["Osaka", "Sakai", "Toyonaka"], ["Umeda", "Namba", "Sakai-ku", "Senri"], ["530", "542", "590", "560"], ["06", "072"]],
  ["JP-14", "神奈川县", "Kanagawa", ["Yokohama", "Kawasaki", "Kamakura"], ["Minatomirai", "Kawasaki-ku", "Ofuna"], ["220", "210", "247"], ["045", "044", "0467"]],
  ["JP-23", "爱知县", "Aichi", ["Nagoya", "Toyota", "Okazaki"], ["Sakae", "Meieki", "Koromo"], ["460", "450", "471"], ["052", "0565"]],
  ["JP-40", "福冈县", "Fukuoka", ["Fukuoka", "Kitakyushu", "Kurume"], ["Hakata", "Tenjin", "Kokura"], ["812", "810", "802"], ["092", "093"]],
  ["JP-01", "北海道", "Hokkaido", ["Sapporo", "Hakodate", "Asahikawa"], ["Odori", "Kita", "Goryokaku"], ["060", "001", "040"], ["011", "0138"]]
];
const JP_FIRST_NAMES = ["Haruto", "Yuto", "Sota", "Ren", "Yui", "Aoi", "Hina", "Sakura", "Mei", "Riku", "Daiki", "Mio"];
const JP_LAST_NAMES = ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato"];
const GENERIC_COUNTRIES = {
  GB: {
    zhName: "英国",
    enName: "United Kingdom",
    rows: [
      ["GB-ENG", "英格兰", "England", ["London", "Manchester", "Birmingham", "Leeds"], ["SW1A 1AA", "M1 1AE", "B1 1BB", "LS1 1UR"], ["20", "161", "121"], ["High Street", "King Street", "Station Road", "Church Lane"]],
      ["GB-SCT", "苏格兰", "Scotland", ["Edinburgh", "Glasgow", "Aberdeen"], ["EH1 1YZ", "G1 1AA", "AB10 1AB"], ["131", "141", "1224"], ["Princes Street", "Argyle Street", "Union Street"]],
      ["GB-WLS", "威尔士", "Wales", ["Cardiff", "Swansea", "Newport"], ["CF10 1EP", "SA1 1AA", "NP20 1DD"], ["29", "1792", "1633"], ["Queen Street", "Wind Street", "Commercial Street"]]
    ]
  },
  CA: {
    zhName: "加拿大",
    enName: "Canada",
    rows: [
      ["CA-ON", "安大略省", "Ontario", ["Toronto", "Ottawa", "Mississauga"], ["M5V 2T6", "K1P 1J1", "L5B 2C9"], ["416", "613", "905"], ["King Street West", "Queen Street", "Yonge Street"]],
      ["CA-BC", "不列颠哥伦比亚省", "British Columbia", ["Vancouver", "Victoria", "Burnaby"], ["V6B 1A1", "V8W 1A1", "V5C 2H6"], ["604", "778", "250"], ["Granville Street", "Robson Street", "Douglas Street"]],
      ["CA-QC", "魁北克省", "Quebec", ["Montreal", "Quebec City", "Laval"], ["H3B 1A7", "G1R 4P5", "H7N 1A1"], ["514", "418", "450"], ["Rue Sainte-Catherine", "Boulevard Rene-Levesque", "Rue Saint-Jean"]]
    ]
  },
  AU: {
    zhName: "澳大利亚",
    enName: "Australia",
    rows: [
      ["AU-NSW", "新南威尔士州", "New South Wales", ["Sydney", "Newcastle", "Wollongong"], ["2000", "2300", "2500"], ["2"], ["George Street", "Pitt Street", "Hunter Street"]],
      ["AU-VIC", "维多利亚州", "Victoria", ["Melbourne", "Geelong", "Ballarat"], ["3000", "3220", "3350"], ["3"], ["Collins Street", "Swanston Street", "Lydiard Street"]],
      ["AU-QLD", "昆士兰州", "Queensland", ["Brisbane", "Gold Coast", "Cairns"], ["4000", "4217", "4870"], ["7"], ["Queen Street", "Adelaide Street", "Lake Street"]]
    ]
  },
  DE: {
    zhName: "德国",
    enName: "Germany",
    rows: [
      ["DE-BE", "柏林", "Berlin", ["Berlin"], ["10115", "10117", "10405"], ["30"], ["Friedrichstrasse", "Unter den Linden", "Torstrasse"]],
      ["DE-BY", "巴伐利亚州", "Bavaria", ["Munich", "Nuremberg", "Augsburg"], ["80331", "90402", "86150"], ["89", "911", "821"], ["Marienplatz", "Maximilianstrasse", "Koenigstrasse"]],
      ["DE-NW", "北莱茵-威斯特法伦州", "North Rhine-Westphalia", ["Cologne", "Dusseldorf", "Dortmund"], ["50667", "40213", "44135"], ["221", "211", "231"], ["Hohe Strasse", "Koenigsallee", "Westenhellweg"]]
    ]
  },
  FR: {
    zhName: "法国",
    enName: "France",
    rows: [
      ["FR-IDF", "法兰西岛", "Ile-de-France", ["Paris", "Boulogne-Billancourt", "Saint-Denis"], ["75001", "92100", "93200"], ["1"], ["Rue de Rivoli", "Avenue Victor Hugo", "Boulevard Saint-Germain"]],
      ["FR-ARA", "奥弗涅-罗讷-阿尔卑斯", "Auvergne-Rhone-Alpes", ["Lyon", "Grenoble", "Saint-Etienne"], ["69002", "38000", "42000"], ["4"], ["Rue de la Republique", "Cours Jean Jaures", "Rue Nationale"]],
      ["FR-PAC", "普罗旺斯-阿尔卑斯-蓝色海岸", "Provence-Alpes-Cote d'Azur", ["Marseille", "Nice", "Toulon"], ["13001", "06000", "83000"], ["4"], ["La Canebiere", "Avenue Jean Medecin", "Boulevard de Strasbourg"]]
    ]
  },
  CN: {
    zhName: "中国",
    enName: "China",
    rows: [
      ["CN-BJ", "北京市", "Beijing", ["Beijing"], ["100000", "100020", "100080"], ["10"], ["Chaoyang Road", "Jianguo Road", "Zhongguancun Street"]],
      ["CN-SH", "上海市", "Shanghai", ["Shanghai"], ["200000", "200120", "200030"], ["21"], ["Nanjing Road", "Huaihai Road", "Century Avenue"]],
      ["CN-GD", "广东省", "Guangdong", ["Guangzhou", "Shenzhen", "Dongguan"], ["510000", "518000", "523000"], ["20", "755", "769"], ["Tianhe Road", "Shennan Avenue", "Dongcheng Road"]]
    ]
  },
  IN: {
    zhName: "印度",
    enName: "India",
    rows: [
      ["IN-DL", "德里", "Delhi", ["New Delhi", "Delhi"], ["110001", "110016", "110092"], ["11"], ["Connaught Place", "Janpath Road", "Ring Road"]],
      ["IN-MH", "马哈拉施特拉邦", "Maharashtra", ["Mumbai", "Pune", "Nagpur"], ["400001", "411001", "440001"], ["22", "20", "712"], ["Marine Drive", "MG Road", "FC Road"]],
      ["IN-KA", "卡纳塔克邦", "Karnataka", ["Bengaluru", "Mysuru", "Mangaluru"], ["560001", "570001", "575001"], ["80", "821", "824"], ["MG Road", "Brigade Road", "Residency Road"]]
    ]
  },
  MX: {
    zhName: "墨西哥",
    enName: "Mexico",
    rows: [
      ["MX-CMX", "墨西哥城", "Mexico City", ["Mexico City"], ["06000", "03100", "11000"], ["55"], ["Avenida Reforma", "Calle Madero", "Insurgentes Sur"]],
      ["MX-JAL", "哈利斯科州", "Jalisco", ["Guadalajara", "Zapopan", "Puerto Vallarta"], ["44100", "45010", "48300"], ["33", "322"], ["Avenida Vallarta", "Lopez Mateos", "Calle Morelos"]],
      ["MX-NLE", "新莱昂州", "Nuevo Leon", ["Monterrey", "San Pedro Garza Garcia"], ["64000", "66220", "66450"], ["81"], ["Avenida Constitucion", "Calzada del Valle", "Avenida Universidad"]]
    ]
  },
  BR: {
    zhName: "巴西",
    enName: "Brazil",
    rows: [
      ["BR-SP", "圣保罗州", "Sao Paulo", ["Sao Paulo", "Campinas", "Santos"], ["01000-000", "13010-000", "11010-000"], ["11", "19", "13"], ["Avenida Paulista", "Rua Augusta", "Rua XV de Novembro"]],
      ["BR-RJ", "里约热内卢州", "Rio de Janeiro", ["Rio de Janeiro", "Niteroi", "Petropolis"], ["20010-000", "24020-000", "25620-000"], ["21", "24"], ["Avenida Rio Branco", "Rua da Quitanda", "Rua do Imperador"]],
      ["BR-MG", "米纳斯吉拉斯州", "Minas Gerais", ["Belo Horizonte", "Uberlandia", "Ouro Preto"], ["30110-000", "38400-000", "35400-000"], ["31", "34"], ["Avenida Afonso Pena", "Rua Curitiba", "Rua Tiradentes"]]
    ]
  },
  IT: {
    zhName: "意大利",
    enName: "Italy",
    rows: [
      ["IT-LAZ", "拉齐奥", "Lazio", ["Rome", "Latina", "Viterbo"], ["00118", "00184", "04100"], ["6", "77"], ["Via Nazionale", "Via del Corso", "Via Appia Nuova"]],
      ["IT-LOM", "伦巴第", "Lombardy", ["Milan", "Bergamo", "Brescia"], ["20121", "20124", "24121"], ["2", "35", "30"], ["Corso Buenos Aires", "Via Torino", "Via Manzoni"]],
      ["IT-CAM", "坎帕尼亚", "Campania", ["Naples", "Salerno", "Caserta"], ["80121", "84121", "81100"], ["81", "89", "823"], ["Via Toledo", "Corso Umberto I", "Via Roma"]]
    ]
  },
  ES: {
    zhName: "西班牙",
    enName: "Spain",
    rows: [
      ["ES-MD", "马德里自治区", "Madrid", ["Madrid", "Alcala de Henares", "Getafe"], ["28001", "28013", "28801"], ["91"], ["Calle Mayor", "Gran Via", "Paseo de la Castellana"]],
      ["ES-CT", "加泰罗尼亚", "Catalonia", ["Barcelona", "Girona", "Tarragona"], ["08002", "08007", "17001"], ["93", "972", "977"], ["Carrer de Mallorca", "La Rambla", "Avinguda Diagonal"]],
      ["ES-AN", "安达卢西亚", "Andalusia", ["Seville", "Malaga", "Granada"], ["41001", "29001", "18001"], ["95", "952", "958"], ["Calle Sierpes", "Calle Larios", "Gran Via de Colon"]]
    ]
  },
  NL: {
    zhName: "荷兰",
    enName: "Netherlands",
    rows: [
      ["NL-NH", "北荷兰省", "North Holland", ["Amsterdam", "Haarlem", "Alkmaar"], ["1012 AB", "2011 RD", "1811 JP"], ["20", "23", "72"], ["Damrak", "Kalverstraat", "Prinsengracht"]],
      ["NL-ZH", "南荷兰省", "South Holland", ["Rotterdam", "The Hague", "Leiden"], ["3011 AA", "2511 BT", "2311 EJ"], ["10", "70", "71"], ["Coolsingel", "Spui", "Breestraat"]],
      ["NL-UT", "乌得勒支省", "Utrecht", ["Utrecht", "Amersfoort", "Zeist"], ["3511 CE", "3811 BN", "3701 AA"], ["30", "33"], ["Oudegracht", "Lange Jansstraat", "Stationsplein"]]
    ]
  },
  KR: {
    zhName: "韩国",
    enName: "South Korea",
    rows: [
      ["KR-11", "首尔", "Seoul", ["Seoul"], ["04524", "06164", "03154"], ["2"], ["Teheran-ro", "Sejong-daero", "Gangnam-daero"]],
      ["KR-26", "釜山", "Busan", ["Busan"], ["48058", "48939", "47287"], ["51"], ["Jungang-daero", "Haeundaehaebyeon-ro", "Gaya-daero"]],
      ["KR-28", "仁川", "Incheon", ["Incheon"], ["22382", "21554", "21984"], ["32"], ["Inha-ro", "Bupyeong-daero", "Songdo-dong"]]
    ]
  },
  NZ: {
    zhName: "新西兰",
    enName: "New Zealand",
    rows: [
      ["NZ-AUK", "奥克兰", "Auckland", ["Auckland", "Manukau", "Takapuna"], ["1010", "2104", "0622"], ["9"], ["Queen Street", "Karangahape Road", "Symonds Street"]],
      ["NZ-WGN", "惠灵顿", "Wellington", ["Wellington", "Lower Hutt", "Porirua"], ["6011", "5010", "5022"], ["4"], ["Lambton Quay", "Willis Street", "Courtenay Place"]],
      ["NZ-CAN", "坎特伯雷", "Canterbury", ["Christchurch", "Timaru", "Ashburton"], ["8011", "7910", "7700"], ["3"], ["Colombo Street", "Hereford Street", "Riccarton Road"]]
    ]
  },
  SE: {
    zhName: "瑞典",
    enName: "Sweden",
    rows: [
      ["SE-AB", "斯德哥尔摩省", "Stockholm County", ["Stockholm", "Solna", "Sodertalje"], ["111 22", "169 79", "151 72"], ["8"], ["Drottninggatan", "Kungsgatan", "Sveavagen"]],
      ["SE-O", "西约塔兰省", "Vastra Gotaland", ["Gothenburg", "Boras", "Trollhattan"], ["411 05", "503 30", "461 30"], ["31", "33", "520"], ["Avenyn", "Norra Hamngatan", "Sodra Vagen"]],
      ["SE-M", "斯科讷省", "Skane", ["Malmo", "Lund", "Helsingborg"], ["211 22", "222 21", "252 20"], ["40", "46", "42"], ["Stora Nygatan", "Sodra Forstadsgatan", "Lilla Fiskaregatan"]]
    ]
  },
  PL: {
    zhName: "波兰",
    enName: "Poland",
    rows: [
      ["PL-MZ", "马佐夫舍省", "Masovian", ["Warsaw", "Radom", "Plock"], ["00-001", "01-234", "09-400"], ["22", "48", "24"], ["Marszalkowska", "Nowy Swiat", "Aleje Jerozolimskie"]],
      ["PL-MA", "小波兰省", "Lesser Poland", ["Krakow", "Tarnow", "Nowy Sacz"], ["30-001", "31-042", "33-100"], ["12", "14", "18"], ["Florianska", "Grodzka", "Karmelicka"]],
      ["PL-DS", "下西里西亚省", "Lower Silesian", ["Wroclaw", "Legnica", "Walbrzych"], ["50-001", "59-220", "58-300"], ["71", "76", "74"], ["Rynek", "Swidnicka", "Pilsudskiego"]]
    ]
  },
  CH: {
    zhName: "瑞士",
    enName: "Switzerland",
    rows: [
      ["CH-ZH", "苏黎世州", "Zurich", ["Zurich", "Winterthur", "Uster"], ["8001", "8400", "8610"], ["44", "52"], ["Bahnhofstrasse", "Limmatquai", "Seefeldstrasse"]],
      ["CH-GE", "日内瓦州", "Geneva", ["Geneva", "Carouge", "Vernier"], ["1201", "1227", "1214"], ["22"], ["Rue du Rhone", "Quai du Mont-Blanc", "Rue de Lausanne"]],
      ["CH-BE", "伯尔尼州", "Bern", ["Bern", "Biel", "Thun"], ["3001", "2501", "3600"], ["31", "32", "33"], ["Kramgasse", "Marktgasse", "Spitalgasse"]]
    ]
  },
  TR: {
    zhName: "土耳其",
    enName: "Turkey",
    rows: [
      ["TR-34", "伊斯坦布尔", "Istanbul", ["Istanbul"], ["34000", "34330", "34710"], ["212", "216"], ["Istiklal Caddesi", "Bagdat Caddesi", "Halaskargazi Caddesi"]],
      ["TR-06", "安卡拉", "Ankara", ["Ankara"], ["06000", "06420", "06510"], ["312"], ["Ataturk Bulvari", "Tunali Hilmi Caddesi", "Kizilay Meydani"]],
      ["TR-35", "伊兹密尔", "Izmir", ["Izmir"], ["35000", "35220", "35530"], ["232"], ["Kibris Sehitleri Caddesi", "Cumhuriyet Bulvari", "Mithatpasa Caddesi"]]
    ]
  },
  AE: {
    zhName: "阿联酋",
    enName: "United Arab Emirates",
    rows: [
      ["AE-DU", "迪拜", "Dubai", ["Dubai"], ["N/A"], ["4"], ["Sheikh Zayed Road", "Al Mustaqbal Street", "Jumeirah Beach Road"]],
      ["AE-AZ", "阿布扎比", "Abu Dhabi", ["Abu Dhabi"], ["N/A"], ["2"], ["Corniche Road", "Khalifa Street", "Al Falah Street"]],
      ["AE-SH", "沙迦", "Sharjah", ["Sharjah"], ["N/A"], ["6"], ["Al Wahda Street", "King Faisal Street", "Corniche Street"]]
    ]
  },
  IE: { zhName: "爱尔兰", enName: "Ireland", rows: [["IE-L", "伦斯特", "Leinster", ["Dublin", "Kilkenny", "Wexford"], ["D01 F5P2", "D02 X285", "R95 X2P1"], ["1", "56", "53"], ["O'Connell Street", "Grafton Street", "Dame Street"]]] },
  NO: { zhName: "挪威", enName: "Norway", rows: [["NO-03", "奥斯陆", "Oslo", ["Oslo"], ["0150", "0250", "0550"], ["21", "22"], ["Karl Johans gate", "Storgata", "Dronningens gate"]]] },
  DK: { zhName: "丹麦", enName: "Denmark", rows: [["DK-84", "首都大区", "Capital Region", ["Copenhagen", "Frederiksberg", "Helsingor"], ["1050", "2000", "3000"], ["32", "33"], ["Vesterbrogade", "Norrebrogade", "Osterbrogade"]]] },
  FI: { zhName: "芬兰", enName: "Finland", rows: [["FI-18", "新地区", "Uusimaa", ["Helsinki", "Espoo", "Vantaa"], ["00100", "02100", "01300"], ["9"], ["Mannerheimintie", "Aleksanterinkatu", "Bulevardi"]]] },
  BE: { zhName: "比利时", enName: "Belgium", rows: [["BE-BRU", "布鲁塞尔", "Brussels", ["Brussels", "Ixelles", "Schaerbeek"], ["1000", "1050", "1030"], ["2"], ["Rue Neuve", "Avenue Louise", "Boulevard Anspach"]]] },
  AT: { zhName: "奥地利", enName: "Austria", rows: [["AT-9", "维也纳", "Vienna", ["Vienna"], ["1010", "1020", "1100"], ["1"], ["Karntner Strasse", "Mariahilfer Strasse", "Ringstrasse"]]] },
  PT: { zhName: "葡萄牙", enName: "Portugal", rows: [["PT-11", "里斯本", "Lisbon", ["Lisbon", "Sintra", "Cascais"], ["1100-001", "1200-109", "2750-642"], ["21"], ["Avenida da Liberdade", "Rua Augusta", "Rua Garrett"]]] },
  GR: { zhName: "希腊", enName: "Greece", rows: [["GR-I", "阿提卡", "Attica", ["Athens", "Piraeus", "Marousi"], ["105 57", "185 31", "151 24"], ["21"], ["Ermou Street", "Stadiou Street", "Panepistimiou Street"]]] },
  CZ: { zhName: "捷克", enName: "Czechia", rows: [["CZ-10", "布拉格", "Prague", ["Prague"], ["110 00", "120 00", "150 00"], ["2"], ["Vaclavske namesti", "Narodni", "Dlouha"]]] },
  HU: { zhName: "匈牙利", enName: "Hungary", rows: [["HU-BU", "布达佩斯", "Budapest", ["Budapest"], ["1051", "1061", "1137"], ["1"], ["Andrassy ut", "Vaci utca", "Rakoczi ut"]]] },
  RO: { zhName: "罗马尼亚", enName: "Romania", rows: [["RO-B", "布加勒斯特", "Bucharest", ["Bucharest"], ["010011", "020331", "030167"], ["21"], ["Calea Victoriei", "Bulevardul Unirii", "Strada Lipscani"]]] },
  UA: { zhName: "乌克兰", enName: "Ukraine", rows: [["UA-30", "基辅", "Kyiv", ["Kyiv"], ["01001", "02000", "04070"], ["44"], ["Khreshchatyk Street", "Volodymyrska Street", "Yaroslaviv Val"]]] },
  IL: { zhName: "以色列", enName: "Israel", rows: [["IL-TA", "特拉维夫区", "Tel Aviv District", ["Tel Aviv", "Ramat Gan", "Holon"], ["61000", "52232", "58100"], ["3"], ["Dizengoff Street", "Rothschild Boulevard", "Allenby Street"]]] },
  SA: { zhName: "沙特阿拉伯", enName: "Saudi Arabia", rows: [["SA-01", "利雅得省", "Riyadh", ["Riyadh", "Diriyah", "Al Kharj"], ["12211", "12345", "11942"], ["11"], ["King Fahd Road", "Olaya Street", "Tahlia Street"]]] },
  QA: { zhName: "卡塔尔", enName: "Qatar", rows: [["QA-DA", "多哈", "Doha", ["Doha", "Al Rayyan", "Lusail"], ["N/A"], ["4"], ["Al Corniche Street", "Salwa Road", "C Ring Road"]]] },
  MY: { zhName: "马来西亚", enName: "Malaysia", rows: [["MY-14", "吉隆坡", "Kuala Lumpur", ["Kuala Lumpur", "Petaling Jaya", "Shah Alam"], ["50000", "50450", "46000"], ["3"], ["Jalan Ampang", "Jalan Bukit Bintang", "Jalan Sultan Ismail"]]] },
  TH: { zhName: "泰国", enName: "Thailand", rows: [["TH-10", "曼谷", "Bangkok", ["Bangkok"], ["10110", "10330", "10400"], ["2"], ["Sukhumvit Road", "Silom Road", "Rama I Road"]]] },
  ID: { zhName: "印度尼西亚", enName: "Indonesia", rows: [["ID-JK", "雅加达", "Jakarta", ["Jakarta", "South Jakarta", "Central Jakarta"], ["10110", "12190", "12940"], ["21"], ["Jalan Sudirman", "Jalan Thamrin", "Jalan Gatot Subroto"]]] },
  PH: { zhName: "菲律宾", enName: "Philippines", rows: [["PH-00", "马尼拉大都会", "Metro Manila", ["Manila", "Makati", "Quezon City"], ["1000", "1200", "1100"], ["2"], ["Ayala Avenue", "Roxas Boulevard", "EDSA"]]] },
  VN: { zhName: "越南", enName: "Vietnam", rows: [["VN-SG", "胡志明市", "Ho Chi Minh City", ["Ho Chi Minh City"], ["700000", "710000", "720000"], ["28"], ["Nguyen Hue Street", "Le Loi Street", "Dong Khoi Street"]]] },
  PK: { zhName: "巴基斯坦", enName: "Pakistan", rows: [["PK-PB", "旁遮普省", "Punjab", ["Lahore", "Rawalpindi", "Faisalabad"], ["54000", "46000", "38000"], ["42", "51", "41"], ["Mall Road", "Gulberg Main Boulevard", "Jinnah Avenue"]]] },
  BD: { zhName: "孟加拉国", enName: "Bangladesh", rows: [["BD-C", "达卡专区", "Dhaka Division", ["Dhaka", "Gazipur", "Narayanganj"], ["1000", "1212", "1400"], ["2"], ["Gulshan Avenue", "Mirpur Road", "Dhanmondi Road"]]] },
  AR: { zhName: "阿根廷", enName: "Argentina", rows: [["AR-C", "布宜诺斯艾利斯", "Buenos Aires", ["Buenos Aires"], ["C1001", "C1425", "C1064"], ["11"], ["Avenida Corrientes", "Avenida Santa Fe", "Florida Street"]]] },
  CL: { zhName: "智利", enName: "Chile", rows: [["CL-RM", "圣地亚哥首都大区", "Santiago Metropolitan", ["Santiago", "Providencia", "Las Condes"], ["8320000", "7500000", "7550000"], ["2"], ["Avenida Providencia", "Avenida Apoquindo", "Alameda"]]] },
  CO: { zhName: "哥伦比亚", enName: "Colombia", rows: [["CO-DC", "波哥大", "Bogota", ["Bogota"], ["110111", "110221", "111611"], ["1"], ["Carrera 7", "Calle 72", "Avenida Chile"]]] },
  PE: { zhName: "秘鲁", enName: "Peru", rows: [["PE-LMA", "利马", "Lima", ["Lima", "Miraflores", "San Isidro"], ["15001", "15074", "15073"], ["1"], ["Avenida Larco", "Avenida Arequipa", "Jiron de la Union"]]] },
  ZA: { zhName: "南非", enName: "South Africa", rows: [["ZA-GP", "豪登省", "Gauteng", ["Johannesburg", "Pretoria", "Sandton"], ["2000", "0002", "2196"], ["11", "12"], ["Commissioner Street", "Church Street", "Rivonia Road"]]] },
  SG: {
    zhName: "新加坡",
    enName: "Singapore",
    rows: [
      ["SG-01", "中区", "Central Region", ["Singapore"], ["018956", "049317", "238877"], ["6"], ["Raffles Place", "Orchard Road", "Marina Boulevard"]],
      ["SG-02", "东区", "East Region", ["Singapore"], ["409051", "529510", "469001"], ["6"], ["Changi Road", "Tampines Central", "East Coast Road"]],
      ["SG-03", "西区", "West Region", ["Singapore"], ["609601", "648886", "640501"], ["6"], ["Jurong Gateway Road", "Boon Lay Way", "Bukit Batok Street"]]
    ]
  }
};

const TEXT = {
  zh: {
    random: "随机 Random",
    randomRegion: "随机地区",
    country: "国家/地区",
    region: "州/地区",
    quantity: "数量",
    generate: "生成地址",
    copyAll: "复制全部",
    save: "保存",
    exportCsv: "导出 CSV",
    exportJson: "导出 JSON",
    clear: "清空",
    delete: "删除",
    empty: "点击上方按钮生成地址",
    noSaved: "暂无保存的地址",
    copied: "已复制",
    saved: "地址已保存",
    duplicate: "这个地址已经保存过",
    cleared: "已清空保存记录",
    needGenerate: "请先生成地址",
    prevPage: "上一页",
    nextPage: "下一页",
    pageUnit: "页",
    perPage: "每页最多",
    itemUnit: "条",
    firstName: "名 / First Name",
    lastName: "姓 / Last Name",
    gender: "性别 / Gender",
    countryField: "国家/地区 / Country",
    phone: "电话 / Phone",
    street: "街道地址 / Street Address",
    city: "城市 / City",
    state: "州/地区 / Region",
    zip: "邮编 / Postal Code",
    full: "完整地址 / Full Address",
    male: "男",
    female: "女"
  },
  en: {
    random: "Random",
    randomRegion: "Random region",
    country: "Country / Region",
    region: "State / Region",
    quantity: "Quantity",
    generate: "Generate Address",
    copyAll: "Copy All",
    save: "Save",
    exportCsv: "Export CSV",
    exportJson: "Export JSON",
    clear: "Clear",
    delete: "Delete",
    empty: "Generate an address to start",
    noSaved: "No saved addresses yet",
    copied: "Copied",
    saved: "Address saved",
    duplicate: "This address is already saved",
    cleared: "Saved addresses cleared",
    needGenerate: "Generate an address first",
    prevPage: "Previous",
    nextPage: "Next",
    pageUnit: "page",
    perPage: "Up to",
    itemUnit: "items per page",
    firstName: "First Name",
    lastName: "Last Name",
    gender: "Gender",
    countryField: "Country / Region",
    phone: "Phone",
    street: "Street Address",
    city: "City",
    state: "State / Region",
    zip: "Postal Code",
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
let currentAddresses = [];
let currentPage = 1;
const PAGE_SIZE = 5;
let lockedScrollY = 0;
let settledScrollY = 0;
let recentScrollY = 0;
let scrollSettleTimer = 0;
let scrollDecayTimer = 0;

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function stateObject(row) {
  const [code, zhName, enName, cities, zips, areaCodes] = row;
  return { code, zhName, enName, cities, zips, areaCodes, countryCode: "US", countryZh: "美国", countryEn: "United States" };
}

function hkObject(row) {
  const [code, zhName, enName, cities, streets, phonePrefixes] = row;
  return { code, zhName, enName, cities, streets, phonePrefixes, countryCode: "HK", countryZh: "香港", countryEn: "Hong Kong" };
}

function jpObject(row) {
  const [code, zhName, enName, cities, wards, postalPrefixes, areaCodes] = row;
  return { code, zhName, enName, cities, wards, postalPrefixes, areaCodes, countryCode: "JP", countryZh: "日本", countryEn: "Japan" };
}

function genericRegionObject(row, countryCode) {
  const country = GENERIC_COUNTRIES[countryCode];
  const [code, zhName, enName, cities, postalCodes, areaCodes, streets] = row;
  return { code, zhName, enName, cities, postalCodes, areaCodes, streets, countryCode, countryZh: country.zhName, countryEn: country.enName };
}

function selectedCountryCode() {
  if (pageType === "tax-free") return "US";
  const select = $("#country-select");
  return select?.value || "US";
}

function countryName(code) {
  const names = {
    US: pageLocale === "en" ? "United States" : "美国",
    HK: pageLocale === "en" ? "Hong Kong" : "香港",
    JP: pageLocale === "en" ? "Japan" : "日本",
    ...Object.fromEntries(Object.entries(GENERIC_COUNTRIES).map(([code, country]) => [code, pageLocale === "en" ? country.enName : country.zhName]))
  };
  return names[code] || names.US;
}

function allCandidateRegions(countryCode = selectedCountryCode()) {
  if (countryCode === "HK") return HK_DISTRICTS.map(hkObject);
  if (countryCode === "JP") return JP_PREFECTURES.map(jpObject);
  if (GENERIC_COUNTRIES[countryCode]) return GENERIC_COUNTRIES[countryCode].rows.map((row) => genericRegionObject(row, countryCode));
  const rows = pageType === "tax-free" ? US_STATES.filter((row) => TAX_FREE.has(row[0])) : US_STATES;
  return rows.map(stateObject);
}

function selectedRegion() {
  const select = $("#state-select");
  const candidates = allCandidateRegions();
  if (!select || select.value === "RANDOM") return pick(candidates);
  return candidates.find((region) => region.code === select.value) || pick(candidates);
}

function usPhone(areaCodes) {
  const prefix = pick(areaCodes);
  const mid = String(Math.floor(200 + Math.random() * 700));
  const last = String(Math.floor(1000 + Math.random() * 9000));
  return `+1 (${prefix}) ${mid}-${last}`;
}

function hkPhone(prefixes) {
  const prefix = pick(prefixes);
  const last = String(Math.floor(1000 + Math.random() * 9000));
  return `+852 ${prefix} ${last}`;
}

function jpPhone(areaCodes) {
  const area = pick(areaCodes);
  const mid = String(Math.floor(2000 + Math.random() * 7000));
  const last = String(Math.floor(1000 + Math.random() * 9000));
  return `+81-${area.replace(/^0/, "")}-${mid}-${last}`;
}

function generateAddress() {
  const countryCode = selectedCountryCode();
  if (countryCode === "HK") return generateHongKongAddress();
  if (countryCode === "JP") return generateJapanAddress();
  if (GENERIC_COUNTRIES[countryCode]) return generateGenericAddress(countryCode);
  return generateUsAddress();
}

function generateUsAddress() {
  const state = selectedRegion();
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
    country: countryName("US"),
    countryCode: "US",
    firstName,
    lastName,
    gender,
    phone: usPhone(state.areaCodes),
    street,
    city,
    state: stateName,
    region: stateName,
    stateCode: state.code,
    regionCode: state.code,
    postalCode: zip,
    zip,
    fullAddress,
    createdAt: new Date().toISOString()
  };
}

function generateHongKongAddress() {
  const district = selectedRegion();
  const firstName = pick(FIRST_NAMES);
  const lastName = pick(LAST_NAMES);
  const gender = Math.random() > 0.5 ? t.male : t.female;
  const city = pick(district.cities);
  const street = `${Math.floor(1 + Math.random() * 188)} ${pick(district.streets)}`;
  const regionName = pageLocale === "en" ? district.enName : `${district.zhName} (${district.enName})`;
  const fullAddress = `${street}, ${city}, ${district.enName}, Hong Kong`;
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    country: countryName("HK"),
    countryCode: "HK",
    firstName,
    lastName,
    gender,
    phone: hkPhone(district.phonePrefixes),
    street,
    city,
    state: regionName,
    region: regionName,
    stateCode: district.code,
    regionCode: district.code,
    postalCode: "N/A",
    zip: "N/A",
    fullAddress,
    createdAt: new Date().toISOString()
  };
}

function generateJapanAddress() {
  const prefecture = selectedRegion();
  const firstName = pick(JP_FIRST_NAMES);
  const lastName = pick(JP_LAST_NAMES);
  const gender = Math.random() > 0.5 ? t.male : t.female;
  const city = pick(prefecture.cities);
  const ward = pick(prefecture.wards);
  const postalCode = `${pick(prefecture.postalPrefixes)}-${String(Math.floor(1000 + Math.random() * 9000))}`;
  const block = `${Math.floor(1 + Math.random() * 5)}-${Math.floor(1 + Math.random() * 24)}-${Math.floor(1 + Math.random() * 18)}`;
  const street = `${ward} ${block}`;
  const regionName = pageLocale === "en" ? prefecture.enName : `${prefecture.zhName} (${prefecture.enName})`;
  const fullAddress = `${postalCode} ${street}, ${city}, ${prefecture.enName}, Japan`;
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    country: countryName("JP"),
    countryCode: "JP",
    firstName,
    lastName,
    gender,
    phone: jpPhone(prefecture.areaCodes),
    street,
    city,
    state: regionName,
    region: regionName,
    stateCode: prefecture.code,
    regionCode: prefecture.code,
    postalCode,
    zip: postalCode,
    fullAddress,
    createdAt: new Date().toISOString()
  };
}

function genericPhone(countryCode, areaCodes) {
  const area = pick(areaCodes);
  const mid = String(Math.floor(200 + Math.random() * 800));
  const last = String(Math.floor(1000 + Math.random() * 9000));
  const dialCodes = { GB: "44", CA: "1", AU: "61", DE: "49", FR: "33", CN: "86", IN: "91", MX: "52", BR: "55", IT: "39", ES: "34", NL: "31", KR: "82", NZ: "64", SE: "46", PL: "48", CH: "41", TR: "90", AE: "971", IE: "353", NO: "47", DK: "45", FI: "358", BE: "32", AT: "43", PT: "351", GR: "30", CZ: "420", HU: "36", RO: "40", UA: "380", IL: "972", SA: "966", QA: "974", MY: "60", TH: "66", ID: "62", PH: "63", VN: "84", PK: "92", BD: "880", AR: "54", CL: "56", CO: "57", PE: "51", ZA: "27", SG: "65" };
  if (countryCode === "CA") return `+1 (${area}) ${mid}-${last}`;
  if (countryCode === "SG") return `+65 ${Math.floor(6000 + Math.random() * 3000)} ${last}`;
  return `+${dialCodes[countryCode]} ${area} ${mid} ${last}`;
}

function formatGenericFullAddress(countryCode, street, city, region, postalCode) {
  const country = GENERIC_COUNTRIES[countryCode].enName;
  const shortRegion = region.code.split("-")[1] || region.code;
  if (["DE", "FR"].includes(countryCode)) return `${street}, ${postalCode} ${city}, ${country}`;
  if (countryCode === "AU") return `${street}, ${city} ${shortRegion} ${postalCode}, ${country}`;
  if (countryCode === "CA") return `${street}, ${city}, ${shortRegion} ${postalCode}, ${country}`;
  if (countryCode === "SG") return `${street}, Singapore ${postalCode}`;
  return `${street}, ${city}, ${region.enName}, ${postalCode}, ${country}`;
}

function generateGenericAddress(countryCode) {
  const region = selectedRegion();
  const firstName = pick(FIRST_NAMES);
  const lastName = pick(LAST_NAMES);
  const gender = Math.random() > 0.5 ? t.male : t.female;
  const city = pick(region.cities);
  const postalCode = pick(region.postalCodes);
  const street = `${Math.floor(1 + Math.random() * 260)} ${pick(region.streets)}`;
  const regionName = pageLocale === "en" ? region.enName : `${region.zhName} (${region.enName})`;
  const fullAddress = formatGenericFullAddress(countryCode, street, city, region, postalCode);
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    country: countryName(countryCode),
    countryCode,
    firstName,
    lastName,
    gender,
    phone: genericPhone(countryCode, region.areaCodes),
    street,
    city,
    state: regionName,
    region: regionName,
    stateCode: region.code,
    regionCode: region.code,
    postalCode,
    zip: postalCode,
    fullAddress,
    createdAt: new Date().toISOString()
  };
}

function fields(address) {
  return [
    ["country", t.countryField, address.country],
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
  result.classList.remove("empty-state");
  result.classList.add("result-list");
  const addresses = Array.isArray(address) ? address : [address];
  const totalPages = Math.max(1, Math.ceil(addresses.length / PAGE_SIZE));
  currentPage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visibleAddresses = addresses.slice(start, start + PAGE_SIZE);
  result.innerHTML = `<div class="address-stack">${visibleAddresses.map((item, index) => `
    <div class="address-card">
      ${addresses.length > 1 ? `<div class="address-card-title">#${start + index + 1} · ${escapeHtml(item.country)}</div>` : ""}
      <div class="address-grid">${fields(item).map(([key, label, value, full]) => `
    <button class="address-item ${full ? "full" : ""}" data-copy="${escapeHtml(value)}" type="button">
      <span>${label}</span>
      <strong>${escapeHtml(value)}</strong>
    </button>
      `).join("")}</div>
    </div>
  `).join("")}</div>${renderPagination(addresses.length, totalPages)}`;
}

function renderPagination(totalItems, totalPages) {
  if (totalItems <= PAGE_SIZE) return "";
  return `<div class="pagination" aria-label="地址分页">
    <button class="page-btn" type="button" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""}>${t.prevPage}</button>
    <span class="pagination-info">${currentPage} / ${totalPages} ${t.pageUnit} · ${t.perPage} ${PAGE_SIZE} ${t.itemUnit}</span>
    ${Array.from({ length: totalPages }, (_, index) => `<button class="page-btn ${currentPage === index + 1 ? "active" : ""}" type="button" data-page="${index + 1}">${index + 1}</button>`).join("")}
    <button class="page-btn" type="button" data-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""}>${t.nextPage}</button>
  </div>`;
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

function addressesText(addresses) {
  return addresses.map((address, index) => {
    const prefix = addresses.length > 1 ? `#${index + 1}\n` : "";
    return `${prefix}${addressText(address)}`;
  }).join("\n\n");
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
  if (!currentAddresses.length) {
    showToast(t.needGenerate);
    return;
  }
  const saved = getSaved();
  const existing = new Set(saved.map((item) => item.fullAddress));
  const fresh = currentAddresses.filter((item) => !existing.has(item.fullAddress));
  if (!fresh.length) {
    showToast(t.duplicate);
    return;
  }
  setSaved([...fresh, ...saved].slice(0, 100));
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
        <strong>${escapeHtml(item.country || countryName("US"))} · ${escapeHtml(item.firstName)} ${escapeHtml(item.lastName)} · ${escapeHtml(item.phone)}</strong>
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
  const name = `addresses-${new Date().toISOString().slice(0, 10)}`;
  if (format === "json") {
    download(`${name}.json`, JSON.stringify(saved, null, 2), "application/json;charset=utf-8");
    return;
  }
  const headers = ["country", "countryCode", "firstName", "lastName", "gender", "phone", "street", "city", "region", "regionCode", "postalCode", "fullAddress"];
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
  select.innerHTML = `<option value="RANDOM">${t.randomRegion}</option>` + allCandidateRegions().map((region) => {
    const label = pageLocale === "en" ? `${region.enName} (${region.code})` : `${region.zhName} (${region.code})`;
    return `<option value="${region.code}">${label}</option>`;
  }).join("");
}

function fillCountrySelect() {
  const select = $("#country-select");
  if (!select) return;
  const countries = [
    ["US", pageLocale === "en" ? "United States" : "美国"],
    ["HK", pageLocale === "en" ? "Hong Kong" : "香港"],
    ["JP", pageLocale === "en" ? "Japan" : "日本"],
    ...Object.entries(GENERIC_COUNTRIES).map(([value, country]) => [value, pageLocale === "en" ? country.enName : country.zhName])
  ];
  select.innerHTML = countries.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  const defaultCountry = document.body.dataset.countryDefault || new URLSearchParams(window.location.search).get("country");
  if (defaultCountry && countries.some(([value]) => value === defaultCountry)) {
    select.value = defaultCountry;
  }
  renderCountryCombobox(countries);
  updateCountryContextLabels();
  updateCountryButtons();
}

function renderCountryCombobox(countries) {
  const select = $("#country-select");
  if (!select) return;
  select.classList.add("native-select-hidden");
  select.setAttribute("aria-hidden", "true");
  select.tabIndex = -1;

  let combo = document.querySelector("[data-country-combobox]");
  if (!combo) {
    combo = document.createElement("div");
    combo.className = "country-combobox";
    combo.dataset.countryCombobox = "true";
    select.insertAdjacentElement("afterend", combo);
  }

  const selectedLabel = countryName(select.value);
  combo.innerHTML = `
    <div class="country-combobox-btn" role="button" tabindex="0" aria-expanded="false">
      <span>${escapeHtml(selectedLabel)}</span>
      <span aria-hidden="true">⌄</span>
    </div>
    <div class="country-combobox-menu" hidden>
      ${countries.map(([value, label]) => `
        <button class="country-combobox-option ${value === select.value ? "active" : ""}" type="button" data-country-value="${value}">
          ${escapeHtml(label)}
        </button>
      `).join("")}
    </div>
  `;
}

function selectedCount() {
  const count = Number($("#batch-count")?.value || 1);
  return Number.isFinite(count) ? Math.max(1, Math.min(count, 20)) : 1;
}

function initGenerator() {
  trackSettledScrollPosition();
  fillCountrySelect();
  fillStateSelect();
  renderSaved();
  $("#country-select")?.addEventListener("change", () => {
    fillStateSelect();
    updateCountryContextLabels();
    syncCountryCombobox();
    updateCountryButtons();
  });
  $("#generate-btn")?.addEventListener("click", () => {
    currentPage = 1;
    currentAddresses = Array.from({ length: selectedCount() }, () => generateAddress());
    renderAddress(currentAddresses);
  });
  $("#copy-all-btn")?.addEventListener("click", () => currentAddresses.length ? copyText(addressesText(currentAddresses)) : showToast(t.needGenerate));
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
    const countryButton = event.target.closest("[data-country]");
    if (countryButton && $("#country-select") && countryButton.tagName !== "A") {
      event.preventDefault();
      selectCountry(countryButton.dataset.country);
    }
    const comboButton = event.target.closest(".country-combobox-btn");
    if (comboButton) {
      event.preventDefault();
      toggleCountryCombobox(comboButton);
    }
    const comboOption = event.target.closest("[data-country-value]");
    if (comboOption) {
      event.preventDefault();
      chooseCountryComboboxOption(comboOption.dataset.countryValue);
    }
    const pageButton = event.target.closest("[data-page]");
    if (pageButton && !pageButton.disabled) {
      currentPage = Number(pageButton.dataset.page) || 1;
      renderAddress(currentAddresses);
      document.querySelector("#address-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  document.addEventListener("pointerdown", preventComboboxFocusScroll);
  document.addEventListener("keydown", handleCountryComboboxKeydown);
  document.addEventListener("click", closeCountryComboboxOnOutside);
}

function selectCountry(countryCode) {
  const select = $("#country-select");
  if (!select) return;
  select.value = countryCode;
  fillStateSelect();
  syncCountryCombobox();
  updateCountryContextLabels();
  updateCountryButtons();
  currentPage = 1;
  currentAddresses = Array.from({ length: selectedCount() }, () => generateAddress());
  renderAddress(currentAddresses);
}

function toggleCountryCombobox(button) {
  const scrollX = window.scrollX;
  const combo = button.closest("[data-country-combobox]");
  const menu = combo?.querySelector(".country-combobox-menu");
  if (!combo || !menu) return;
  const open = menu.hidden;
  const scrollY = open ? resolveComboboxOpenScrollY(button) : window.scrollY;
  closeAllCountryComboboxes({ unlock: !open });
  menu.hidden = !open;
  button.setAttribute("aria-expanded", String(open));
  if (open) {
    lockPageScroll(scrollY);
    positionCountryComboboxMenu(button, menu);
    const active = menu.querySelector(".active");
    if (active) {
      menu.scrollTop = Math.max(0, active.offsetTop - menu.clientHeight / 2);
    }
  }
  window.scrollTo(scrollX, scrollY);
  requestAnimationFrame(() => window.scrollTo(scrollX, scrollY));
}

function chooseCountryComboboxOption(countryCode) {
  const select = $("#country-select");
  if (!select) return;
  select.value = countryCode;
  select.dispatchEvent(new Event("change", { bubbles: true }));
  closeAllCountryComboboxes();
}

function positionCountryComboboxMenu(button, menu) {
  const rect = button.getBoundingClientRect();
  const gap = 6;
  const viewportPadding = 12;
  const spaceBelow = window.innerHeight - rect.bottom - viewportPadding;
  const spaceAbove = rect.top - viewportPadding;
  const menuHeight = Math.min(280, Math.max(180, Math.max(spaceBelow, spaceAbove)));
  const openAbove = spaceBelow < 220 && spaceAbove > spaceBelow;
  const top = openAbove ? Math.max(viewportPadding, rect.top - menuHeight - gap) : Math.min(rect.bottom + gap, window.innerHeight - menuHeight - viewportPadding);

  menu.style.left = `${rect.left}px`;
  menu.style.top = `${top}px`;
  menu.style.width = `${rect.width}px`;
  menu.style.maxHeight = `${menuHeight}px`;
}

function syncCountryCombobox() {
  const select = $("#country-select");
  const combo = document.querySelector("[data-country-combobox]");
  if (!select || !combo) return;
  combo.querySelector(".country-combobox-btn span").textContent = countryName(select.value);
  combo.querySelectorAll("[data-country-value]").forEach((option) => {
    option.classList.toggle("active", option.dataset.countryValue === select.value);
  });
}

function closeAllCountryComboboxes(options = {}) {
  const shouldUnlock = options.unlock !== false;
  document.querySelectorAll("[data-country-combobox]").forEach((combo) => {
    const menu = combo.querySelector(".country-combobox-menu");
    menu.hidden = true;
    menu.removeAttribute("style");
    combo.querySelector(".country-combobox-btn").setAttribute("aria-expanded", "false");
  });
  if (shouldUnlock) unlockPageScroll();
}

function closeCountryComboboxOnOutside(event) {
  if (!event.target.closest("[data-country-combobox]")) closeAllCountryComboboxes();
}

function preventComboboxFocusScroll(event) {
  const button = event.target.closest(".country-combobox-btn");
  if (button) {
    button.dataset.openScrollY = String(resolveComboboxOpenScrollY(button));
  }
  if (button || event.target.closest("[data-country-value]")) {
    event.preventDefault();
  }
}

function handleCountryComboboxKeydown(event) {
  const button = event.target.closest(".country-combobox-btn");
  if (!button || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  button.dataset.openScrollY = String(settledScrollY || window.scrollY);
  toggleCountryCombobox(button);
}

function trackSettledScrollPosition() {
  settledScrollY = window.scrollY;
  recentScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (document.body.dataset.scrollLocked === "true") return;
    if (window.scrollY > recentScrollY) recentScrollY = window.scrollY;
    clearTimeout(scrollSettleTimer);
    clearTimeout(scrollDecayTimer);
    scrollSettleTimer = setTimeout(() => {
      settledScrollY = window.scrollY;
    }, 120);
    scrollDecayTimer = setTimeout(() => {
      recentScrollY = window.scrollY;
    }, 900);
  }, { passive: true });
}

function resolveComboboxOpenScrollY(button) {
  const currentY = window.scrollY;
  const stableY = Math.max(Number(button.dataset.openScrollY || 0), settledScrollY, recentScrollY);
  const buttonPageTop = button.getBoundingClientRect().top + currentY;
  const buttonTopAtStableY = buttonPageTop - stableY;
  const stablePositionLooksVisible = buttonTopAtStableY > 0 && buttonTopAtStableY < window.innerHeight - 80;

  if (stableY > currentY + 80 && stablePositionLooksVisible) {
    return stableY;
  }

  return currentY;
}

function lockPageScroll(scrollY = window.scrollY) {
  if (document.body.dataset.scrollLocked === "true") return;
  lockedScrollY = scrollY;
  document.body.dataset.scrollLocked = "true";
  document.body.style.position = "fixed";
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
}

function unlockPageScroll() {
  if (document.body.dataset.scrollLocked !== "true") return;
  const restoreY = lockedScrollY;
  document.body.dataset.scrollLocked = "false";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, restoreY);
  requestAnimationFrame(() => window.scrollTo(0, restoreY));
  setTimeout(() => window.scrollTo(0, restoreY), 0);
  setTimeout(() => window.scrollTo(0, restoreY), 80);
}

function updateCountryButtons() {
  const selected = selectedCountryCode();
  document.querySelectorAll("[data-country]").forEach((button) => {
    button.classList.toggle("active", button.dataset.country === selected);
  });
}

function updateCountryContextLabels() {
  if (pageType !== "country") return;
  const name = countryName(selectedCountryCode());
  const generateButton = $("#generate-btn");
  const resultTitle = document.querySelector(".result-head h2");
  const result = $("#address-result");

  if (generateButton) generateButton.textContent = `立即生成${name}地址`;
  if (resultTitle) resultTitle.textContent = `${name}地址生成结果`;
  if (result?.classList.contains("empty-state")) {
    result.textContent = `点击按钮生成${name}地址测试数据`;
  }
}

if ($("#address-result")) {
  initGenerator();
}
