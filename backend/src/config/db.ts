import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Dio_joestar787",
  database: "gtp_ai_database",
});
