import express from "express";
import * as dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => res.send("entrou"));

app.listen(process.env.API_PORT, () => console.log(`Aplicação rodando na porta ${process.env.API_PORT}`));
