let express =require("express");

let router = express.Router();

router.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
    
})
 
 router.get("/productos", function(req,res){
    res.send ("Nuestros productos")
 });


module.exports = router;