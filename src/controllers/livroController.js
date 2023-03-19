import * as Livro from "../models/Livro.js";

const create = async (req, res) => {
	let livro = req.body;

	let livroSalvo = await Livro.create(livro);

	res.json(livroSalvo);
}

const list = async (req, res) => {
	res.send("list");
}

const search = async (req, res) => {
	res.send("search");
}

const update = async (req, res) => {
	res.send("update");
}

const deletar = async (req, res) => {
	res.send("delete");
}

export {create, list, search, update, deletar};
