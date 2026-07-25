import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(200);
  console.log("Api working succesfully");
});

export default router;
