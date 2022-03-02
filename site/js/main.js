var menu = document.querySelector(".toggleMenu")

function toggleMenu() {
    var nav = document.querySelector('.headerMenu')
    nav.classList.toggle('active')
}

menu.addEventListener("click", toggleMenu)

var header = document.querySelector('header')
var headerHeight = header.offsetHeight