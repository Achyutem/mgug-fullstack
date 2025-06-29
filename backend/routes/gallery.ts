import { Router } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { db } from "../db/init";

const router = Router();
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "supersecret";

const uploadPath = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadPath),
  filename: (_req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

router.get("/", async (_req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM gallery ORDER BY uploaded_at DESC"
    );
    res.json(rows);
  } catch {
    res.status(500).json({ error: "Failed to fetch gallery" });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${ADMIN_TOKEN}`) return res.sendStatus(401);

  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  try {
    await db.query("INSERT INTO gallery (filename) VALUES (?)", [
      req.file.filename,
    ]);
    res.status(201).json({ success: true });
  } catch {
    res.status(500).json({ error: "Failed to upload image" });
  }
});

router.delete("/:id", async (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${ADMIN_TOKEN}`) return res.sendStatus(401);

  try {
    const [rows]: any = await db.query(
      "SELECT filename FROM gallery WHERE id = ?",
      [req.params.id]
    );
    const image = rows[0];
    if (image?.filename) {
      fs.unlinkSync(path.join(uploadPath, image.filename));
    }

    await db.query("DELETE FROM gallery WHERE id = ?", [req.params.id]);
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Failed to delete image" });
  }
});

export default router;
