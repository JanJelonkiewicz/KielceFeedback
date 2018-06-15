function initMap()
{
	var point = {lat: 50.866896, lng: 20.628182};
	var mapOptions = {
		zoom: 14,
		minZoom: 13,
		center: point,
		fullscreenControl: false,
		streetViewControl: false
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	//var marker = new google.maps.Marker({position: point, map: map});
}
