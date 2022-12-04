let express =require("express");

let router = express.Router();

const mainController = require("../controllers/mainController");
 
 router.get("/productos" , mainController.productos);


module.exports = router;

//router.get("/productos", function(req,res){
   // res.send ("Nuestros productos")
 //});