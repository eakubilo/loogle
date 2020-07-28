function addMarker(props, map) {
  // new marker

  var marker = new google.maps.Marker({
    position: props.coords,
    map: map
    //icon: props.iconImage
  });
  if (props.iconImage) {
    marker.setIcon(props.iconImage);
  }
  if (props.content) {
    var infoWindow = new google.maps.InfoWindow({
      content: props.content
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }
}
addMarker(
  {    coords: { lat: 44.9778, lng: -93.265 },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: "<h1> mitras house</h1>"
  }
,map);
addMarker({ coords: { lat: 44.9, lng: -93.265 } });
addMarker({ coords: { lat: 44.8, lng: -93.265 } });
