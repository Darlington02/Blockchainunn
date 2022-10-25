let header = document.querySelector('h1')
let phoneSize = window.matchMedia('(max-width:760px)')

if(phoneSize.matches){
    header.textContent = 'LEADERSHIP AND TEAM'
}