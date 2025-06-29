import { Router } from "express";
import { db } from "../db/init";

const router = Router();
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "supersecret";

router.get("/", async (_req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM jobs ORDER BY posted_at DESC");
    res.json(rows);
  } catch {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

router.post("/", async (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${ADMIN_TOKEN}`) return res.sendStatus(401);

  const { title, description } = req.body;
  if (!title || !description)
    return res.status(400).json({ error: "Missing fields" });

  try {
    await db.query("INSERT INTO jobs (title, description) VALUES (?, ?)", [
      title,
      description,
    ]);
    res.status(201).json({ success: true });
  } catch {
    res.status(500).json({ error: "Failed to create job" });
  }
});

router.delete("/:id", async (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${ADMIN_TOKEN}`) return res.sendStatus(401);

  try {
    await db.query("DELETE FROM jobs WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Failed to delete job" });
  }
});

export default router;
