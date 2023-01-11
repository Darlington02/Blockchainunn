let communityHeader = document.getElementById('dive')
let tabSize = window.matchMedia('(max-width:900px)')
let phoneSize = window.matchMedia('(max-width:670px)')
let menubar = document.getElementById('menu')
let closeBar = document.getElementById('close')
let navList = document.getElementById('navList')
let reviewH = document.querySelectorAll('.reviewH')
let phoneReviewLeft = document.getElementById('reviewsSwipe2')
let phoneReviewright = document.getElementById('reviewsSwipe')
let phoneScroll;
let forward;
let preachImage = document.getElementById('preach')
let allSections = document.querySelectorAll('section')
let nlist = document.querySelectorAll('.nlist')
let ce = document.getElementById('ce')
document.getElementById('b1_0').style.width = '140px'
document.getElementById('b1_1').style.width = '140px'
let rectangles = document.querySelectorAll('.rectangles')




// function bds(){
//     document.getElementById('bdtext_0').style.cssText = 'display:none;'
//     document.getElementById('bdtext').style.cssText = 'display:flex;'
// }
// function bdsc(){
//     document.getElementById('bdtext_0').style.cssText = 'display:block;'
//     document.getElementById('bdtext').style.cssText = 'display:none'
// }
function fds(){
    document.getElementById('fdtext').style.cssText = 'display:none;'
    document.getElementById('fdtext_0').style.cssText = 'display:flex'
}
function fdsc(){
    document.getElementById('fdtext').style.cssText = 'display:block;'
    document.getElementById('fdtext_0').style.cssText = 'display:none'
}
function dss(){
    document.getElementById('dstext').style.cssText = 'display:none;'
    document.getElementById('dstext_0').style.cssText = 'display:flex'
}
function dssc(){
    document.getElementById('dstext').style.cssText = 'display:block;'
    document.getElementById('dstext_0').style.cssText = 'display:none'
}
function hds(){
    document.getElementById('hdtext').style.cssText = 'display:none;'
    document.getElementById('hdtext_0').style.cssText = 'display:flex'
}
function hdsc(){
    document.getElementById('hdtext').style.cssText = 'display:block;'
    document.getElementById('hdtext_0').style.cssText = 'display:none'
}
function ces(){
    document.getElementById('cetext').style.cssText = 'display:none;'
    document.getElementById('cetext_0').style.cssText = 'display:flex'
}
function cesc(){
    document.getElementById('cetext').style.cssText = 'display:block;'
    document.getElementById('cetext_0').style.cssText = 'display:none'
}


if(tabSize.matches){
    preachImage.src = './images/aboutpics.jpeg'
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
   


if(phoneSize.matches){
    communityHeader.textContent = 'OUR COMMUNITIES'
    for(i=0; i<nlist.length; i++){
        nlist[i].addEventListener('click', ()=>{
             menuClose();
        })
    }
    document.getElementById('logo').style.cssText = 'width: 100%; height: 500px; object-fit:cover';
    document.getElementById('webbrigde').style.width = '150px'
    document.getElementById('skilh').textContent = 'Skillsets We Offer...'
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


let ani= document.querySelectorAll('.ani')
let cards = document.querySelectorAll('.card1')

function aa(){
    for(i=0; i<ani.length; i++){
        ani[i].style.cssText = 'animation-play-state: paused'
}
}
function ab(){
    for(i=0; i<ani.length; i++){
        ani[i].style.cssText = 'animation-play-state: running'
}
}

for(i=0; i<ani.length; i++){
    ani[i].addEventListener('touchstart', aa)
}

for(i=0; i<ani.length; i++){
    ani[i].addEventListener('touchend', ab)
}

for(i=0; i<cards.length; i++){
    cards[i].addEventListener('touchstart', aa)
    console.log('food')
}

for(i=0; i<cards.length; i++){
    cards[i].addEventListener('touchend', ab)
}




