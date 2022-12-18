let nextReview = document.getElementById('next')
let prevReview = document.getElementById('prev')
let reviews = document.querySelectorAll('.card1')
let reviewMoveNext = false
let reviewMovePrev = false
let reviewMove;





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

nextReview.addEventListener('click', ()=>{
        return next()
})

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
 prevReview.addEventListener('click', ()=>{
    return prev()
 })

let communityHeader = document.getElementById('dive')
let teachingHeader = document.getElementById('teaching')
let phoneSize = window.matchMedia('(max-width:760px)')

if(phoneSize.matches){
    communityHeader.textContent = 'OUR COMMUNITIES'
}

if(phoneSize.matches){
    teachingHeader.textContent = 'WHAT WE TEACH'
}

console.log(reviews)
