'use strict';

// Theme toggle
const themeToggle = document.querySelector('.nav-bar__button--theme-toggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

// Menu toggle
const menuToggle = document.querySelector('.nav-bar__button--menu-toggle');
menuToggle.addEventListener('click', function(event) {
    var navBarLinks = document.querySelector('.nav-bar__links');
    if (navBarLinks.style.maxHeight) {
        navBarLinks.style.maxHeight = null;
    } else {
        navBarLinks.style.maxHeight = navBarLinks.scrollHeight + "px";
    } 

    event.stopPropagation();
});

// Retract navigation bar when:
// nav-bar is not clicked
// body is clicked
const navBar = document.querySelector('.nav-bar');
navBar.addEventListener('click',  function (event) {
    event.stopPropagation();
});

const body = document.body;
body.addEventListener('click',  function () {
    var navBarLinks = document.querySelector('.nav-bar__links');
    navBarLinks.style.maxHeight = null;
});