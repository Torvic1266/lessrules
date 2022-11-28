const express=require("express");
const { dirname } = require("path");
const path =require("path");
const app = express();

const publicFolderPath = path.resolve(__dirname, "./public");
app.use( express.static(publicFolderPath));

app.listen(3000,() => {
    console.log("servidor funcionando")
})
app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
    
})
 
 app.get("/productos", function(req,res){
    res.send ("Nuestros productos")
 });