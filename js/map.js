activeMarkers = [];
var map;
var heatmap;

function initMap()
{
	var mapCenter = {
		lat: 50.866896,
		lng: 20.628182
	};
	var mapOptions = {
		zoom: 14,
		minZoom: 13,
		maxZoom: 18,
		center: mapCenter,
		fullscreenControl: false,
		streetViewControl: false,
		mapTypeControl: false,
		styles: [
    {
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    }
  ]
	}

	map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function showPointsOfInterest(jsonFile)
{
	var request = new XMLHttpRequest();
	request.open("GET", jsonFile, false);
	request.send(null);
	var allPoiData = JSON.parse(request.responseText);

	allPoiData.forEach(function(poiData)
	{
		var utm = "PROJCS[\"ETRS89 / Poland CS2000 zone 7\",GEOGCS[\"ETRS89\",DATUM[\"European_Terrestrial_Reference_System_1989\",SPHEROID[\"GRS 1980\",6378137,298.257222101,AUTHORITY[\"EPSG\",\"7019\"]],TOWGS84[0,0,0,0,0,0,0],AUTHORITY[\"EPSG\",\"6258\"]],PRIMEM[\"Greenwich\",0,AUTHORITY[\"EPSG\",\"8901\"]],UNIT[\"degree\",0.0174532925199433,AUTHORITY[\"EPSG\",\"9122\"]],AUTHORITY[\"EPSG\",\"4258\"]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"latitude_of_origin\",0],PARAMETER[\"central_meridian\",21],PARAMETER[\"scale_factor\",0.999923],PARAMETER[\"false_easting\",7500000],PARAMETER[\"false_northing\",0],UNIT[\"metre\",1,AUTHORITY[\"EPSG\",\"9001\"]],AUTHORITY[\"EPSG\",\"2178\"]]\n";
		var longlat = "+proj=longlat";
		var temp = proj4(utm, longlat, poiData["json_geometry"]["coordinates"]);
		var position = new google.maps.LatLng(temp[1], temp[0]);

		var marker = new google.maps.Marker(
			{
				position: position,
				icon: "img/point.png",
				map: map
			}
		);

		activeMarkers.push(marker);
	});
}

function showHeatmap(jsonFile)
{
	var request = new XMLHttpRequest();
	request.open("GET", jsonFile, false);
	request.send(null);
	var allPoiData = JSON.parse(request.responseText);

	var heatmapData = [];

	allPoiData.forEach(function(poiData)
	{
		heatmapData.push(
			{
				location: new google.maps.LatLng(poiData[0], poiData[1]),
			});
	});

	heatmap = new google.maps.visualization.HeatmapLayer({
		data: heatmapData
	});

	heatmap.set("radius", 20);
	heatmap.setMap(map);

	console.log("done");
}
