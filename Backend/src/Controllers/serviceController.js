import express from "express";
import Service from "../Models/Service.js";
export const getService = async (req, res) => {
  try {
    const serviceInfo = await Service.find();
    res.status(200).json(serviceInfo);
  } catch (error) {
    console.error("ERROR: ", error);
    res.status(200).json({ message: "INTERNAL SERVER ERROR" });
  }
};
