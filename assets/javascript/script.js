// Show/Hide overlay
function show_overlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.right = "0";
}

function hide_overlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.right = "100%";
}

// Animates welcome message
function animate_welcome_message() {
    var msg_box = document.getElementById("welcome-message");
    var w1 = document.getElementById("w1");
    var w2 = document.getElementById("w2");
    if (msg_box.style.backgroundColor === "rgba(0, 0, 0, 0.9)") {
        w2.style.transform = "translateX(-100%)"
        w2.style.right = "100%";
        w1.style.opacity = "0";
        msg_box.style.backgroundColor = "rgba(0, 0, 0, 0)";
    } else {
        msg_box.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        setTimeout(()=>{
            w1.style.opacity = "1";
            setTimeout(()=>{
                w2.style.right = "92%";
                w2.style.transform = "translateX(100%)";
            }, 2000);
        }, 3000);
    }
}


// Displays fixed navbar when user scrolls beyond visible navbar
var navbar = document.querySelector("#nav");
var header = document.querySelector(".header-link"); 

setInterval(function() {
    if (window.scrollY > header.offsetHeight + 60) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
}, 50);

// Animates the welcome message on homepage
setTimeout(animate_welcome_message, 5000);
setInterval(animate_welcome_message, 12000);

var fade_command = "fade-in";