import express from "express";
import {
  getUsers,
  registerUser,
  updateUser,
  deletUser,
  getUserById,
  loginUser,
} from "../Controllers/userController.js";
import { protect } from "../Middleware/authMiddleWare.js";
import { isAdmin } from "../Middleware/isAdminMiddleware.js";
const router = express.Router();

router.get("/", protect, isAdmin, getUsers);
router.get("/:id", protect, isAdmin, getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deletUser);

export default router;
