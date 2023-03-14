import express from "express";
const app = express();

app.get("/", (req, res) => res.send("entrou"));

app.listen(process.env.API_PORT, () => console.log("rodando porta 3000"));
