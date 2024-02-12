
//Adding event listener when clciked, getting the data-speed element/attribute 
document.addEventListener('mouse-move', move);
function move(e){
    //returning css element with move & and returns data-speed from html
    this.querySelectorAll('move').forEach(layer =>{ //layer is the current element used
        const speed = layer.getAttribute('data-speed') //Note Kaila: For loop is another way to do this, so if this doesnt work then change to for
    
        const x =
    })

}

//Gasp animation (CDN)
//Taking the html elements into js
gsap.from('.logo', { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from('.navbar .nav_item', { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2 });

gsap.from('.title', { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from('.desc', { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from('.btn', { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from('.image', { opacity: 0, duration: 1, delay: 2.1, y: 30 });

