let communityHeader = document.getElementById('dive')
let tabSize = window.matchMedia('(max-width:900px)')
let phoneSize = window.matchMedia('(max-width:670px)')
// let phoneSize2 = window.matchMedia('(max-width:450px)')
// let phoneSize3 = window.matchMedia('(max-width:425px)')
// let phoneSize4 = window.matchMedia('(max-width:400px)')
// let phoneSize5 = window.matchMedia('(max-width:375px)')
// let phoneSize6 = window.matchMedia('(max-width:350px)')
let menubar = document.getElementById('menu')
let closeBar = document.getElementById('close')
let navList = document.getElementById('navList')
let reviewH = document.querySelectorAll('.reviewH')
let achieveList = document.querySelectorAll('.achieveList')
let phoneReviewLeft = document.getElementById('reviewsSwipe2')
let phoneReviewright = document.getElementById('reviewsSwipe')
let phoneScroll;
let forward;
let preachImage = document.getElementById('preach')
let allSections = document.querySelectorAll('section')
let nlist = document.querySelectorAll('.nlist')
// let bd = document.getElementById('bd')
// let fd = document.getElementById('fd')
// let ds = document.getElementById('ds')
// let hd = document.getElementById('hd')
let ce = document.getElementById('ce')
document.getElementById('b1_0').style.width = '140px'
document.getElementById('b1_1').style.width = '140px'
let rectangles = document.querySelectorAll('.rectangles')




function bds(){
    document.getElementById('bdtext').style.cssText = 'display:none;'
    document.getElementById('bdtext_0').style.cssText = 'display:flex;'
}
function bdsc(){
    document.getElementById('bdtext').style.cssText = 'display:block;'
    document.getElementById('bdtext_0').style.cssText = 'display:none'
}
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

// if(phoneSize.matches){
//     teachingHeader.textContent = 'WHAT WE TEACH'
//     document.getElementById('logo').style.cssText = 'width: 100%; height: 400px; object-fit:cover';
//     document.getElementById('webbrigde').style.width = '350px'
// }




// if(phoneSize2.matches){
//     document.getElementById('teamHead').style.fontSize = '22px'
//     document.getElementById('bunn').style.fontSize = '37px'
//     document.getElementById('bunn').style.width = '80%'
//     document.getElementById('bunn').style.margin = 'auto'
//     document.getElementById('whyH').style.fontSize = '21px'
//     communityHeader.style.cssText = 'font-size:20.6px;'
//     for(i=0; i<rectangles.length; i++){
//         rectangles[i].style.width = '25px'
//     }
//     document.getElementById('patnersHeaders').style.cssText = 'font-size:20px; line-height:25px'
//     for(i=0; i<rectangles.length; i++){
//         reviewH[i].style.width = '40vw'
//     }
// }
// if(phoneSize3.matches){
//     document.getElementById('bunn').style.fontSize = '35px'
// }
// if(phoneSize4.matches){
//     document.getElementById('bunn').style.fontSize = '33px'
// }
// if(phoneSize5.matches){
//     document.getElementById('bunn').style.fontSize = '31px'
// }
// if(phoneSize6.matches){
//     document.getElementById('bunn').style.fontSize = '29px'
// }




function achieveL (){
    for(i=0; i<achieveList.length; i++){
        achieveList[i].style.cssText = '#31B219'
    }
}

achieveList[i].addEventListener('ontouchstart', ()=>{
    return achieveL()
})

document.querySelector('.vision').addEventListener('touchstart', ()=>{
    document.querySelector('.vision').style.cssText = 'background-color: #388E3C; color: white; box-shadow: 0px 0px 64px #388E3C; border: none; transition: .3s linear;'
})


document.querySelector('mission').addEventListener('touchstart', ()=>{
    document.querySelector('mission').style.cssText = 'background-color: #388E3C; color: white; box-shadow: 0px 0px 64px #388E3C; border: none; transition: .3s linear;'
})




