import { Pool } from "pg";

const pool = new Pool({
  user: "user",
  host: "host",
  database: "database",
  password: "password",
  port: 5432,
});

export default pool;
