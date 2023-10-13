var navbar = document.querySelector("#nav");
var header = document.querySelector(".header-link"); 

setInterval(function() {
    if (window.scrollY > header.offsetHeight + 60) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
}, 500);