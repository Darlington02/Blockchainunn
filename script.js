let nextReview = document.getElementById('next')
let prevReview = document.getElementById('prev')
let reviews = document.querySelectorAll('.card1')
let reviewMoveNext = false
let reviewMovePrev = false
let reviewMove;
let communityHeader = document.getElementById('dive')
let teachingHeader = document.getElementById('teaching')
let phoneSize = window.matchMedia('(max-width:670px)')
let phoneSize2 = window.matchMedia('(max-width:420px)')
let menubar = document.getElementById('menu')
let closeBar = document.getElementById('close')
let navList = document.getElementById('navList')



function menuOpen(){
    navList.style.cssText = 'transform: translateX(0%)'
    closeBar.style.cssText = 'transform: translateX(0%)'
}
function menuClose(){
    navList.style.cssText = 'transform: translateX(100%)'
    closeBar.style.cssText = 'transform: translateX(300%)'
}

function next(){
    if(reviewMoveNext === false){
    for(let i=0; i<reviews.length; i++){
        reviews[i].style.cssText = 'transform: translateX(-110%); transition: 1s linear'
    }
    prevReview.style.visibility = 'visible'
    prevReview.style.transition = '.5s linear'
    reviewMoveNext = true
    reviewMove = 1;
}

else if(reviewMoveNext === true){
    for(let i=0; i<reviews.length; i++){
        reviews[i].style.cssText = 'transform: translateX(-220%); transition: 1s linear'
    }
    reviewMoveNext = true
    nextReview.style.visibility = 'hidden'
    
}
}



function prev(){
    if(reviewMovePrev === false && reviewMove === 1){
        for(let i=0; i<reviews.length; i++){
            reviews[i].style.cssText = 'transform: translateX(-110%); transition: 1s linear'
        }
        nextReview.style.visibility = 'visible'
        reviewMovePrev = true
        reviewMoveNext = false
        
    }
    else if(reviewMovePrev === true){
        for(let i=0; i<reviews.length; i++){
            reviews[i].style.cssText = 'transform: translateX(0%); transition: 1s linear'

        }
        reviewMovePrev = false
        reviewMoveNext = false
        prevReview.style.visibility = 'hidden'
        nextReview.style.visibility = 'visible'
    }
}




if(phoneSize.matches){
    communityHeader.textContent = 'OUR COMMUNITIES'
}

if(phoneSize.matches){
    teachingHeader.textContent = 'WHAT WE TEACH'
    document.getElementById('logo').style.cssText = 'width: 100%; height: 400px; object-fit:cover'
}

let rectangles = document.querySelectorAll('.rectangles')


if(phoneSize2.matches){
    document.getElementById('reviewsHeader').textContent = 'OUR REVIEWS'
    document.getElementById('teamHead').style.fontSize = '20px'
    document.getElementById('bunn').style.fontSize = '37px'
    document.getElementById('whyH').style.fontSize = '20px'
    communityHeader.style.cssText = 'font-size:20px;'
    for(i=0; i<rectangles.length; i++){
        rectangles[i].style.width = '25px'
    }
    document.getElementById('patnersHeaders').style.cssText = 'font-size:16px; line-height:25px'
}

// nextReview.addEventListener('click', ()=>{
//     console.log('food')
//         return next()
// })

// prevReview.addEventListener('click', ()=>{
//     return prev()
//  })