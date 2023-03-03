const close = document.getElementById('close')
const burger = document.getElementById('burger')
const block = document.getElementById('block')

burger.addEventListener('click', () => {
    block.style.display = "flex"
    close.style.display = "block"
    burger.style.display = "none"
})
close.addEventListener('click', () => {
    block.style.display = "none"
    close.style.display = "none"
    burger.style.display = "block"
})