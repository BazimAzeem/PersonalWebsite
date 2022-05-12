'use strict';

// Theme toggle
const theme_toggle = document.querySelector('.nav-bar__button--theme-toggle');
theme_toggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    var className = document.body.className;
    console.log("The theme is " + className);
});

// Menu toggle
const menu_toggle = document.querySelector('.nav-bar__button--menu-toggle');
menu_toggle.addEventListener('click', function() {
    var nav_bar_links = document.querySelector('.nav-bar__links');
    if (nav_bar_links.style.maxHeight) {
        nav_bar_links.style.maxHeight = null;
    } else {
        nav_bar_links.style.maxHeight = nav_bar_links.scrollHeight + "px";
    } 
      console.log("height = " + nav_bar_links.style.maxHeight);
});
