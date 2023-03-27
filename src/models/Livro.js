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

try {
  await Livro.sync();
  console.log("Sincronizado!");
} catch (e) {
  console.log(e);
}

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

async function search(id) {
  try {
    let livro = await Livro.findByPk(id);

    if (livro === null) {
      return {};
    } else {
      return livro;
    }
  } catch (e) {
    console.log(e);
  }
}

async function update(livro, dados) {
  if (livro === null) {
    return "Não é possivel atualizar. Livro inexistente!";
  } else {
    livro.set(dados);
    await livro.save();
    return livro;
  }
}

async function deletar(livro) {
  if (livro === null) {
    return "Não é possivel excluir. Livro inexistente!";
  } else {
    await livro.destroy();
    return "Livro deletado!";
  }
}

export { createBook, list, search, update, deletar };
