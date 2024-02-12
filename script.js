
//Adding event listener when clciked, getting the data-speed element/attribute 
document.addEventListener('mouse-move', move);
function move(e){
    //returning css element with move & and returns data-speed from html
    this.querySelectorAll('move').forEach(layer_speed =>{ //layer is the current element used
        const speed = layer_speed.getAttribute('data_speed') //Note Kaila: For loop is another way to do this, so if this doesnt work then change to for
    
        //speed for animation (X and Y)
        //calculation is very hard......
        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerWidth - e.pageY*speed)/120
    
        //Transform x and  y, moves it too the right
        layer_speed.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';

    })

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
