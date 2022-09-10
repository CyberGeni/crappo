let body = document.getElementById('body')
let menu = document.getElementById('menu')
let menuBar = document.getElementById('hamburger')
let close = document.getElementById('close-icon')
let menuItems = document.getElementsByClassName('menu-items')

if (window.innerWidth = 768) {
    function openNavbar() {
        body.classList.add('overflow-hidden')
        menu.classList.remove('hidden')
    
    }
    function closeNavbar() {
        menu.classList.add('hidden')
        body.classList.remove('overflow-hidden')
    }
    
    menuBar.addEventListener("click", openNavbar)
    close.addEventListener("click", closeNavbar)
}
