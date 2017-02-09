var elem = document.getElementById("sequence");

var options = {
    keyNavigation: true,
    cycle: false,
    autoPlay: true,
    autoPlayInterval: 2000,
    autoPlayPauseOnHover: false
}

var seq = sequence(elem, options);