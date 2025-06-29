import dotenv from "dotenv";
dotenv.config();

console.log("✅ Server is starting...");

import express from "express";
import cors from "cors";
import jobsRouter from "./routes/jobs";
import newsRouter from "./routes/news";
import galleryRouter from "./routes/gallery";
import path from "path";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/jobs", jobsRouter);
app.use("/api/news", newsRouter);
app.use("/api/gallery", galleryRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
  console.log("🔐 ADMIN_TOKEN is:", process.env.ADMIN_TOKEN || "(not set)");
});
