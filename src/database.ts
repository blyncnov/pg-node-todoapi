import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todoapi",
  password: "blyncnov",
  port: 5432,
});

export default pool;
