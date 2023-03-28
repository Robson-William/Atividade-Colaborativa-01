// Importando dependências
import express from "express";
import * as dotenv from "dotenv";
import router from "./routes/index.js";
import nunjucks from "nunjucks";
import * as migrations from "./migrations/index.js";

// Configurando
const app = express();
dotenv.config();

migrations.up();

app.use(express.static('public'));
app.set("view engine", "html");
nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, () => console.log(`Aplicação rodando na porta ${3000}`));
