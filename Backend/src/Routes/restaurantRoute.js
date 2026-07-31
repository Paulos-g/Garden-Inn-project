import express from "express";
import {
  reserveTable,
  getRestaurant,
} from "../Controllers/restaurantController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { isAdmin } from "../Middleware/isAdminMiddleware.js";

const router = express.Router();

router.get("/info", protect, isAdmin, getRestaurant); // it passes through protect and isAdmin
router.post("/reserve", protect, reserveTable); //middlewares to check the user is Authenticated

export default router;
