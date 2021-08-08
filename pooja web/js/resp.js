burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
class = document.querySelector('.class')
rightNav = document.querySelector('.rightNav')
 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    class.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})