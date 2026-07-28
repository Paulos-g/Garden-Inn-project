import express from "express";
import { getService } from "../Controllers/serviceController.js";
const router = express.Router();

router.get("/", getService);
// router.post("/post/service", postService);
// router.get("/:id", getServiceById);
// router.delete("/:id", deletService);

export default router;
