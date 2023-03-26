import express from "express";
import * as livroController from '../controllers/livroController.js';

const router = express.Router();

router.post("/create", livroController.create);
router.get("/list", livroController.list);
router.get("/search/:id", livroController.search)
router.put("/update/:id", livroController.update)
router.delete("/delete/:id", livroController.deletar);

export {router};
