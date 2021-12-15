
const slider = document.querySelector("#slider"); 
let seccionSlider = document.querySelectorAll(".seccion_slider"); 
let sliderSectionLast = seccionSlider[seccionSlider.length -1]; 

const botonI = document.querySelector("#botonI"); 
const botonD = document.querySelector("#botonD"); 

slider.insertAdjacentElement('afterbegin', sliderSectionLast); 

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".seccion_slider")[0]; 
    slider.style.marginLeft = "-200%"; 
    slider.style.transition = "all 0.5s"; 
    setTimeout(function() {
        slider.style.transition = "none"; 
        slider.insertAdjacentElement('beforeend', sliderSectionFirst); 
        slider.style.marginLeft = "-100%"; 
    }, 500); 
}

function Prev() {
    let seccionSlider = document.querySelectorAll(".seccion_slider");
    let sliderSectionLast = seccionSlider[seccionSlider.length -1]; 
    slider.style.marginLeft = "0"; 
    slider.style.transition = "all 0.5s"; 
    setTimeout(function() {
        slider.style.transition = "none"; 
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); 
        slider.style.marginLeft = "-100%"; 
    }, 500); 
}

botonD.addEventListener('click', function() {
    Next(); 
}); 

botonI.addEventListener('click', function() {
    Prev(); 
}); 

setInterval(function() {
    Next(); 
}, 4000); //cada 5 segundos
