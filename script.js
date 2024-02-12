//Nav bar aparing when in responsive view
//Okay, for some reason, the animation isnt working
//uhhh, im tired and going to bed ;-;
let navbar = document.querySelector('.header .navbar' )

//When clicked on hamburger menu, nav menu pops up 
document.querySelector('#menu').onclick = () =>{
    navbar.classList.add('active');
}

//When clicked on hamburger menu, nav menu pops up 
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}




//Gasp animation (CDN)
//Taking the html elements into js
//calculation is very hard......
gsap.from('.logo', { opacity: 0, duration: 2, delay: 0, y: 10 });
gsap.from('.navbar .nav_item', { duration: 2, delay: 0.1, y: 10});
gsap.from('.title', { opacity: 0, duration: 2, delay: 0, y: 10 });
gsap.from('.desc', { opacity: 0, duration: 2, delay: 0, y: 10 });
gsap.from('.btn', { opacity: 0, duration: 2, delay: 0, y: 10 });
gsap.from('.image', { opacity: 0, duration: 2, delay: 0, y: 10 });
