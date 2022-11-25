const express=require("express");
const path =require("path");
const app = express();

app.listen(3000,() => {
    console.log("servidor funcionando")
})
app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
    
})
 
 app.get("/productos", function(req,res){
    res.send ("Nuestros productos")
 });