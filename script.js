'use strict';

const switcher = document.querySelector('#theme-toggle');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    console.log("I am currently in " + className);
});
