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
  ["f3de21", "SATS", "satellite.js"],
  
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  // ["2196F3", "OpenHamClock", "https://openhamclock.kf8bss-radio.com", "1"],
  ["2196F3", "ADS-B", "https://globe.adsbexchange.com/?airport=KCMH&enableLabels&extendedLabels=1&zoom=10", "1"],
  [
    "2196F3",
    "RADAR",
    "dark|https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

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
    "Solar Summary",
    "https://www.hamqsl.com/solar101vhf.php"
  ],
  [
    ["Columbus MUF", "Columbus LUF", "Annapolis MUF", "Annapolis LUF"],
    "https://prop.kc2g.com/api/moflof.svg?grid=EN80nc&metric=mof_sp",
    "https://prop.kc2g.com/api/moflof.svg?grid=EN80nc&metric=lof_sp",
	"https://prop.kc2g.com/api/moflof.svg?grid=FM18sx&metric=mof_sp",
	"https://prop.kc2g.com/api/moflof.svg?grid=FM18lv&metric=lof_sp"
  ],
  [
    ["Sun - Visible (Sunspots)", "Sun - Active Regions", "Space Weather Overview"],
    "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_HMIIC.jpg",
    "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_0171.jpg",
    "https://services.swpc.noaa.gov/images/swx-overview-large.gif"
	// "ISS POSITION",
	// "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    // "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],
  [
	"OH Alerts", "iframe|/alerts-oh.html"
  ],
  [
    // "WEBSITE EXAMPLE",
    // "iframe|https://globe.adsbexchange.com/?airport=YYZ",
	"MD Alerts", "iframe|/alerts-md.html"
  ],
  ["VIDEO EXAMPLE", "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"],
  ["ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,8000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  // ["https://www.amsat.org/feed/", 60],           // Example RSS feed, refresh every 60 minutes
  // ["https://daily.hamweekly.com/atom.xml", 120], // Example Atom feed, refresh every 120 minutes
  ["https://forecast.weather.gov/xml/current_obs/KCMH.rss", 5],
  ["https://api.weather.gov/alerts/active?zone=OHC049", 10],
  ["https://api.weather.gov/alerts/active?zone=OHC041", 10],
  ["https://api.weather.gov/alerts/active?zone=MDC003", 10],
  ["https://api.weather.gov/alerts/active?zone=MIC009", 10],
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
