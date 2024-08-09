require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Middleware para parsear JSON
app.use(express.json());

// llamo a las routes


// Puerto de escucha
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => console.log(`http://localhost:${PORT}`));