let nextReview = document.getElementById('next')
let reviews = document.querySelectorAll('.card1')
let reviewMove = false


for(let i=0; i<reviews.length; i++){
nextReview.addEventListener('click', ()=>{ 
    if(reviewMove == false){
    reviews[i].style.cssText = 'transform: translateX(-120%); transition: 1s linear'
    reviewMove = true
}
if(reviewMove == true){
    reviews[i].style.cssText = 'transform: translateX(-220%); transition: 1s linear'
    reviewMove = false
}
})
}


console.log(reviews)
