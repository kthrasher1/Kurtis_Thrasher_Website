let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});
let image_tracker = 'moon';
let line_tracker = 'black';


function darkmode() {

    document.querySelector("body").classList.toggle("darkmode--on");
    document.querySelector("a").classList.toggle("darkmode--nav");
    document.getElementById("footer").classList.toggle("darkmode--footer");


    if(line_tracker == 'black'){
        let styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".name::after {background: white !important;}";

        line_tracker  = 'white';

    }else{
        let styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".name::after {background: black !important;}";

        line_tracker = 'black';
    }


    let btns = document.getElementsByClassName('btn');
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.toggle("darkmode--btn");
    }

    let project = document.getElementsByClassName('project-info');
    for (let i = 0; i < project.length; i++) {
        project[i].classList.toggle("darkmode--project");
    }

    let image = document.getElementById('js-dark-mode');
    let image_two = document.getElementById('js-dark-mode-image');
    let light = document.getElementById('light');
    let dark = document.getElementById('dark');

    if (image_tracker == 'moon') {
        light.classList.add("hidden");
        dark.classList.remove("hidden");
        image.src = 'build/assets/img/sun.svg';
        image_two.src = 'build/assets/img/sun.svg';

        image_tracker = 'sun';
    } else {
        dark.classList.add("hidden");
        light.classList.remove("hidden");
        image.src = 'build/assets/img/half-moon.svg';
        image_two.src = 'build/assets/img/half-moon.svg';

        image_tracker = 'moon';
    }

};
