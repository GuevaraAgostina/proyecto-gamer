document.addEventListener("DOMContentLoaded", ()=>{
    /*FUNCION PARA OBTENER LOS DATOS DE NUESTRA API USANDO fetch */

    fetch(`http://localhost:8080/productos`)
        .then(res => res.json() )
        .then(producto => console.log(producto));

})