document.addEventListener("DOMContentLoaded", () => {
  const productosContainer = document.getElementById("productos-container");
  // Crear un objeto URLSearchParams con la parte de la URL que tiene los parámetros de consulta
  const params = new URLSearchParams(window.location.search);
  // Obtener el valor del parámetro 'id' de la URL
  const idCategoria = params.get("id");
  console.log(idCategoria);

  if (!idCategoria) {
    console.error("No se encontró un ID de categoría en la URL.");
    return;
  }

  // Función para crear el HTML de un producto
  function crearProductoHTML(producto) {
    return `


                <div id="Productos" class="items_products">
                    <div class="product">
                        <div class="image">
                        <a> ${producto.nombre}</a>
                        </div>
                        <div class="description">
                          <p>${producto.descripcion}</p>
                        </div>
                        <div class="ver">
                          <p>Precio: $${producto.precio}</p>
                        </div>
                    </div>
                </div>
                    
                        `;
  }

  // Petición a la API para obtener los productos
  fetch(`http://localhost:8080/productos/${idCategoria}`)
    .then((res) => res.json())
    .then((productos) => {
      let productosHTML = "";
      productos.forEach((producto) => {
        productosHTML += crearProductoHTML(producto);
      });

      productosContainer.innerHTML = productosHTML;
    })
    .catch((error) => console.error("Error al cargar los productos:", error));
});
