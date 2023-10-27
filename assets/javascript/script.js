function show_overlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.right = "0";
}

function hide_overlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.right = "100%";
}

var navbar = document.querySelector("#nav");
var header = document.querySelector(".header-link"); 

setInterval(function() {
    if (window.scrollY > header.offsetHeight + 60) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
}, 50);