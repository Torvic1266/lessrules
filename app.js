const express=require("express");
let rutasProductos = require("./routes/productos");
let rutasMain =require("./routes/main");
const { dirname } = require("path");
const path =require("path");
const app = express();

const publicFolderPath = path.resolve(__dirname, "./public");
app.use( express.static(publicFolderPath));

app.listen(3000,() => {
    console.log("servidor corriendo en el puerto 3000")
});

app.use("/productos", rutasProductos);
app.use("/", rutasMain);

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
    
});
 