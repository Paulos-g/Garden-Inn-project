import express from "express";
import roomRoutes from "./Routes/roomRoutes.js";
import userRoute from "./Routes/userRoute.js";
import bookingRoute from "./Routes/bookingRoute.js";
import serviceRoute from "./Routes/serviceRoute.js";
import connectDB from "./config/db.js";
import { setServers } from "node:dns/promises";
import dotenv from "dotenv";

dotenv.config(); // to

setServers(["1.1.1.1", "8.8.8.8"]); // used because the DNS resolver of windows is unable to resolve the mongodb domain.

const app = express();

connectDB();

// Middleware that allows the express backend to read the json sent by the frontend used for registration form
app.use(express.json());

const PORT = process.env.PORT;

// app.use("/api/rooms", roomRoutes);
app.use("/api/user", userRoute);
app.use("/api/book", bookingRoute);
app.use("/api/service", serviceRoute);

app.get("/", (req, res) => {
  console.log("Hello from backend", req.method);
  res.sendStatus(201);
});

app.listen(PORT, () => console.log(`server has started on port: ${PORT}`));
