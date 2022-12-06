module.exports = (sequelize, DataTypes) => {
  let alias = "Producto";
  let cols = {
    idproductos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      notNull: false,
      primaryKey: true,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      notNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      notNull: false,
    },

    precio: {
      type: DataTypes.STRING,
      notNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      notNull: false,
    },
  };
  let config = {
    tableName: "productos",
    timestamps: false,
  };
  const Producto = sequelize.define(alias, cols, config);

  return Producto;
};
