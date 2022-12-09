  let express = require("express");
  const mainController = require("../controllers/mainController");
   // let productosController = require("../controllers/productosController");
  let router = express.Router();

//   router.get("/:idProducto", productosController.detalle);
  
   //   router.get("/:idProducto/comentarios/:idComentario?", productosController.detalleComentarios );

       

  router.get("/productos" , mainController.productos);
  router.get("/list" , mainController.list);

  module.exports = router;