import express from "express";
import User from "../Models/User.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config(); // to make the env key work here

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
    const theUser = await User.findById(req.params.id).select("-password");
    if (!theUser) return res.status(404).json({ message: "User Not Found!!!" });
    res.json(theUser);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
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
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRETE, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "REGISTERING ERROR", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }
    // if (!email || !(await bcrypt.compare(password))) {
    //   return;
    //   res.status(401).json({ message: "Invalid Creditentials" });
    // }

    const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRETE, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "Logged in successfully",
      user: {
        id: userExists._id,
        firstName: userExists.firstName,
        lastName: userExists.lastName,
        email: userExists.email,
      },
    });
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).json({ message: "LOGIN ERROR" });
  }
};

export const logOutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    res.status(200).json({
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "LOGOUT ERROR" });
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
