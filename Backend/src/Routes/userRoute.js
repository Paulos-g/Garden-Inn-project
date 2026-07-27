import express from "express";
import {
  getUsers,
  registerUser,
  updateUser,
  deletUser,
  getUserById,
} from "../Controllers/userController.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/register", registerUser);
router.put("/:id", updateUser);
router.delete("/:id", deletUser);

export default router;
