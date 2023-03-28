import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Livro } from "./Livro.js"

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

// Editora.hasMany(Livro);

try {
	await Editora.sync();
	console.log("Sincronizado!");
} catch(e) {
	console.log(e);
}

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

async function search(id) {
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

async function update(editora, dados) {
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

export { createEditora, list, search, Editora };
