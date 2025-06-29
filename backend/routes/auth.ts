import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../db/init";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretjwt";

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const [rows]: any = await db.query("SELECT * FROM users WHERE username = ?", [
    username,
  ]);
  const user = rows[0];
  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "8h" });
  res.json({ token });
});

// Middleware to protect routes
export function requireAuth(
  req: { headers: { authorization: any } },
  res: { sendStatus: (arg0: number) => void },
  next: () => void
) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) return res.sendStatus(401);
  jwt.verify(header.split(" ")[1], JWT_SECRET, (err: any) => {
    if (err) return res.sendStatus(401);
    next();
  });
}

export default router;
