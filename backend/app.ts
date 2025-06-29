import express from "express";
import cors from "cors";
import newsRoutes from "./routes/news";
import jobsRoutes from "./routes/jobs";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/news", newsRoutes);
app.use("/api/jobs", jobsRoutes);

export default app;
