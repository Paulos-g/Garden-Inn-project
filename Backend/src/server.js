import express from "express";
import roomRoutes from "./Routes/roomRoutes.js";

const app = express();

const PORT = 8383;

app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => {
  console.log("HEllo from backend", req.method);
  res.sendStatus(201);
});

app.listen(PORT, () => console.log(`server has started on port: ${PORT}`));
