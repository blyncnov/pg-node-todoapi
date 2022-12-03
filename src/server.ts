import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

// MiddleWares
import { CheckAuth } from "./middlewares/checkAuth";

// Routes =>
import AuthRoutes from "./routes/auth";
import TodoRoutes from "./routes/todo";

// Initialize Express
const app: Express = express();

// Middlewares
dotenv.config();
app.use(cors({ origin: "*" }));
app.use(express.json());

// PORT
const PORT = process.env.PORT || 8080;

// Auth Routes
app.use("/api/v1/auth", AuthRoutes);

// Todo Routes
app.use("/api/v1/todo", CheckAuth, TodoRoutes);

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

// Listen to server
app.listen(PORT, () => {
  console.log(`[server] -- starting on PORT ${PORT}`);
});
