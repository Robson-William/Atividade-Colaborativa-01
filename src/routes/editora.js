import express from "express";

const router = express.Router();

router.post("/create");
router.get("/list");
router.get("search")
router.update("/update")
router.delete("/delete");

export {router};
