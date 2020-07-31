var bathrooms = [];


function addMarker(props, map) {
  // new marker

  var marker = new google.maps.Marker({
    position: props.coords,
    map: map,
    icon: props.icon
    
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


class Bathroom {
  constructor(
    lati,
    long,
    rating,
    tp,
    address,
    sink,
    soap,
    handSani,
    smellG,
    bathRoomName
  ) {
    this.lati = lati;
    this.long = long;
    this.rating = 0;
    this.address = address;
    this.sink = sink;
    this.soap = soap;
    this.handSani = handSani;
    this.smellG = smellG;
    this.tp = tp;
    this.bathRoomName = bathRoomName;
  }

  score() {
    if (this.sink) {
      this.rating++;
    }
    if (this.soap) {
      this.rating++;
    }
    if (this.handSani) {
      this.rating += 0.5;
    }
    if (this.tp) {
      this.rating++;
    }
    if (this.smellG) {
      this.rating++;
    }
  }
}

function toggleSideBar(){
  document.getElementById("sidebar").classList.toggle('active');
}
