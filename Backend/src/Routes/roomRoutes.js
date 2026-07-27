import express from "express";
import { roomController } from "../Controllers/roomController.js";

const router = express.Router();

router.get("/rooms", roomController);
router.post("/id:", roomController);
router.delete("/id:", roomController);

export default router;
