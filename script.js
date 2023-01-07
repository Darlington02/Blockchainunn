let nextReview = document.getElementById('next')
let prevReview = document.getElementById('prev')
let reviews = document.querySelectorAll('.card1')
let reviewMoveNext = false
let reviewMovePrev = false
let phoneReviewMoveNext = false
let reviewMove;
let phoneReviewMove;
let communityHeader = document.getElementById('dive')
let teachingHeader = document.getElementById('teaching')
let tabSize = window.matchMedia('(max-width:900px)')
let phoneSize = window.matchMedia('(max-width:670px)')
let phoneSize2 = window.matchMedia('(max-width:450px)')
let phoneSize3 = window.matchMedia('(max-width:425px)')
let phoneSize4 = window.matchMedia('(max-width:400px)')
let phoneSize5 = window.matchMedia('(max-width:375px)')
let phoneSize6 = window.matchMedia('(max-width:350px)')
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
let bd = document.getElementById('bd')
let fd = document.getElementById('fd')
let ds = document.getElementById('ds')
let hd = document.getElementById('hd')
let ce = document.getElementById('ce')

console.log(al)


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

if(phoneSize.matches){
    for(i=0; i<nlist.length; i++){
        nlist[i].addEventListener('click', ()=>{
             menuClose();
        })
    }
    }
    
function nextPhone(){
    if(reviewMoveNext === false){
        for(i = 0; i<reviews.length; i++){
            reviews[i].style.cssText = 'transform: translateX(-110%); transition: 1s linear'
        }
        reviewMoveNext = true 
        phoneScroll = false
        phoneReviewMove = 1
        phoneReviewLeft.style.visibility = 'visible'
    }
    else if(reviewMoveNext === true && phoneScroll === false){
        for(i = 0; i<reviews.length; i++){
            reviews[i].style.cssText = 'transform: translateX(-220%); transition: 1s linear'
        }
        reviewMoveNext = true
        phoneScroll = true
        phoneReviewMove = 2
        phoneReviewLeft.style.visibility = 'visible'
    }
    else if(phoneScroll === true){
        for(i = 0; i<reviews.length; i++){
            reviews[i].style.cssText = 'transform: translateX(-330%); transition: 1s linear'
        }
        phoneScroll == true
        phoneReviewMove = 3
        phoneReviewright.style.visibility = 'hidden'
    }
}


// prev phone review
function prevPhone(){
    if(reviewMovePrev === false && phoneReviewMove === 1){
        for(i = 0; i<reviews.length; i++){
            reviews[i].style.cssText = 'transform: translateX(0%); transition: 1s linear'
        }
        reviewMoveNext = false
        phoneReviewright.style.visibility = 'visible'
        phoneReviewLeft.style.visibility = 'hidden'

    }
    else if(phoneReviewMove === 2){
        for(i = 0; i<reviews.length; i++){
            reviews[i].style.cssText = 'transform: translateX(-110%); transition: 1s linear'
        }
        reviewMovePrev = false
        phoneReviewMove = 1
        reviewMoveNext = false
        phoneReviewright.style.visibility = 'visible'
    }
    else if(phoneReviewMove === 3){
        for(i = 0; i<reviews.length; i++){
            reviews[i].style.cssText = 'transform: translateX(-220%); transition: 1s linear'
        }
        phoneReviewMove = 2
        reviewMoveNext = false
        phoneScroll = true
        forward = true
        phoneReviewLeft.style.visibility = 'visible'
    }
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



// function next(){
//     if(reviewMoveNext === false){
//     for(let i=0; i<reviews.length; i++){
//         reviews[i].style.cssText = 'transform: translateX(-110%); transition: 1s linear'
//     }
//     prevReview.style.visibility = 'visible'
//     phoneReviewLeft.style.visibility = 'visible'
//     prevReview.style.transition = '.5s linear'
//     reviewMoveNext = true
//     reviewMove = 1;
// }

// else if(reviewMoveNext === true){
//     for(let i=0; i<reviews.length; i++){
//         reviews[i].style.cssText = 'transform: translateX(-220%); transition: 1s linear'
//     }
//     reviewMoveNext = true
//     nextReview.style.visibility = 'hidden'
    
// }
// }



// function prev(){
//     if(reviewMovePrev === false && reviewMove === 1){
//         for(let i=0; i<reviews.length; i++){
//             reviews[i].style.cssText = 'transform: translateX(-110%); transition: 1s linear'
//         }
//         nextReview.style.visibility = 'visible'
//         reviewMovePrev = true
//         reviewMoveNext = false
        
//     }
//     else if(reviewMovePrev === true){
//         for(let i=0; i<reviews.length; i++){
//             reviews[i].style.cssText = 'transform: translateX(0%); transition: 1s linear'

//         }
//         reviewMovePrev = false
//         reviewMoveNext = false
//         prevReview.style.visibility = 'hidden'
//         nextReview.style.visibility = 'visible'
//     }
// }




if(phoneSize.matches){
    communityHeader.textContent = 'OUR COMMUNITIES'
}

if(phoneSize.matches){
    teachingHeader.textContent = 'WHAT WE TEACH'
    document.getElementById('logo').style.cssText = 'width: 100%; height: 400px; object-fit:cover';
    document.getElementById('webbrigde').style.width = '150px'
}

let rectangles = document.querySelectorAll('.rectangles')


if(phoneSize2.matches){
    document.getElementById('teamHead').style.fontSize = '22px'
    document.getElementById('bunn').style.fontSize = '37px'
    document.getElementById('bunn').style.width = '80%'
    document.getElementById('bunn').style.margin = 'auto'
    document.getElementById('whyH').style.fontSize = '21px'
    communityHeader.style.cssText = 'font-size:20.6px;'
    for(i=0; i<rectangles.length; i++){
        rectangles[i].style.width = '25px'
    }
    document.getElementById('patnersHeaders').style.cssText = 'font-size:20px; line-height:25px'
    for(i=0; i<rectangles.length; i++){
        reviewH[i].style.width = '40vw'
    }
}
if(phoneSize3.matches){
    document.getElementById('bunn').style.fontSize = '35px'
}
if(phoneSize4.matches){
    document.getElementById('bunn').style.fontSize = '33px'
}
if(phoneSize5.matches){
    document.getElementById('bunn').style.fontSize = '31px'
}
if(phoneSize6.matches){
    document.getElementById('bunn').style.fontSize = '29px'
}

document.getElementById('b1_0').style.width = '140px'
document.getElementById('b1_1').style.width = '140px'


function achieveL (){
    for(i=0; i<achieveList.length; i++){
        achieveList[i].style.cssText = '#31B219'
    }
}

achieveList[i].addEventListener('ontouchstart', ()=>{
    return achieveL()
})





