import express from "express";
import * as livroController from "../controllers/livroController.js";

const router = express.Router();

router.get("/criar", (req, res) => res.render("pages/registrar")) 
router.post("/criar", livroController.criar);
router.get("/listar", livroController.listar);
router.get("/buscar", livroController.buscar);
router.post("/atualizar/:id", livroController.atualizar);
router.get("/atualizar/:id", (req, res) => {
  res.render("pages/editar")
})
router.get("/deletar/:id", livroController.deletar);

export { router };