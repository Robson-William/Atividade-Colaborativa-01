import {sequelize} from "../database/db.js";

export function up() {
	sequelize.sync();
}
