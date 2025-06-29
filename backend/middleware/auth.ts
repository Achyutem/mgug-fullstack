import { Request, Response, NextFunction } from "express";

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  console.log("🔐 Middleware check:", auth);

  if (!auth || auth !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    console.log("❌ Unauthorized");
    return res.status(403).json({ error: "Unauthorized" });
  }

  console.log("✅ Authorized");
  next();
}
