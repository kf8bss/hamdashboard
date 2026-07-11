// CUT START
// weather.js — KF8BSS Weather Sub-Dashboard
// Linked from right-side tab "WEATHER" in config.js
// All URLs verified working as of July 2026

var topBarCenterText = "KF8BSS — Weather Dashboard";

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Left: navigation back to main dashboard context
// Right: drill-down weather tools
var aURL = [
  // ── LEFT — Quick Navigation ────────────────────────────────────
  ["2196F3", "NWS ILN",  "https://www.weather.gov/iln", "1"],
  ["2196F3", "NWS LWX",  "https://www.weather.gov/lwx", "1"],
  ["2196F3", "NHC",      "https://www.nhc.noaa.gov", "1"],
  ["2196F3", "WINDY",    "https://embed.windy.com/embed2.html?lat=40.07&lon=-82.93&width=900&detailLat=40.07&detailLon=-82.93&height=600&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1", "1"],
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#4/40.0/-82.98", "1"],

  // ── RIGHT — Drill-Down Tools ───────────────────────────────────
  ["2196F3", "SPC DAY1",  "https://www.spc.noaa.gov/products/outlook/day1otlk.html", "1", "R"],
  ["2196F3", "SPC DAY2",  "https://www.spc.noaa.gov/products/outlook/day2otlk.html", "1", "R"],
  ["2196F3", "SPC DAY3",  "https://www.spc.noaa.gov/products/outlook/day3otlk.html", "1", "R"],
  ["2196F3", "WPC QPF",   "https://www.wpc.ncep.noaa.gov/qpf/qpf2.shtml", "1", "R"],
  ["2196F3", "WPC ERO",   "https://www.wpc.ncep.noaa.gov/qpf/excess_rain.shtml", "1", "R"],
  ["2196F3", "PSKREPTR",  "https://pskreporter.info/pskmap.html", "1", "R"],
  ["2196F3", "RADAR KAKQ","https://radar.weather.gov/station/KAKQ/standard", "1", "R"],
];

// Dashboard tiles
// Row 1 — Current Conditions & Radar
// Row 2 — Precipitation & Severe
// Row 3 — Wind, Extended Temps & Alerts
var aIMG = [

  // ── TILE 1 — Radar ─────────────────────────────────────────────
  [
    ["Radar CONUS", "Radar OH (KILN)", "Radar MD (KLWX)"],
    "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif",
    "https://radar.weather.gov/ridge/standard/KILN_loop.gif",
    "https://radar.weather.gov/ridge/standard/KLWX_loop.gif"
  ],

  // ── TILE 2 — Satellite ─────────────────────────────────────────
  [
    ["Satellite GL GEOCOLOR", "Satellite NE GEOCOLOR", "Satellite IR"],
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/cgl/GEOCOLOR/GOES19-CGL-GEOCOLOR-600x600.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/ne/GEOCOLOR/GOES19-NE-GEOCOLOR-600x600.gif",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/cgl/13/GOES19-CGL-13-600x600.gif"
  ],

  // ── TILE 3 — Current Temps ─────────────────────────────────────
  [
    ["Current Temp", "Apparent Temp (Wind Chill / Heat Index)"],
    "https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tair.png",
    "https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tapp.png"
  ],

  // ── TILE 4 — Current Conditions ────────────────────────────────
  [
    ["Relative Humidity", "Visibility", "Sky Cover"],
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=rh&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=vis&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=sky&n=1"
  ],

  // ── TILE 5 — QPF & Severe Activity ─────────────────────────────
  [
    ["QPF Day 1", "Watches & Warnings", "Storm Reports"],
    "https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
    "https://www.spc.noaa.gov/products/watch/validww.png",
    "https://www.spc.noaa.gov/climo/reports/today.gif"
  ],

  // ── TILE 6 — WPC National Forecast Charts ──────────────────────
  [
    ["WPC Forecast D1", "WPC Forecast D2", "WPC Forecast D3"],
    "https://www.wpc.ncep.noaa.gov/noaa/noaa.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif"
  ],

  // ── TILE 7 — Hazards & Warnings ────────────────────────────────
  [
    ["WPC Hazards D3-7", "Broad WWA", "National WWA"],
    "https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png",
    "https://www.weather.gov/wwamap/png/US.png",
    "https://www.spc.noaa.gov/products/watch/validww.png"
  ],

  // ── TILE 8 — SPC Convective Outlooks ───────────────────────────
  // Using iframe since SPC GIF URLs have hardcoded issuance times
  [
    "SPC Outlooks",
    "iframe|https://www.spc.noaa.gov/products/outlook/day1otlk.html"
  ],

  // ── TILE 9 — Wind ──────────────────────────────────────────────
  [
    ["Wind Speed", "Wind Gust", "Wind Direction"],
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windspd&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windgust&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=winddir&n=1"
  ],

  // ── TILE 10 — Temperature Forecast & PoP ───────────────────────
  [
    ["Max Temp Forecast", "Min Temp Forecast", "Prob of Precip 12hr"],
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=maxt&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=mint&n=1",
    "https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=pop12&n=1"
  ],

  // ── TILE 11 — Space Weather / D-RAP ────────────────────────────
  [
    ["NOAA D-RAP", "Space Weather Overview"],
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/latest.png",
    "https://services.swpc.noaa.gov/images/swx-overview-large.gif"
  ],

  // ── TILE 12 — Regional Alerts ──────────────────────────────────
  [
    "OH Alerts",
    "iframe|/alerts-oh.html"
  ],

];

// Tile rotation intervals in milliseconds
// Faster for current conditions (tiles 1-4, 9-10)
// Slower for forecast/text tiles (tiles 5-8, 11-12)
var tileDelay = [
  10000, 10500, 12000, 10000,   // Row 1: Radar, Satellite, Temps, Conditions
  12000, 12000, 12000, 600000,  // Row 2: QPF/Severe, WPC Charts, Hazards, SPC iframe
  10000, 10000, 30000, 600000   // Row 3: Wind, Temps/PoP, D-RAP, OH Alerts iframe
];

// No RSS feeds in the weather sub-dashboard
var aRSS = [];

// CUT END
