// Importando dependências
import express from "express";
import * as dotenv from "dotenv";
import router from './routes/index.js';

// Configurando
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

app.listen(process.env.API_PORT, () => console.log(`Aplicação rodando na porta ${process.env.API_PORT}`));
