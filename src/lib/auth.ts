import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;

if (!SECRET) {;
  throw new Error("JWT_SECRET não definido no .env");
}

export function signToken(payload: { id: number; email: string }) {
  return jwt.sign(payload, SECRET, { expiresIn: "1d" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET) as unknown as { id: number; email: string };
}