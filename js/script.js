const close = document.getElementById('close')
const burger = document.getElementById('burger')
const block = document.getElementById('block')
const block1 = document.getElementById('block1')

burger.addEventListener('click', () => {
    close.style.display = "block"
    burger.style.display = "none"
    block.style.top = "50px"
    block1.style.height = "450px"
})
close.addEventListener('click', () => {
    block.style.top = "-400px"
    close.style.display = "none"
    burger.style.display = "block"
    block1.style.height = "70px"

})