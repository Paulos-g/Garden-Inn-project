import express from "express";
import { getBooking, createBooking } from "../Controllers/bookingController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getBooking);
router.post("/booking", protect, createBooking);

export default router;
