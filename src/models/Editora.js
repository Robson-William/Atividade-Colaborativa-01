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

async function criarEditora(dados) {
  try {
    let editoraBuild = Editora.build(dados);
    let editora = await editoraBuild.save();
    return editora;
  } catch (e) {
    console.log(e);
  }
}

async function listar() {
  try {
    let listar = await Editora.findAll();

    return listar;
  } catch (e) {
    console.log(e);
  }
}

async function buscar(id) {
  try {
    let editora = await Editora.findByPk(id);

		if(editora === null){
			return {};
		} else {
			return editora;
		}
  } catch (e) {
    console.log(e);
  }
}

async function atualizar(editora, dados) {
	if(editora === null){
		return "Não é possivel atualizar. Editora inexistente!";
	} else {
		editora.set(dados);
		await editora.save();
		return editora;
	}
}

async function deletar(editora) {
	if(editora === null) {
		return 'Não é possivel excluir. Editora inexistente!';
	} else {
		await editora.destroy();
		return 'Editora deletado!';
	}
}

export { criarEditora, listar, buscar, atualizar, deletar };
