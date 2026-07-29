import express from "express";
import User from "../Models/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../config/jwt.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 }); // it showes the newest first by making -1.

    res.status(200).json(users);
  } catch (error) {
    console.error("Error in the controller:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const theUser = await User.findById(req.params.id);
    if (!theUser) return res.status(404).json({ message: "User Not Found!!!" });
    res.json(theUser);
  } catch (error) {
    res.json({ Error: "Server Error" });
    console.error("Error", error);
  }
};

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    const existingUser = await User.findOne({ email }); // checks if email already exists in db

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    const token = generateToken(newUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "INTERNAL SERVER ERROR", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({ message: "All feilds are required" });

      const userExists = await User.findOne({ email });
      if (!email || !(await user.matchPassword(password))) {
        return;
        res.status(401).json({ message: "Invalid Creditentials" });
      }
      res.status(200).json({ message: "LOGGED IN SUCCESFULLY" });
    }
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, phone, password } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
      firstName,
      lastName,
      phone,
      password,
    });
    res.status(200).json({ message: "UPDATED SUCCESFULLY" });
  } catch (error) {
    console.error("Error happend: ", error);
  }
};

export const deletUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "DELETED SUCCESFULLY" });
  } catch (error) {
    console.error("Error happend: ", error);
  }
};
