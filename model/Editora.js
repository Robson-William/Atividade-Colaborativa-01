import sequelize from "../database/db";

const Editora = sequelize.define("Editora", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  localDeOrigem: {
    type: DataTypes.STRING,
  },
  nomeFantasia: {
    type: DataTypes.STRING,
  },
});

module.exports = Editora;
