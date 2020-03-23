let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});


let toDarkMode = document.getElementById("js-to-dark-mode");

toDarkMode.addEventListener("click", function(){
    console.log("hello");
});