const { response } = require("express")

document.addEventListener("DOMContentLoaded", () => {
    fetch('/productos')
        .then(response => response.json())
        .then(data => {
            //la data es un array de productos 
            const productosContainer = document.getElementById("#Productos");
            productosContainer.innerHTML="";//limpiamos el contenedor antes de agregar
            
            data.forEach(producto => {
                const productoElement = document.createElement('div');
                productoElement.innerHTML=`
                    <img src="${producto.imagenUrl}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <span>${producto.precio}</span>
                `;
                productosContainer.appendChild(productoElement);
            });
        })

        .catch(error => console.error('Error al cargar los productos:', error));
})