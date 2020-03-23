let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});
let image_tracker = 'moon';

let darkModeToggler = document.getElementById('js-dark-mode');



darkModeToggler.addEventListener("click", function () {

    document.querySelector("body").classList.toggle("darkmode--on");
    document.querySelector("a").classList.toggle("darkmode--nav");
    document.getElementById("footer").classList.toggle("darkmode--footer");

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".name::after {background: white !important;}";

    //document.getElementById("btn").classList.toggle("darkmode--btn");

    var btns = document.getElementsByClassName('btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle("darkmode--btn");
    }

    var project = document.getElementsByClassName('project-info');
    for (var i = 0; i < project.length; i++) {
        project[i].classList.toggle("darkmode--project");
    }



});

function changeImage() {
    let image = document.getElementById('js-dark-mode');
    let light = document.getElementById('light');
    let dark = document.getElementById('dark');

    if (image_tracker == 'moon') {
        light.classList.add("hidden");
        dark.classList.remove("hidden");
        image.src = 'build/assets/img/sun.svg';

        image_tracker = 'sun';
    } else {
        dark.classList.add("hidden");
        light.classList.remove("hidden");
        image.src = 'build/assets/img/half-moon.svg';

        image_tracker = 'moon';
    }
}
