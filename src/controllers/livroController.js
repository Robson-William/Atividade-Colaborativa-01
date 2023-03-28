import * as Livro from "../models/Livro.js";

const criar = async (req, res) => {
  let livro = req.body;

  let livroSalvo = await Livro.createBook(livro);

  res.redirect("listar");
};

const listar = async (req, res) => {
	let livros = await Livro.list();

	res.render("pages/index", {livros})
};

const buscar = async (req, res) => {
  let {id} = req.query;

	let livro = await Livro.search(id);
	console.log(livro);
	res.render("pages/buscar", {livro})
};

const atualizar = async (req, res) => {
	let {id} = req.params;
  let {titulo, dataDeLancamento} = req.body;

	let dados = {titulo, dataDeLancamento};
	let busca = await Livro.search(id);

	let livroAtualizado = await Livro.update(busca, dados);

	res.json(livroAtualizado);
};

const deletar = async (req, res) => {
  let {id} = req.params;

	let livro = await Livro.search(id);
	let livroDeletado = await Livro.deletar(livro);

	res.redirect("/livros/listar");
};

export { criar, listar, buscar, atualizar, deletar };
