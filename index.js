require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Middleware para parsear JSON
app.use(express.json());

// llamo a las routes
// const productosparams = require("./backend/src/routes/productos_routes");
// app.use("/productos", productosparams);


// Servir archivos estáticos desde la carpeta 'front'
app.use(express.static(path.join(__dirname, './frontend')));

// Rutas API
app.use('/productos', require('./backend/src/routes/productos_routes'));


// Puerto de escucha
const PORT = process.env.PORT || 8080;
app.listen(PORT,() => console.log(`http://localhost:${PORT}`));