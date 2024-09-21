burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('ht-nav-resp');
    rightNav.classList.toggle('v-nav-resp');
    navList.classList.toggle('v-nav-resp');
})