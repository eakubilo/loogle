var bathrooms = [];


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

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}