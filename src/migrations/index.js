import {sequelize} from "../database/db.js";

export function up() {
	const { Livro, Editora } = sequelize.models;

	Editora.hasMany(Livro, {foreignKey: 'editoraId'});
	Livro.belongsTo(Editora, {foreignKey: 'editoraId'});

	sequelize.sync();
}
