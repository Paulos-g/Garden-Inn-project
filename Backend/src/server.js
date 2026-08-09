import express from "express";
import userRoute from "./Routes/userRoute.js";
import bookingRoute from "./Routes/bookingRoute.js";
import serviceRoute from "./Routes/serviceRoute.js";
import restaurantRoute from "./Routes/restaurantRoute.js";
import connectDB from "./config/db.js";
import { setServers } from "node:dns/promises";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config(); // to make the env key work here

try {
  setServers(["1.1.1.1", "8.8.8.8"]); // used because the DNS resolver of windows is unable to resolve the mongodb domain.
} catch (err) {
  console.warn("DNS setServers warning:", err.message);
}

const app = express();

const allowedOrigins = [
  "https://garden-inn-project.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

// Middleware that allows the express backend to read the json sent by the frontend used for registration form
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin.replace(/\/$/, ""))) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

connectDB();

const PORT = process.env.PORT;

app.use("/api/user", userRoute);
app.use("/api/book", bookingRoute);
app.use("/api/service", serviceRoute);
app.use("/api/tables", restaurantRoute);

app.get("/", (req, res) => {
  console.log("Hello from backend", req.method);
  res.sendStatus(201);
});

app.listen(PORT, () => console.log(`server has started on port: ${PORT}`));
