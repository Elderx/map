// Coordinate
var c = new L.Control.Coordinates();

c.addTo(map);

map.on('click', function(e) {
	c.setCoordinates(e);
});

// DRAW
var editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);

    var options = {
        edit: {
            featureGroup: editableLayers, //REQUIRED!!
            remove: false
        }
    };

    //var drawControl = new L.Control.Draw(options);
    //map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function (e) {
        var type = e.layerType,
            layer = e.layer;

        if (type === 'marker') {
            layer.bindPopup('A popup!');
        }

        editableLayers.addLayer(layer);
    });

    document.getElementById('export').onclick = function(e) {
                // Extract GeoJson from featureGroup
                var data = editableLayers.toGeoJSON();

                // Stringify the GeoJson
                var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

                // Create export
                document.getElementById('export').setAttribute('href', 'data:' + convertedData);
                document.getElementById('export').setAttribute('download','data.geojson');
            }


            // Layer Control
            let baseLayers = {
              	"Mapbox light": mapbox_light,
								"Mapbox dark": mapbox_dark,
              	"Mapbox streets": mapbox_streets,
								"Mapbox satellite": mapbox_satellite,
								"Mapbox satellite streets": mapbox_satellite_streets,
								"Mapbox outdoors": mapbox_outdoors,
								"Mapbox run bike hike": mapbox_run_bike_hike,
								"OSM standard": osm_standard,
								"Thunderforest outdoors": thunderforest_outdoors,
								"Thunderforest landscape": thunderforest_landscape,
								"Thunderforest transport": thunderforest_transport,
								"MBT": mbt
            };

            let overlays = {
							"Hiking": hiking_Overlay,
							"Geocaches": geocaches_Overlay
            };

            var allMapLayers = { 'mapbox_grayscale': mapbox_light,
            					  'mapbox_streets': mapbox_streets,
												'mapbox_dark': mapbox_dark,
												'mapbox_satellite': mapbox_satellite,
												'mapbox_satellite-streets': mapbox_satellite_streets,
												'mapbox_outdoors': mapbox_outdoors,
												'mapbox_run-bike-hike': mapbox_run_bike_hike,
												'osm_standard': osm_standard,
												'thunderforest_outdoors': thunderforest_outdoors,
												'thunderforest_landscape': thunderforest_landscape,
												'thunderforest_transport': thunderforest_transport,
												'hiking_Overlay': hiking_Overlay,
												'mbt': mbt,
												'geocaches_Overlay': geocaches_Overlay,
                        'editable': editableLayers
            					};
            L.hash(map, allMapLayers);
            L.control.layers(baseLayers, overlays).addTo(map);
            // Layer Control
