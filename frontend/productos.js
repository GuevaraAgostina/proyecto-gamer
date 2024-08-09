

 document.addEventListener("DOMContentLoaded", () => {
     fetch('https://proyecto-gamer.vercel.app/productos')
         .then( res => res.json())
         .then( data => {

             const productosContainer = document.getElementById('productosContainer');
             productosContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

             data.results.forEach(producto => {
                 const productoElement = document.createElement('div');
                 productoElement.innerHTML = `
                     <h2>${producto.nombre}</h2>
                     <p>${producto.descripcion}</p>
                     <span>${producto.precio}</span>
                 `;
                 productosContainer.appendChild(productoElement);
             });
         })

/        .catch(error => console.error('Error al cargar los productos:', error));
 })



