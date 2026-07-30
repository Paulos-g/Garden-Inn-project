import express from "express";
import {
  getUsers,
  registerUser,
  updateUser,
  deletUser,
  getUserById,
  loginUser,
} from "../Controllers/userController.js";
import { protect } from "../Middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deletUser);

export default router;
