import express from "express";
import roomRoutes from "./Routes/roomRoutes.js";
import userRoute from "./Routes/userRoute.js";
import connectDB from "./config/db.js";
import { setServers } from "node:dns/promises";
import dotenv from "dotenv";

dotenv.config(); // to

setServers(["1.1.1.1", "8.8.8.8"]); // used because the DNS resolver of windows is unable to resolve the mongodb domain.

const app = express();

connectDB();

const PORT = process.env.PORT;

app.use("/api/rooms", roomRoutes);
app.use("/api/userform", userRoute);

app.get("/", (req, res) => {
  console.log("HEllo from backend", req.method);
  res.sendStatus(201);
});

app.listen(PORT, () => console.log(`server has started on port: ${PORT}`));
