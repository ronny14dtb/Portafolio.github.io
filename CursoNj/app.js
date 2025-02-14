const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Importa path para manejar rutas correctamente

const app = express();

// Conectar a MongoDB
mongoose.connect("mongodb://darkdtb:password@monguito:27017/miapp?authSource=admin")
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("Error al conectar a MongoDB:", err));

// Definir esquema y modelo
const animalSchema = new mongoose.Schema({
    tipo: String,
    estado: String
});
const Animal = mongoose.model("Animal", animalSchema);

// Middleware para parsear JSON
app.use(express.json());

// Ruta para servir el archivo index.html
app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "Main.html"));
});

// Ruta para listar animales
app.get("/animales", async (_req, res) => {
    console.log("Listando...");
    const animales = await Animal.find();
    return res.json(animales);
});

// Ruta para crear un animal
app.post("/animales", async (req, res) => {
    console.log("Creando...");
    const nuevoAnimal = await Animal.create(req.body);
    return res.json(nuevoAnimal);
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
