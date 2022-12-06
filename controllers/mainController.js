const db = require("./../database/models");
let mainController = {
  productos: (req, res) => {
     db.Producto.findAll().then((products) => {
     console.log(products)
     return res.render("productos", {
       productos: products
     });
      
    });
   
  },
  list: (req, res) => {
    let users = ["Dario", "Javier", "Maru", "Ale", "victor"];
    return res.render("userList", { users: users });
  },
};

module.exports = mainController;

// const db = require('../src/database/models');
// const productosController = {

//     listado: function(req,res) {
//        db.Productos.findAll()
//         .then(function(productos){
//             console.log(productos);
//             res.render('catalogo',{productos})
//         })
//     }

// };
