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

async function criarLivro(dados) {
  try {
		let livro = await Livro.create(dados);

    return livro;
  } catch (e) {
    console.log(e);
  }
}

async function listar() {
  try {
    let listar = await Livro.findAll();
    return listar;
  } catch (e) {
    console.log(e);
  }
}

async function buscar(id) {
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

async function atualizar(livro, dados) {
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

export { criarLivro, listar, buscar, atualizar, deletar };
