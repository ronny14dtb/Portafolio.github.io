//Carta con corazones

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
   
});

// botones de avanzar y retroceder

let secciones = ["parte1", "parte2", "carta"]; // IDs de las secciones
let indiceActual = 0; // Empezamos en la primera sección (parte1)
document.getElementById(secciones[indiceActual]).style.display = "block";

function cambiarSeccion(direccion) {
    // Ocultar la sección actual
    document.getElementById(secciones[indiceActual]).style.display = "none";

    // Actualizar el índice
    indiceActual += direccion;

    // Si nos salimos del rango, regresamos al extremo opuesto
    if (indiceActual < 0) indiceActual = secciones.length - 1;
    if (indiceActual >= secciones.length) indiceActual = 0;

    // Mostrar la nueva sección
    document.getElementById(secciones[indiceActual]).style.display = "block";
}


//Nuevo carrousel 


var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()



// Audio

let audio = document.getElementById("audio");
let playPauseBtn = document.getElementById("play-pause-btn");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = "⏹️"; // Cambia el icono a stop
    } else {
        audio.pause();
        audio.currentTime = 0; // Reinicia el audio
        playPauseBtn.innerHTML = "▶️"; // Cambia el icono a play
    }
}
