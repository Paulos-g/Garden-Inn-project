import express from "express";
import { roomController } from "../Controllers/roomController.js";

const router = express.Router();

router.get("/", roomController);

export default router;
