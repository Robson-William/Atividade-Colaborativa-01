import express from "express";
import * as livroController from "../controllers/livroController.js";

const router = express.Router();

router.post("/criar", livroController.criar);
router.get("/listar", livroController.listar);
router.get("/buscar/:id", livroController.buscar);
router.put("/atualizar/:id", livroController.atualizar);
router.delete("/deletar/:id", livroController.deletar);

export { router };
