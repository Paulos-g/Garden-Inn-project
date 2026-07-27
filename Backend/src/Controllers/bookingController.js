import express from "express";
import Booking from "../Models/Booking.js";

export const getBooking = async (req, res) => {
  try {
    const bookingStatus = await Booking.find();
    res.json(bookingStatus);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
    console.error("Error Happend: ", error);
  }
};

export const createBooking = async (req, res) => {
  try {
    const { roomName, checkIn, checkOut, guests } = req.body;
    const newBooking = new Booking({ roomName, checkIn, checkOut, guests });
    await newBooking.save();
    res.status(200).json({ message: "Booked Succesfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.error("Error", error);
  }
};
