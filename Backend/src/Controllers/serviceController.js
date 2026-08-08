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

export const postService = async (req, res) => {
  try {
    const { serviceName, guest, date } = req.body;
    const newService = new Service({
      user: req.user.id,
      serviceName,
      guest,
      date,
    });
    await newService.save();
    res.status(200).json({ message: "Service created succesfully" });
  } catch (error) {
    console.error("Error: ", error);

    res.status(500).json({ Error: "INTERNAL SERVER ERROR" });
  }
};
