import * as Editora from "../models/Editora.js";

const criar = async (req, res) => {
  let editora = req.body;

  let editoraSalvo = await Editora.criarEditora(editora);

  res.json(editoraSalvo);
};

const listar = async (req, res) => {
	let editoras = await Editora.listar();

	res.render("pages/index", {editoras})
};

const buscar = async (req, res) => {
  let {id} = req.params;

	let editora = await Editora.buscar(id);

	res.json(editora);
};

const atualizar = async (req, res) => {
	let {id} = req.params;
  let {titulo, dataDeLancamento} = req.body;

	let editora = {titulo, dataDeLancamento};
	let busca = await Editora.buscar(id);

	let editoraAtualizada = await Editora.atualizar(busca, editora);

	res.json(editoraAtualizada);
};

const deletar = async (req, res) => {
  let {id} = req.params;

	let editora = await Editora.buscar(id);
	let editoraDeletada = await Editora.deletar(editora);

	res.json(editoraDeletada);
};

export { criar, listar, buscar, atualizar, deletar };
