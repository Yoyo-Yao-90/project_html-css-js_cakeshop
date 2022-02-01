function initialize() {
    // object function to set lat lng and zoom the google map
    var mapProp = {
        center: new google.maps.LatLng(44.4117, -79.6668),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // get id googleMap
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);
