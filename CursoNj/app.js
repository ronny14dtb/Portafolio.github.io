const curso = require ("./My_Package/curso.json");

    console.log(curso.title);



let infoCurso = {
    "titulo": "Casas el cura",
    "tema": "Pedro sanchez",
    "odio": 445545,
    "hijos": ["Bruno", "Manchas", "Jack"]
}

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(typeof infoCursoJSON);
console.log(infoCursoJSON);


let infoCurosObjeto = JSON.parse(infoCursoJSON);

console.log(infoCurosObjeto);
console.log(typeof infoCurosObjeto);
console.log(infoCurosObjeto.titulo)