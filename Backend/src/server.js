import express from "express";

const app = express();

const PORT = 8383;
app.get("/", (req, res) => {
  console.log("HEllo from backend", req.method);
  res.sendStatus(201);
});
app.listen(PORT, () => console.log(`server has started on port: ${PORT}`));
