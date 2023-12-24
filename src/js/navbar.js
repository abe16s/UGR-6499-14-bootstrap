document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('navbar-burger');
    let close = document.getElementById('navbar-burger--close');
    let menu = document.querySelectorAll(".navbar-menu")
    
    let toggle = function () {
        menu[0].classList.toggle("d-none");
        menu[1].classList.toggle("d-none");
        menu[0].classList.toggle("d-flex");
        menu[1].classList.toggle("d-flex");
        burger.classList.toggle("d-none");
        close.classList.toggle("d-none");
    }
    
    burger.addEventListener('click', toggle);
    close.addEventListener('click', toggle);
});