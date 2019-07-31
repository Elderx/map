let mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWxkZXJ4IiwiYSI6ImNqdHNrdHlmbDA1bjczem81ZTQzZnJ3engifQ.2PoeE03vtRBPj1D_-ESbrw';

let mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

let thunderforest_apikey = 'f9db91884c8c434b8a6d6d25789af2e5';

// Mapbox maps
let mapbox_light = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});
let mapbox_dark = L.tileLayer(mbUrl, {id: 'mapbox.dark', attribution: mbAttr});
let mapbox_streets = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
let mapbox_satellite = L.tileLayer(mbUrl, {id: 'mapbox.satellite',   attribution: mbAttr});
let mapbox_satellite_streets = L.tileLayer(mbUrl, {id: 'mapbox.streets-satellite',   attribution: mbAttr});
let mapbox_outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors',   attribution: mbAttr});
let mapbox_run_bike_hike = L.tileLayer(mbUrl, {id: 'mapbox.run-bike-hike',   attribution: mbAttr});

// Thunderforest maps
let thunderforest_outdoors = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: thunderforest_apikey,
	maxZoom: 22
});

let thunderforest_landscape = L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: thunderforest_apikey,
	maxZoom: 22
});

let thunderforest_transport = L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: thunderforest_apikey,
	maxZoom: 22
});

// OSM maps
let osm_standard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var mbt = L.tileLayer('http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS'
});


// Waymarked Trails

let hiking_Overlay = new L.TileLayer('http://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {
	attribution: '',
	maxZoom: 18
});

// Geocaches

let geocaches_Overlay = new L.TileLayer('http://{s}.geocaching.com/map.png?x={x}&y={y}&z={z}&k=TT4f&st=&ep=1', {
	attribution: 'Geocaching.com',
	maxZoom: 18,
	subdomains: ['tiles01', 'tiles02', 'tiles03', 'tiles04']
});


let map = L.map('map', {
		center: [63.568, 27.181],
		zoom: 13,
		layers: [mapbox_streets],
		drawControl: true
	});
