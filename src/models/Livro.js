import sequelize from "../database/db";

const Livro = sequelize.define("Livro", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataDeLancamento: {
    type: DataTypes.Date,
  },
});

export {Livro};
