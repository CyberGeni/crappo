let body = document.getElementById('body')
let menu = document.getElementById('menu')
let menuBar = document.getElementById('hamburger')
let close = document.getElementById('close-icon')
let menuItems = document.getElementsByClassName('menu-items')

if (window.innerWidth <= 768) {
    function openNavbar() {
        body.classList.add('overflow-hidden')
        menu.classList.add('-right-8')
        menu.classList.remove('right-[100vh]')
    
    }
    function closeNavbar() {
        menu.classList.remove('-right-8')
        menu.classList.add('right-[100vh]')
        body.classList.remove('overflow-hidden')
    }
    
    menuBar.addEventListener("click", openNavbar)
    close.addEventListener("click", closeNavbar)
}
