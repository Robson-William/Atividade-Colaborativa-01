import * as Editora from "../models/Editora.js";

const create = async (req, res) => {
  let editora = req.body;

  let editoraSalvo = await Editora.createEditora(editora);

  res.json(editoraSalvo);
};

const list = async (req, res) => {
	let editoras = await Editora.list();

	res.json(editoras);
};

const search = async (req, res) => {
  let {id} = req.params;

	let editora = await Editora.search(id);

	res.json(editora);
};

const update = async (req, res) => {
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

export { create, list, search, update, deletar };
