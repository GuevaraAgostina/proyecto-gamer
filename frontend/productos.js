document.addEventListener("DOMContentLoaded", ()=>{
    /*FUNCION PARA OBTENER LOS DATOS DE NUESTRA API USANDO fetch */

    const getcategorias = (idcategoria) => {
        fetch(`http://localhost:8080/productos/${idcategoria}`)
            .then(res => res.json() )//convierto la respuesta en json
            .then(producto => {
                console.log(producto.nombre);
                //iteraamos sobre los datos 
                
                

            });
    }

    getcategorias(2);

    
})
//quiero traer del html el elemento en donde se puede hacer click para crearle un evento cuando escuche click lo lleve a esa categoria
                



