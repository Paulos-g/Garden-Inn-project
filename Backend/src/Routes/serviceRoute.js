import express from "express";
import { getService, postService } from "../Controllers/serviceController.js";
import { protect } from "../Middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getService);
router.post("/post/service", postService);
// router.get("/:id", getServiceById);
// router.delete("/:id", deletService);

export default router;
