let burger = document.querySelector('.mobile')
let menuList = document.querySelectorAll('.burger')
let burgerBg = document.querySelector('.burger_menu')
let logo = document.querySelector('.logo')
let bambooSvg = document.querySelector('.logo a img')

burger.addEventListener('click', burgerClicked)

function burgerClicked(attr) {
    burger.classList.toggle('active')
    logo.classList.toggle('active')
    menuList.forEach(mli => mli.classList.toggle('active'))
    burgerBg.classList.toggle('active')
    // bambooSvg.style.backgroundColor = "red"
    // bambooSvg.style.filter = "invert(1)"
}