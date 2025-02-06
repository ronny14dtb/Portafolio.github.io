/*  Tipos de coonsole.log

console.log("Holiwis desde Prueba2.js");
console.warn("fallas en tus nalgas");
console.error("Error en tus nalgas");
console.info("Información de tus nalgas");
console.table([1,2,3,4,5,6,7,8,9,10]);


*/

/*
// Modulo process

console.log(process);   //muestra información del proceso
console.log(process.argv); //muestra los argumentos que se pasan al ejecutar el archivo
console.log(process.argv[0]);   //muestra la ruta del archivo
console.log(process.env); //muestra las variables de entorno
console.log(process.env.HOME); //muestra la ruta de la carpeta del usuario
console.log(process.env.PATH); //muestra la ruta de los archivos
console.log(process.env.USER); //muestra el nombre de usuario
console.log(process.env.USERNAME); //muestra el nombre de usuario
console.log(process.env.SHELL); //muestra la terminal que se esta usando
console.log(process.env.PWD); //muestra la ruta del directorio actual
console.log(process.env.OS); //muestra el sistema operativo
console.log(process.env.OS); //muestra el sistema operativo

*/


// modulo os

/*

const  os = require('os'); //importamos el modulo os

console.log(os.type()); //muestra el sistema operativo

console.log(os.homedir()); //muestra la ruta de la carpeta del usuario

console.log(os.uptime()); //tiempo que lleva encendido el sistema

console.log(os.userInfo()); muestra info del usuario

*/


//Modulo timers

/*

function mostrarTeam(tema) {
    console.log("estoY aprendiendo: " + tema);
}

mostrarTeam("Nodejs"); //estoY aprendiendo: CursoNj

setTimeout(mostrarTeam, 3000, "node Js"); muestra el codigo en ms con retrass
setImmediate(mostrarTeam, "Holiwis"); muestra el codigo después 

console.log("hola pedro sanchez");

setInterval(mostrarTeam, 2500, "Pedrito pedrito") Muestra el codigo cada ms mencionado hasta que se detenga



*/



/*
const fs = require("fs");

Lee el archivo

//fs.readFile("index.html", "UTF-8", (err, contenido)=>{

//    if(err){
//       throw err;
//   } 
//    console.log(contenido);

//});

cambia el nombre del archivo

fs.rename("index.html", "Main.html", (err)=> {
    if (err) {
        throw err;
    }
    console.log("nuevo nombre cambiado");
});

Agrega datos al final


fs.appendFile("Main.html", "<p>Aquí ta</p>", (err)=>{
    if (err){
        throw err;
    }
    console.log("se agregó")
})

Escribe datos y reemplaza todo lo demás

fs.writeFile("Main.html", "<p> perrita sucia </p>", (err)=>{
    if (err){
        throw err;

    }

    console.log("Contenido reemplazado")

})


fs.unlink("Main.html", (err) => {
    if (err) {
        throw err;

    }

    console.log("Contenido reemplazado")

});



Estas no van en orden pero si quieres que sí pones al final del módulo el nombre Sync de sincrónica

unlinkSync---
*/




/*

const curso = require ("./My_Package/curso.json");             se llama el paque json

    console.log(curso.title);



let infoCurso = {
    "titulo": "Casas el cura",
    "tema": "Pedro sanchez",
    "odio": 445545,
    "hijos": ["Bruno", "Manchas", "Jack"]                           se convierte un objeto js a json
} 

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(typeof infoCursoJSON);                                            Se llaman y se convierte
console.log(infoCursoJSON);


let infoCurosObjeto = JSON.parse(infoCursoJSON);

console.log(infoCurosObjeto);                                                       Se cambia de json a js
console.log(typeof infoCurosObjeto);
console.log(infoCurosObjeto.titulo)

*/