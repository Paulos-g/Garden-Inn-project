// Checks:

//Is the user logged in?

/*Request
  ↓
JWT token valid?
  ├── No → 401 Unauthorized
  └── Yes → Continue  */
// this is the main middleware
import express from "express";
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const storedToken = req.cookies.token; // imports the stored token from the browswer;

  if (!storedToken) {
    return res.status(401).json({ message: "User is not Authenticated" });
  }
  try {
    const decode = jwt.verify(storedToken, process.env.JWT_SECRETE);
    req.user = decode;
    next(); // hands control forward to the controller
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
    console.error("ERROR AT AUTHMIDDLEWARE", error);
  }
};
