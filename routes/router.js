import express from "express";
import mongoose from "../connection.js";

import { getNewsletterById } from "../controllers/controllers.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("API is running...");
});

router.get("/api/newsletter", async (req, res) => {
    res.send("Newsletter endpoint");
  });

router.get("/api/newsletter/:id", async (req, res) => {
  const newsletterEntry = await getNewsletterById(req.params.id);
  if (newsletterEntry !== null) {
    console.log(req.params.id);
    res.json(newsletterEntry);
    return
  }
  res.status(404).send('https://cat.404');
});

export default router;