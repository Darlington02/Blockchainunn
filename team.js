let header = document.querySelector('h1')
let phoneSize = window.matchMedia('(max-width:760px)')
let menubar = document.getElementById('menu')
let closeBar = document.getElementById('close')
let navList = document.getElementById('navList')

if(phoneSize.matches){
    header.textContent = 'LEADERSHIP AND TEAM'
    header.style.fontSize = '22px'
}

function menuOpen(){
    navList.style.cssText = 'transform: translateX(0%)'
    closeBar.style.cssText = 'transform: translateX(0%)'
}
function menuClose(){
    navList.style.cssText = 'transform: translateX(100%)'
    closeBar.style.cssText = 'transform: translateX(300%)'
}