import express from "express";
import * as editoraController from "../controllers/editoraController.js"

const router = express.Router();

router.post("/criar", editoraController.create);
router.get("/listar", editoraController.list);
router.get("/buscar/:id", editoraController.search)
router.put("/atualizar/:id", editoraController.update)
router.delete("/deletar/:id"), editoraController.deletar;

export {router};
