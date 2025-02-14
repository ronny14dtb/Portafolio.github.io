// Función para crear corazones flotando
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 1 + 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Generar corazones mientras carga
setInterval(createHeart, 500);

// Pantalla de carga
setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}, 5000);



function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);

// Función para crear fuegos artificiales sutiles
function createFirework() {
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 50 + "vh";
        firework.style.animationDuration = "1s";
        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

setInterval(createFirework, 2000);


const video = document.getElementById("Mivideo");
                        
video.addEventListener("loadedmetadata", function () {
  video.currentTime = 5; // Empieza desde el segundo 1
});



//cartas
document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', function () {
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach((closeBtn) => {
    closeBtn.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});






// Audio
window.onload = function () {
    const audio = document.getElementById('audio');
    const toggleButton = document.getElementById('toggleAudio');
    let isPlaying = false;

    toggleButton.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            toggleButton.textContent = '🔊';
        } else {
            audio.play();
            toggleButton.textContent = '🔇';
        }
        isPlaying = !isPlaying;
    });

    audio.onended = function () {
        toggleButton.textContent = '🔊';
        isPlaying = false;
    };
};




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

let secciones = ["parte2", "parte1", "carta"]; // IDs de las secciones
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



