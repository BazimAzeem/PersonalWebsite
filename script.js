'use strict';

const switcher = document.querySelector('#theme-toggle');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    console.log("I am currently in " + className);

    var image = document.getElementById("home-image");
    if (className == "light-theme") {
        image.src = "images/trees-light.png";
        image.alt = "Light themed trees";
    } else {
        image.src = "images/trees-dark.png";
        image.alt = "Dark themed trees";
    }
});

window.onscroll = function() {
    var navBar = document.getElementById("nav-bar");
    if (window.pageYOffset > window.innerHeight) {
        navBar.classList.add("nav-scroll");
    } else {
        navBar.classList.remove("nav-scroll");
    }
};