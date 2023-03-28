import * as Livro from "../models/Livro.js";
import * as Editora from "../models/Editora.js";

const criar = async (req, res) => {
  let livro = req.body;

  let livroSalvo = await Livro.criarLivro(livro);

	let editora = await Editora.buscar()

	livroSalvo.setEditora()

  res.json(livroSalvo);
};

const listar = async (req, res) => {
	let livros = await Livro.listarar();

	res.render("pages/index", {livros})
};

const buscar = async (req, res) => {
  let {id} = req.params;

	let livro = await Livro.buscar(id);

	res.json(livro);
};

const atualizar = async (req, res) => {
	let {id} = req.params;
  let {titulo, dataDeLancamento} = req.body;

	let livro = {titulo, dataDeLancamento};
	let busca = await Livro.buscar(id);

	let livroAtualizado = await Livro.atualizar(busca, livro);

	res.json(livroAtualizado);
};

const deletar = async (req, res) => {
  let {id} = req.params;

	let livro = await Livro.buscar(id);
	let livroDeletado = await Livro.deletar(livro);

	res.json(livroDeletado);
};

export { criar, listar, buscar, atualizar, deletar };
