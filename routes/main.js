let express =require("express");

let router = express.Router();


 
 router.get("/productos", function(req,res){
    res.send ("Nuestros productos")
 });


module.exports = router;