import express from "express";
import { getBooking, createBooking } from "../Controllers/bookingController.js";

const router = express.Router();

router.get("/", getBooking);
router.post("/booking", createBooking);

export default router;
