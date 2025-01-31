import { pool } from "../config/db.js";

export async function findUserByEmail(email: string) {
  const [rows] = await pool.query("SELECT * FROM users WHERE emial = ?", [
    email,
  ]);

  return rows[0];
}

export async function createUser(user: {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}) {
  const { firstname, lastname, email, phone } = user;
  const [result] = await pool.query(
    "INSERT INTO users (firstname, lastname, email, phone) VALUES (?,?,?,?)",
    [firstname, lastname, email, phone]
  );
  return result.insertId;
}

export async function updateUserVerification(email: string) {
  await pool.query("UPDATE users SET is_verified = TRUE WHERE email = ?", [
    email,
  ]);
}
