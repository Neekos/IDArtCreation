const burger = document.querySelectorAll('.header__menu-burger-item')
const menuBlock = document.querySelector('.header__menu-block')
const header = document.querySelector('.header')
const menuLink = document.querySelectorAll('.header__menu-link')

burger.forEach((element, index) => {
    burger[index].addEventListener('click', () => {
        burger.forEach(elem => {
            elem.classList.toggle("menu-burger-active")
        })
        menuBlock.classList.toggle("view")
        header.classList.toggle("viewm")
    })
})
menuLink.forEach((element, index) => {
    element.addEventListener('click', () => {
        menuLink.forEach(elem => {
            elem.classList.remove("active")
        })
    })
    element.addEventListener('click', () => {
        element.classList.add("active")
    })
})
