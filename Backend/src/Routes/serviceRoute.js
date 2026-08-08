import express from "express";
import { getService, postService } from "../Controllers/serviceController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { isAdmin } from "../Middleware/isAdminMiddleware.js";
const router = express.Router();

router.get("/", protect, isAdmin, getService);
router.post("/post/", protect, postService);
// router.get("/:id", getServiceById);
// router.delete("/:id", deletService);

export default router;
