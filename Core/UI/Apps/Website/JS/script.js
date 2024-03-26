var position = [50.460048, 30.522314];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);
  
    function CenterControl(controlDiv, map) {

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.className = 'centerMap';
      controlUI.title = 'Click to recenter the map';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.className = 'centerMap-btn';
      controlText.innerHTML = 'Center Map';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', function() {
        map.setCenter(latLng);
      });

    }

    var mapOptions = {
        scrollwheel: false,
        keyboardShortcuts: false,
        zoom: 17, // initialize zoom level - the max value is 21
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
    var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);
}



google.maps.event.addDomListener(window, 'load', showGoogleMaps);