const db = require("../data bases/db"); // traigo la conexion de la base de datos

// traigo productos
const index = (req, res) => {
     const sql = "SELECT * FROM productos";

        db.query(sql, (error, rows) => {
         if (error) {
             res.status(500).json({ error: 'Intente más tardeeeeee' });
         }

         res.json(rows);//devolvemos
     });
 };

 // traigo productos por el id de categoria
const show = (req, res) => {
    const { id } = req.params;

    // Asegúrate de que 'id' es un valor válido, y en caso contrario devuelve un error.
    if (!id) {
        return res.status(400).json({ error: "ID del producto es requerido" });
    }

    // Definir la consulta SQL
    const sql = 'SELECT * FROM productos WHERE id_categorias = ?'; // Asegúrate de que el nombre de la columna sea correcto

    // Ejecutar la consulta SQL
    db.query(sql, [id], (error, rows) => {
        if (error) {
            console.error('Error en la consulta:', error);
            return res.status(500).json({ error: 'Intente más tarde' });
        }

        // Verificar si se encontraron resultados
        if (rows.length === 0) {
            return res.status(404).json({ error: "No existe el producto" });
        }

        // Devolver los resultados encontrados
        res.json(rows); // devuelvo el array completo de productos
    });
};



module.exports = {
    index,
    show
};

