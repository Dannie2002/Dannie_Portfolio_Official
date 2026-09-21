let mouseX = 0; 
let mouseY = 0; 

const pointer = document.querySelector('.pointer');

window.addEventListener("mousemove", (e) => { 
    mouseX = e.clientX; 
    mouseY = e.clientY; 


    

pointer.style.setProperty('--mouseX', `${mouseX}px`);
pointer.style.setProperty('--mouseY', `${mouseY}px`);
});
