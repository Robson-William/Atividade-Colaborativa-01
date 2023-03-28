import express from "express";
import * as editoraController from "../controllers/editoraController.js"

const router = express.Router();

router.post("/criar", editoraController.criar);
router.get("/listar", editoraController.listar);
router.get("/buscar/:id", editoraController.buscar)
router.put("/atualizar/:id", editoraController.atualizar)
router.delete("/deletar/:id", editoraController.deletar);

export {router};