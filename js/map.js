function initMap()
{
	var mapCenter = {
		lat: 50.866896,
		lng: 20.628182
	};
	var mapOptions = {
		zoom: 14,
		minZoom: 13,
		center: mapCenter,
		fullscreenControl: false,
		streetViewControl: false,
		mapTypeControl: false
	}

	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	//var marker = new google.maps.Marker({position: mapCenter, map: map});
}
