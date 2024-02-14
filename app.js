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


function Siguiente(){
    document.getElementById("carrousel_main").style.display = "block";
    document.getElementById("anterior").style.display = "block";

    document.getElementById("carta").style.display = "none";
    document.getElementById("avanzar").style.display = "none";


}

function Anterior(){
    document.getElementById("carrousel_main").style.display = "none";
    document.getElementById("anterior").style.display = "none";

    document.getElementById("carta").style.display = "block";
    document.getElementById("avanzar").style.display = "block";


}