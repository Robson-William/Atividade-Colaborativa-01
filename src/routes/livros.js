import express from "express";
import * as livroController from '../controllers/livroController.js';

const router = express.Router();

router.post("/create", livroController.create);
//router.get("/list");
//router.get("search")
//router.update("/update")
//router.delete("/delete");

export {router};
