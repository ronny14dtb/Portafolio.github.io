"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var morseCode = {
    A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
    I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
    Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
    Y: "-.--", Z: "--..", 1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
    6: "-....", 7: "--...", 8: "---..", 9: "----.", 0: "-----", " ": "/"
};
var reverseMorseCode = Object.fromEntries(Object.entries(morseCode).map(function (_a) {
    var key = _a[0], value = _a[1];
    return [value, key];
}));
function isMorse(text) {
    return /^[.\-/ ]+$/.test(text);
}
function textToMorse(text) {
    return text
        .toUpperCase()
        .split("")
        .map(function (char) { return morseCode[char] || ""; })
        .join(" ");
}
function morseToText(morse) {
    return morse
        .split(" ")
        .map(function (code) { return reverseMorseCode[code] || ""; })
        .join("");
}
function convertText(text) {
    if (isMorse(text)) {
        return morseToText(text);
    }
    else {
        return textToMorse(text);
    }
}
// Configurar readline para Node.js
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Pedir datos al usuario
rl.question("Escribe un texto o código Morse: ", function (userInput) {
    var result = convertText(userInput);
    console.log("Resultado: ".concat(result));
    rl.close();
});
