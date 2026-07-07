// Dudley Irvin - kf8bss@drienterprisesllc.com

const disableSetup = false;
const disableLdCfg = false;
var topBarCenterText = `KF8BSS - EN80nc`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  // ── LEFT — Ham Operations ──────────────────────────────────────
  ["f3de21", "SATS", "satellite.js"],
  ["2196F3", "DX HEAT", "https://www.dxheat.com/dxc/", "1"],
  ["2196F3", "SOLARHAM", "https://www.solarham.com", "1"],
  // ["2196F3", "VOACAP", "https://voacap.com/hf/", "1"],
  ["2196F3", "VOACAP", "/redirect.html?url=https://voacap.com/hf/", "1"],
  ["2196F3", "APRS", "https://aprs.fi/#!lat=40.07&lng=-82.93&z=10", "1"],
  // ["2196F3", "WINLINK", "https://winlink.org/RMSChannels", "1"],
  ["2196F3", "WINLINK", "/redirect.html?url=https://winlink.org/RMSChannels", "1"],
  // ["2196F3", "POTA", "https://pota.app", "1"],
  ["2196F3", "POTA", "/redirect.html?url=https://pota.app", "1"],
  ["2196F3", "CONTESTS", "https://www.contestcalendar.com/weeklycont.php", "1"],
  ["2196F3", "PSKREPTR", "https://pskreporter.info/pskmap.html", "1"],
  ["2196F3", "AZ MAP", "https://kf8bss-radio.com/AzimuthalMap.pdf", "1"],

  // ── RIGHT — Situational Awareness ─────────────────────────────
  ["2196F3", "NWS ILN", "https://www.weather.gov/iln", "1", "R"],
  ["2196F3", "NWS LWX", "https://www.weather.gov/lwx", "1", "R"],
  ["2196F3", "NHC", "https://www.nhc.noaa.gov", "1", "R"],
  ["2196F3", "SPC", "https://www.spc.noaa.gov/products/outlook/day1otlk.html", "1", "R"],
  ["2196F3", "LIGHTINING", "https://map.blitzortung.org/#3.87/40.0/-82.98", "1", "R"],
  ["2196F3", "OHGO", "https://ohgo.com/central-ohio?lt=39.980534612305675&ln=-82.8939319015295&z=9", "1", "R"],
  ["2196F3", "CHART MD", "https://chart.maryland.gov/InteractiveMap/GetInteractiveMap", "1", "R"],
  ["2196F3", "AEP", "https://outagemap.aepohio.com", "1", "R"],
  ["2196F3", "BGE", "https://outagemap.bge.com", "1", "R"],
  // ["2196F3", "VERIZON", "https://downdetector.com/status/verizon/", "1", "R"],
  // ["2196F3", "SPECTRUM", "https://downdetector.com/status/spectrum/", "1", "R"],
  // ["2196F3", "XFINITY", "https://downdetector.com/status/xfinity/", "1", "R"],
  ["2196F3", "VERIZON", "/redirect.html?url=https://downdetector.com/status/verizon/", "1", "R"],
  ["2196F3", "SPECTRUM", "/redirect.html?url=https://downdetector.com/status/spectrum/", "1", "R"],
  ["2196F3", "XFINITY", "/redirect.html?url=https://downdetector.com/status/xfinity/", "1", "R"],
  ["2196F3", "WATER", "https://water.noaa.gov/#@=-80.0679317,39.4385132,6.0068074&b=topographic&g=obsFcst,1!1!1!1!1!1!1!1!1!1!1!1!1!1!1!0!0!0!0!0,0.5,1!1!1!1!0,0,0,true,5,10,1!1!1!1!1!0&ab=0,0,#D94B4A,1,1,1,#cccccc,1,0,0,#B243B1,1,0,0,#98E09A,1,false&a=hydrologic,0.35,false&s=0,0,0.9,0.9,false&n=false,#72afe9,0.9,0,0.9,0,0.9,false&p=false,0.75,0,7,0,1,2026,7,7,0,false&d=0,0,1,1,1,1,1,1,#006EFF,1,#006EFF,1,#006EFF,false&q=", "1", "R"],
  // ["2196F3", "FAMILY", "/family.html", "1", "R"],  // future
];
  
  // ["f3de21", "SATS", "satellite.js"],
  
  
  // ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  //[
  //  "2196F3",
  //  "CONTEST",
  //  "https://www.contestcalendar.com/fivewkcal.html",
  //  "1",
  // ],
  //["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  // [
  //  "2196F3",
  //  "LIGHTNING",
  //  "https://map.blitzortung.org/#3.87/36.5/-89.41",
  //  "1",
  //  "R",
  // ],
  // ["2196F3", "OpenHamClock", "https://openhamclock.kf8bss-radio.com", "1"],
  // ["2196F3", "ADS-B", "https://globe.adsbexchange.com/?airport=KCMH&enableLabels&extendedLabels=1&zoom=10", "1"],
  // [
  //  "2196F3",
  //  "RADAR",
  //  "dark|https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
  //  "1",
  //  "R"
  // ],
  // ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  // [
  //  "2196F3",
  //  "WEATHER",
  //  "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
  //  "1",
  //  "R",
  //],
  //[
  //  "2196F3",
  //  "WINDS",
  //  "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
  //  "1",
  //  "R",
  //],
// ];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  [
	["Radar CONUS", "Radar OH", "Radar MD"],
	"https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif", 
    "https://radar.weather.gov/ridge/standard/KILN_loop.gif", 
    "https://radar.weather.gov/ridge/standard/KLWX_loop.gif"
  ],
  [
    ["Satellite GL GEOCOLOR", "Satellite NE GEOCOLOR", "Satellite IR"],
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/cgl/GEOCOLOR/GOES19-CGL-GEOCOLOR-600x600.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/ne/GEOCOLOR/GOES19-NE-GEOCOLOR-600x600.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/cgl/13/GOES19-CGL-13-600x600.gif"
  ],
  [
    ["Watches & Warnings", "Broad WWs", "Storm Reports", "Precipitation"],
	"https://www.spc.noaa.gov/products/watch/validww.png",
	"https://www.weather.gov/wwamap/png/US.png",
    "https://www.spc.noaa.gov/climo/reports/today.gif",
	"https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif"
  ],
  [
    ["WPC Forecast D1", "WPC Forecast D2", "WPC Forecast D3", "WPC Hazards D3-7"],
	"https://www.wpc.ncep.noaa.gov/noaa/noaa.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
    "https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png"
  ],
  [
    "NOAA D-RAP",
	"https://services.swpc.noaa.gov/images/animations/d-rap/global/latest.png"
  ],
  [
    ["Columbus MUF", "Columbus LUF", "Annapolis MUF", "Annapolis LUF"],
    "https://prop.kc2g.com/api/moflof.svg?grid=EN80nc&metric=mof_sp",
    "https://prop.kc2g.com/api/moflof.svg?grid=EN80nc&metric=lof_sp",
	"https://prop.kc2g.com/api/moflof.svg?grid=FM18sx&metric=mof_sp",
	"https://prop.kc2g.com/api/moflof.svg?grid=FM18lv&metric=lof_sp"
  ],
  [
    "",
    "https://www.hamqsl.com/solar101vhf.php"
  ],
  [
    "",
	"iframe|/solar.html"
  ],
    // "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_HMIIC.jpg",
    // "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0171.jpg",
    // "https://services.swpc.noaa.gov/images/swx-overview-large.gif"
	// "ISS POSITION",
	// "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    // "https://www.blitzortung.org/en/Images/image_b_ny.png",
  [
	"OH Alerts", "iframe|/alerts-oh.html"
  ],
  [
    // "WEBSITE EXAMPLE",
    // "iframe|https://globe.adsbexchange.com/?airport=YYZ",
	"MD Alerts", "iframe|/alerts-md.html"
  ],
  // ["VIDEO EXAMPLE", "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"],
  [
	["SR-161 at Sunbury", "I-71 at Polaris", "US-23 at Cheshire", "I-71 at US-36"],
	"https://itscameras.dot.state.oh.us/images/CMH/CCTV2276.jpg",
    "https://itscameras.dot.state.oh.us/images/CMH/CMH039.jpg",
    "https://itscameras.dot.state.oh.us/images/CMH/CCTV2216.jpg",
    "https://itscameras.dot.state.oh.us/images/CMH/I-71_at_US-36.jpg"
  ],
  [
  // ["ISS POSITION",
    // "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"],
    ["US-50 at St Margarets", "US-50 at Rowe Blvd", "US-50 at Severn River", "I-97 at Benfield"],
	"https://chart.maryland.gov/wwwroot/thumbnails/7e01ec5800f700d700437a45351f0214.jpg",
    "https://chart.maryland.gov/wwwroot/thumbnails/fa0017fb008d004b004af03676235daa.jpg",
    "https://chart.maryland.gov/wwwroot/thumbnails/a3000f3401a1000b005dd336c4235c0a.jpg",
    "https://chart.maryland.gov/wwwroot/thumbnails/1e010edb006a00bb004af03676235daa.jpg"
   ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,8000,10100,
  10200,10500,10300,60000,
  30400,60700,8000,8000
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  // ["https://www.amsat.org/feed/", 60],           // Example RSS feed, refresh every 60 minutes
  // ["https://daily.hamweekly.com/atom.xml", 120], // Example Atom feed, refresh every 120 minutes
  ["https://forecast.weather.gov/xml/current_obs/KCMH.rss", 5],
  ["https://forecast.weather.gov/xml/current_obs/KBWI.rss", 5],
  ["https://forecast.weather.gov/xml/current_obs/KPIT.rss", 5],
  ["https://forecast.weather.gov/xml/current_obs/KIND.rss", 5],
  ["https://forecast.weather.gov/xml/current_obs/KTVC.rss", 5],
  ["https://www.spc.noaa.gov/products/spcwwrss.xml", 5],
  ["https://www.spc.noaa.gov/products/spcmdrss.xml", 5],
  // ["https://api.weather.gov/alerts/active?zone=OHC049", 10],
  // ["https://api.weather.gov/alerts/active?zone=OHC041", 10],
  // ["https://api.weather.gov/alerts/active?zone=MDC003", 10],
  // ["https://api.weather.gov/alerts/active?zone=MIC009", 10],
	// ["https://forecast.weather.gov/xml/current_obs/KTIX.rss", 5],
	// ["https://forecast.weather.gov/xml/current_obs/KMLB.rss", 5],
	// ["https://forecast.weather.gov/xml/current_obs/KMCO.rss", 5],
	// ["https://api.weather.gov/alerts/active/zone/FLC009", 10],
	// ["https://api.weather.gov/alerts?active=true&status=actual&message_type=alert&zone=FLC009&certainty=Observed&limit=500", 10],
	// ["https://www.nhc.noaa.gov/index-at.xml", 60],
	// ["https://www.nhc.noaa.gov/gis-at.xml", 60],
	// ["https://www.nhc.noaa.gov/nhc_at1.xml", 60],
	// ["https://www.nhc.noaa.gov/gtwo.xml", 480],
	// Source - https://www.nhc.noaa.gov/aboutrss.shtml
	// ["https://www.nhc.noaa.gov/nhc_at1.xml", 480], // at1 - 5
  ];
