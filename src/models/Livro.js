import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

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
    type: DataTypes.DATE,
  },
});

async function createBook(dados) {
  try {
    let livroBuild = Livro.build(dados);
    let livro = await livroBuild.save();

    return livro;
  } catch (e) {
    console.log(e);
  }
}

async function list() {
  try {
    let list = await Livro.findAll();

    return list;
  } catch (e) {
    console.log(e);
  }
}

async function search() {
  try {
    // Pra fazer
  } catch (e) {
    console.log(e);
  }
}

export { createBook, list, search };
