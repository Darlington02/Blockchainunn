let phoneSize = window.matchMedia('(max-width:670px)')
let menubar = document.getElementById('menu')
let closeBar = document.getElementById('close')
let navList = document.getElementById('navList')
let allSections = document.querySelectorAll('section')
let teaches = document.querySelectorAll('.teaching')
let achieve1 = document.querySelectorAll('.ac2')
let achieve2 = document.querySelectorAll('.ac1')

if(phoneSize.matches){
    document.getElementById('skills').textContent = 'Our Skillsets'
}

function menuOpen(){
    navList.style.cssText = 'transform: translateX(0%)'
    closeBar.style.cssText = 'transform: translateX(0%)'
    document.querySelector('html').style.overflow= 'hidden'
    for(i=0; i<allSections.length; i++){
        allSections[i].style.filter = 'opacity(.5) blur(3px)'
    }
    document.querySelector('footer').style.filter = 'opacity(.5) blur(3px)' 
}
function menuClose(){
    navList.style.cssText = 'transform: translateX(100%)'
    closeBar.style.cssText = 'transform: translateX(300%)'
    document.querySelector('html').style.overflow= 'scroll'
    for(i=0; i<allSections.length; i++){
        allSections[i].style.filter = 'opacity(1) blur(0px)'
    }
    document.querySelector('footer').style.filter = 'opacity(1) blur(0px)'
}


function phv(){
    document.querySelector('.vision').style.cssText = 'background-color: #388E3C; color: white; box-shadow: 0px 0px 64px #388E3C; border: none; transition: .3s linear;'
    document.querySelector('.mission').style.cssText = 'background:none; color: black; box-shadow: none; border:1px solid; transition: .3s linear;'
}


function phm(){
    document.querySelector('.mission').style.cssText = 'background-color: #388E3C; color: white; box-shadow: 0px 0px 64px #388E3C; border: none; transition: .3s linear;'
    document.querySelector('.vision').style.cssText = 'background:none; color: black; box-shadow: none; border:1px solid; transition: .3s linear;'
}


document.querySelector('.vision').addEventListener('touchstart', phv)
document.querySelector('.mission').addEventListener('touchstart', phm)

function teachphn(){
    for(i=0; i<teaches.length; i++){
        teaches[i].style.cssText = 'background-color: #388E3C; color: white; transition: .5s linear;'
        console.log('food')
    }
}

teaches[i].addEventListener('touchstart', teachphn)

