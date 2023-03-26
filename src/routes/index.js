import express from "express";
import {router as livrosRouter} from "./livros.js";
import {router as editoraRouter} from "./editora.js";

const router = express.Router();

router.use("/livros", livrosRouter);
router.use("/editora", editoraRouter);

export default router;
