'use strict'

const menuButton = document.querySelector(".nav__link-menu")
const menu = document.querySelector(".nav__links")

menuButton.addEventListener('click', function (event) {
    event.preventDefault()
    if (menu.classList.contains("nav__links--active")) menu.classList.remove("nav__links--active")
    else menu.classList.add("nav__links--active")
})