/* Ejercicio 1 cofla necesita saber los detalles de su celular a comprar

class celulares {
    constructor(color, peso, rpd, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = rpd;
        this.resolucionCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }
    tomarFoto() {
        alert(`foto tomada en una resolucion de: ${this.resolucionCamara}`);
    }
    grabarVideo() {
        alert(`grabando video en una resolucion de: ${this.resolucionCamara}`);
    }
    mostrarInfo() {
        return `color: <b>${this.color}</b><br>
                peso: <b>${this.peso}</b><br>
                resolucion de pantalla: <b>${this.resolucionPantalla}</b><br>
                resolucion de camara: <b>${this.resolucionCamara}</b><br>
                memoria ram: <b>${this.ram}</b><br>`;
    }
}


class celularAltaGama extends celulares {
    constructor(color, peso, rpd, rdc, ram, rdce) {
        super(color, peso, rpd, rdc, ram);
        this.resolucionCamaraExtra = rdce;
    }
    grabarVideoLento() {
        alert("grabando video lento");
    }
    reconocimientoFacial() {
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama() {
        return this.mostrarInfo() + `resolucion de camara extra: ${this.resolucionCamaraExtra}`;
    }
}

celular1 = new celularAltaGama("rojo", "150g", "HD", "Full HD", "2GB", "4K");
celular2 = new celularAltaGama("azul", "160g", "Full HD", "4K", "3GB", "8K");



// celular1 = new celulares("rojo", "150g", "HD", "Full HD", "2GB");
// celular2 = new celulares("azul", "160g", "Full HD", "4K", "3GB");
// celular3 = new celulares("blanco", "140g", "Full HD", "2K", "1GB");



// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

// document.write(`
//    ${celular1.mostrarInfo()}<br>
//    ${celular2.mostrarInfo()}<br>
//    ${celular3.mostrarInfo()}<br>
//`);

document.write(`
    ${celular1.infoAltaGama()}<br><br>
    ${celular2.infoAltaGama()}<br><br>
`);

*/












/* Ejercicio 2 cofla necesita manejar las caracteristicas de su computadora o celular

class App{
    constructor(descargas, puntuacion, peso){

        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app encendida");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
    }
}

App1 = new App("1M", 5, "900MB");
App2 = new App("1M", 5, "100MB");
App3 = new App("1M", 5, "500MB");
App4 = new App("1M", 5, "100MB");

App1.instalar();
App1.abrir();
App1.cerrar();
App1.desinstalar();

document.write(`
    ${App1.appInfo()}<br><br>
    ${App2.appInfo()}<br><br>
    ${App3.appInfo()}<br><br>
    ${App4.appInfo()}<br><br>
`);
*/


/* Ejercicio 3 cofla necesita una calculadora

class Calculadora {
    constructor() {
        this.valor1 = 0;
        this.valor2 = 0;
    }
    sumar() {
        return this.valor1 + this.valor2;
    }
    restar() {
        return this.valor1 - this.valor2;
    }
    multiplicar() {
        return this.valor1 * this.valor2;
    }
    dividir() {
        return this.valor1 / this.valor2;
    }
    potencia() {
        return Math.pow(this.valor1, this.valor2);
    }
    raiz() {
        return Math.sqrt(this.valor1);
    }
    raizcubica() {
        return Math.cbrt(this.valor1);
    }
}

const miCalculadora = new Calculadora();
alert("que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4: division, 5: potencia, 6: raiz cuadrada, 7: raiz cubica");

if (operacion == 1) {
    miCalculadora.valor1 = parseInt(prompt("primer numero"));
    miCalculadora.valor2 = parseInt(prompt("segundo numero"));
    alert(`la suma es: ${miCalculadora.sumar()}`);
} else if (operacion == 2) {
    miCalculadora.valor1 = parseInt(prompt("primer numero"));
    miCalculadora.valor2 = parseInt(prompt("segundo numero"));
    alert(`la resta es: ${miCalculadora.restar()}`);
} else if (operacion == 3) {
    miCalculadora.valor1 = parseInt(prompt("primer numero"));
    miCalculadora.valor2 = parseInt(prompt("segundo numero"));
    alert(`la multiplicacion es: ${miCalculadora.multiplicar()}`);
} else if (operacion == 4) {
    miCalculadora.valor1 = parseInt(prompt("primer numero"));
    miCalculadora.valor2 = parseInt(prompt("segundo numero"));
    alert(`la division es: ${miCalculadora.dividir()}`);
} else if (operacion == 5) {
    miCalculadora.valor1 = parseInt(prompt("numero base"));
    miCalculadora.valor2 = parseInt(prompt("exponente"));
    alert(`la potencia es: ${miCalculadora.potencia()}`);
} else if (operacion == 6) {
    miCalculadora.valor1 = parseInt(prompt("numero"));
    alert(`la raiz es: ${miCalculadora.raiz()}`);
} else if (operacion == 7) {
    miCalculadora.valor1 = parseInt(prompt("numero"));
    alert(`la raiz cubica es: ${miCalculadora.raizcubica()}`);
} else {
    alert("no es una operacion valida");
}

document.write(`Tu resultado es:<br>
    Suma ${miCalculadora.sumar()}<br>
    Resta ${miCalculadora.restar()}<br>
    Multiplicar ${miCalculadora.multiplicar()}<br>
    Dividir ${miCalculadora.dividir()}<br>
    Potencia ${miCalculadora.potencia()}<br>
    Raiz cuadrada ${miCalculadora.raiz()}<br>
    Raiz cubica ${miCalculadora.raizcubica()}<br>
`);

*/





/*
// Ejercicio 4 es sobre los detalles de los alumnos en una clase, profesores y cantidad de clases que ven junto en cuales están

const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "juan", "cofla", "maria"],
        logica: ["Hernandez", "pedro", "juan", "cofla", "maria"],
        quimica: ["Rodriguez", "pedro", "juan", "cofla", "maria"],
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}
const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
    Los alumnos son:<b style="color:blue">${alumnos}</b><br><br>`);
} else {
    document.write("La informacion solicitada no existe");
}
}

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style="color blue">${alumno} esta inscrito en ${cantidadTotal} clases</b><br>
    Las clases en las que esta inscrito son:<b style="color:red">${clasesPresentes}</b><br><br>`;

 }

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));
document.write(cantidadDeClases("maria"));
document.write(cantidadDeClases("juan"));
document.write(cantidadDeClases("pepito"));

*/


/*
// Ejercicio 5 cofla necesita saber si es posible inscribirse en una clase pero si ya hay mas de 20 no dejaría


let materias = {
    fisica: ["perez", "pedro", "juan", "pepito", "cofla", "maria"],
    programacion: ["Dalto", "pedro", "juan", "cofla", "maria"],
    logica: ["Hernandez", "pedro", "juan", "cofla", "maria"],
    quimica: ["Rodriguez", "pedro", "juan", "cofla", "maria"]

}

const inscribir = (alumno, materia) => {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento <b>${alumno}</b> las clases de <b>${materia}</b> ya estan llenas<br><br>`);
    } else {
        personas.push(alumno);
        if (materia == "fisica") {
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }

        } else if (materia == "programacion") {
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }

        } else if (materia == "logica") {

            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }

        } else if (materia == "quimica") {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas

            }


        }

        document.write(`Felicidades <b>${alumno}</b> te has inscrito a la clase de <b>${materia}</b><br>`);
    }
}
document.write(`Materias:<br>
    Física: ${materias.fisica.join(", ")}<br>
    Programación: ${materias.programacion.join(", ")}<br>
    Lógica: ${materias.logica.join(", ")}<br>
    Química: ${materias.quimica.join(", ")}<br><br>`);

inscribir("cofla", "fisica");
inscribir("pedrito", "fisica");
inscribir("juanito", "fisica");
inscribir("pepito", "fisica");
inscribir("maria", "fisica");
inscribir("pedro", "fisica");
inscribir("juan", "fisica");
inscribir("pepe", "fisica");
inscribir("mariana", "fisica");
inscribir("pedra", "fisica");
inscribir("juana", "fisica");
inscribir("pepa", "fisica");
inscribir("mar", "fisica");
inscribir("ped", "fisica");
inscribir("ju", "fisica");
inscribir("pe", "fisica");
inscribir("m", "fisica");
inscribir("p", "fisica");
inscribir("j", "fisica");
inscribir("c", "fisica");
inscribir("cofla", "fisica");
inscribir("cofla", "fisica");
inscribir("cofla", "fisica");
inscribir("cofla", "fisica");
inscribir("cofla", "fisica");
inscribir("cofla", "fisica");


document.write(`<br>Materias después de inscripciones:<br>
    Física: ${materias.fisica.join(", ")}<br>
    Programación: ${materias.programacion.join(", ")}<br>
    Lógica: ${materias.logica.join(", ")}<br>
    Química: ${materias.quimica.join(", ")}<br>`);


*/





/*

//terminó el primer semestre y cofla no sabe si va a aprobar o no  pa lograrlo necesita:
//contar con almenos 90% de asistemcia, promedio >7  y >75% de tareas entregadas.  Solicitar datos  y decirle si aprueba o no, mostra en consola con estilos


let materias = {
    fisica: [90, 6, 3, "fisica"],
    matematicas: [84, 8, 2, "matematicas"],
    logica: [92, 8, 4, "logica"],
    quimica: [96, 8, 4, "quimica"],
    calculo: [91, 7, 3, "calculo"],
    programas: [89, 8, 3, "programas"],
    biologia: [85, 9, 3, "biologia"],
    bbdd: [93, 8, 4, "bbdd"],
    algebra: [94, 8, 4, "algebra"]
}

const asistemcia = () => {
    for (materia in materias) {
        let asistencias = materias[materia];
        if (asistencias[0] >= 90) {
            console.log(materias[materia][3]);
            console.log("%c Asistencia aprobada", "color:green");

        }else{
            console.log(materias[materia][3]);
            console.log("%c Asistencia reprobada", "color:red");
        }
    }

}

const promedio = () => {
    for (materia in materias) {
        let promedios = materias[materia];
        if (promedios[1] >= 7) {
            console.log(materias[materia][3]);
            console.log("%c Promedio aprobado", "color:green");

        }else{
            console.log(materias[materia][3]);
            console.log("%c Promedio reprobado", "color:red");
        }
    }

}

const trabajos = () => {
    for (materia in materias) {
        let tareas = materias[materia];
        if (tareas[2] >= 3) {
            console.log(materias[materia][3]);
            console.log("%c Tareas aprobadas", "color:green");

        }else{
            console.log(materias[materia][3]);
            console.log("%c Tareas reprobadas", "color:red");
        }
    }
}

asistemcia();
promedio();
trabajos();
*/



// cofla está organizando su semana
/*

let trabajos = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "30 minutos de trabajo practico";
let homework = "20 minutos de tareas del hogar";
let descanso = "15 minutos de descanso";

console.log("Tareas");
for (var i = 0; i < 14; i++) {
    if (i == 0) {
        console.group("Semana 1");

    }
    console.groupCollapsed("Dia " + (i + 1));
    console.log(trabajos);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.log(descanso);
    console.groupEnd();
    if (i == 6) {
        console.groupEnd();
        console.group("Semana 2");
    }

}

console.groupEnd();
console.groupEnd();

*/


// cofla se quedó encerrado porque se le rompió la llave, pero necesita ir urgente a la facultad porque no puede faltar  ni una 
// sola vez si quiere aprobar y ya no puede faltar y la puerta es antigua por lo que necesita una llave especial y la compra en linea




/*




const contenedor = document.querySelector(".flex-container");


const boton = document.querySelector(".send-button");
let valorAntiguo= boton.value;
boton.value = valorAntiguo.toUpperCase();

function crearLlave(nombre, modelo, precio) {
    img = "<img class='llave-u' src='https://cdn.pixabay.com/photo/2017/09/02/02/29/antique-key-2706188_1280.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h2>${modelo}</h2>`;
    precio = `<b>Precio: <b>${precio}</b></p>`;
    return [img, nombre, modelo, precio];
}

const changeHidden = (number) => {
    document.querySelector(".key-data").value=number;
}
let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {

    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10+30);
    let llave = crearLlave(`llave ${i}`, `modelo${ modeloRandom }`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click", () => {changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);

}
contenedor.appendChild(documentFragment);

*/


//cofla necesita una compu y compra una con medidas que le sirvan


let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

comprar= confirm(`Tu pantalla es de ${ancho} x ${alto} deseas comprar una computadora?`);

if(comprar){
    alert("Compra realizada con exito");
}else{
    alert("Compra cancelada");
}

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `protocolo: <b>${protocol}</b></br>`
html += `hostname: <b>${hostname}</b></br>`
html += `pathname: <b>${pathname}</b></br>`
html += `href: <b>${href}</b></br>`

document.write(html);