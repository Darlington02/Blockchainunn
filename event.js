let phoneSize = window.matchMedia('(max-width:670px)')
let menubar = document.getElementById('menu')
let closeBar = document.getElementById('close')
let navList = document.getElementById('navList')
let allSections = document.querySelectorAll('section')

if(phoneSize.matches){
    document.getElementById('wtep').textContent = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceau."
}

function menuOpen(){
    navList.style.cssText = 'transform: translateX(-30%)'
    closeBar.style.cssText = 'transform: translateX(0%)'
    document.querySelector('html').style.overflow= 'hidden'
    // for(i=0; i<allSections.length; i++){
    //     allSections[i].style.filter = 'brightness(20%)'
    // }
    document.querySelector('footer').style.filter = 'opacity(.5) brightness(20%)' 
}
function menuClose(){
    navList.style.cssText = 'transform: translateX(100%)'
    closeBar.style.cssText = 'transform: translateX(300%)'
    document.querySelector('html').style.overflow= 'scroll'
    // for(i=0; i<allSections.length; i++){
    //     allSections[i].style.filter = 'opacity(1) blur(0px)'
    // }
    document.querySelector('footer').style.filter = 'opacity(1) blur(0px)'
}
