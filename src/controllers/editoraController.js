import * as Editora from "../models/Editora.js";

const criar = async (req, res) => {
  let editora = req.body;

  let editoraSalvo = await Editora.createEditora(editora);

  res.json(editoraSalvo);
};

const listar = async (req, res) => {
	let editoras = await Editora.list();

	res.render("pages/index", {editoras})
};

const buscar = async (req, res) => {
  let {id} = req.params;

	let editora = await Editora.search(id);

	res.json(editora);
};

const atualizar = async (req, res) => {
	let {id} = req.params;
  let {titulo, dataDeLancamento} = req.body;

	let editora = {titulo, dataDeLancamento};
	let busca = await Editora.search(id);

	let editoraAtualizada = await Editora.update(busca, editora);

	res.json(editoraAtualizada);
};

const deletar = async (req, res) => {
  let {id} = req.params;

	let editora = await Editora.search(id);
	let editoraDeletada = await Editora.deletar(editora);

	res.json(editoraDeletada);
};

export { criar, listar, buscar, atualizar, deletar };
