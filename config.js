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
  ["2196F3", "OpenHamClock", "https://openhamclock.kf8bss-radio.com", "1"],
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
  [["Radar CONUS", "Radar Small"], "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KILN_loop.gif",
  ],
  [
    // "NOAA D-RAP",
    "",
	"https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tair.png",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=rh&n=1",
	"https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tapp.png",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=maxt&n=1",
	"https://www.wpc.ncep.noaa.gov/heat_index_MAX/bchi_day3.gif",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=mint&n=1",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=pop12&n=1",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=vis&n=1",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windspd&n=1",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windgust&n=1",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=sky&n=1",
	// "https://services.swpc.noaa.gov/images/animations/d-rap/global/latest.png",
  ],
  [
    // "ISS POSITION",
    "",
	"https://www.wpc.ncep.noaa.gov/noaa/noaa.gif",
	"https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif",
	"https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
	// "https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif",
	"https://origin.wpc.ncep.noaa.gov/basicwx/allfcsts_loop_ndfd.gif",
	"https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif",
	"https://www.spc.noaa.gov/products/watch/validww.png",
	"https://www.spc.noaa.gov/climo/reports/today.gif",
	// "https://www.weather.gov/wwamap/png/US.png",
	"https://www.spc.noaa.gov/products/exper/enhtstm/imgs/enh_1600.gif",
	"https://www.spc.noaa.gov/products/outlook/day2otlk_0600.gif",
	"https://www.spc.noaa.gov/products/outlook/day3otlk_0730.gif",
	"https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png",
	"https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
	// "https://s.w-x.co/staticmaps/acttemp_1280x720.jpg?crop=16:9",
	//"https://www.usairnet.com/weather/images/current-temperature.png",
	// "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/latest.png",
  ],
  [
    "LOCAL SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/cgl/GEOCOLOR/GOES19-CGL-GEOCOLOR-600x600.gif",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "ISS POSITION",
	"https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    // "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],
  ["YOUTUBE EXAMPLE", "iframe|https://www.youtube.com/embed/fzPFaXAV_2Y?autoplay=1&mute=1"],
  [
    "WEBSITE EXAMPLE",
    "iframe|https://globe.adsbexchange.com/?airport=YYZ",
  ],
  ["VIDEO EXAMPLE", "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  // ["https://www.amsat.org/feed/", 60],           // Example RSS feed, refresh every 60 minutes
  // ["https://daily.hamweekly.com/atom.xml", 120], // Example Atom feed, refresh every 120 minutes
  ["https://forecast.weather.gov/xml/current_obs/KCMH.rss", 5],
  ["https://api.weather.gov/alerts/active/zone/OHC049", 10],
  ["https://api.weather.gov/alerts/active/zone/OHC041", 10],
  ["https://api.weather.gov/alerts/active/zone/MDC003", 10],
  ["https://api.weather.gov/alerts/active/zone/MIC009", 10],
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
