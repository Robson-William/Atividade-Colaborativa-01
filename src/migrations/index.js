import {sequelize} from "../database/db.js";

export function up() {
	const { Livro, Editora } = sequelize.models;

	Editora.hasMany(Livro);
	Livro.belongsTo(Editora);
}
