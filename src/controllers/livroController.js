import * as Livro from "../models/Livro.js";

const create = async (req, res) => {
  let livro = req.body;

  let livroSalvo = await Livro.createBook(livro);

  res.json(livroSalvo);
};

const list = async (req, res) => {
	let livros = await Livro.list();

	res.json(livros);
};

const search = async (req, res) => {
  let {id} = req.params;

	let livro = await Livro.search(id);

	res.json(livro);
};

const update = async (req, res) => {
	let {id} = req.params;
  let {titulo, dataDeLancamento} = req.body;

	let livro = {titulo, dataDeLancamento};
	let busca = await Livro.search(id);

	let livroAtualizado = await Livro.update(busca, livro);

	res.json(livroAtualizado);
};

const deletar = async (req, res) => {
  let {id} = req.params;

	let livro = await Livro.search(id);
	let livroDeletado = await Livro.deletar(livro);

	res.json(livroDeletado);
};

export { create, list, search, update, deletar };
