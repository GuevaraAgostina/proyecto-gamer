const express = require("express");
const router = express.Router();

const controller = require('../controllers/productos_controller');
//prefijo /productos
router.get("/",controller.index);
// prefijo /id
router.get("/:id", controller.show);



module.exports = router;