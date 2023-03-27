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

let offset = 0
const left = document.querySelector('.intro__img')
document.querySelector('.left').addEventListener('click', () => {

    offset += 100;
    if (offset > 190) {
        offset = -100;
    }
    left.style.left = -offset + '%';
})
document.querySelector('.rigth').addEventListener('click', () => {
    offset -= 100;
    if (offset < -100) {
        offset = 100;
    }
    left.style.left = -offset + '%';
})
document.querySelector('.intro').addEventListener('touchmove', () => {

    offset += 100;
    if (offset > 190) {
        offset = -100;
    }
    left.style.left = -offset + '%';
})
