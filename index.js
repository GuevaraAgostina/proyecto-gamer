require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");//middleware para manejar solicitudes
const app = express();
const path = require("path");
const cors = require("cors");

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Middleware para parsear JSON
app.use(express.json());

//habilitar cors para todas las rutas
app.use(cors());

//los archivos json los transforma a objeto
app.use(bodyParser.urlencoded({extended:true}));

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