import { Router } from "express";
import { db } from "../db/init";

const router = Router();
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "supersecret";

router.get("/", async (_req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM news ORDER BY published_at DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

router.post("/", async (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${ADMIN_TOKEN}`) return res.sendStatus(401);

  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ error: "Missing fields" });

  try {
    await db.query("INSERT INTO news (title, content) VALUES (?, ?)", [
      title,
      content,
    ]);
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to create news" });
  }
});

router.delete("/:id", async (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${ADMIN_TOKEN}`) return res.sendStatus(401);

  try {
    await db.query("DELETE FROM news WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Failed to delete news" });
  }
});

export default router;
