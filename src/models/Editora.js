import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

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

async function createEditora(dados) {
  try {
    let editoraBuild = Editora.build(dados);
    let editora = await editoraBuild.save();
    return editora;
  } catch (e) {
    console.log(e);
  }
}

async function list() {
  try {
    let list = await Editora.findAll();

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

export { createEditora, list, search, Editora };
