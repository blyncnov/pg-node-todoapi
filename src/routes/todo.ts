import express from "express";

// Routes Controllers
import {
  FetchAllTodo,
  FetchSingleTodo,
  AddNewTodo,
  EditTodo,
  DeleteTodo,
} from "../controllers/todo";

const router = express.Router();

// Fetch All Todo Routes
router.get("/", FetchAllTodo);

// Fetch Single Todo Routes
router.get("/:id", FetchSingleTodo);

// Add New Todo Routes
router.post("/", AddNewTodo);

// Edit Todo Routes
router.patch("/:id", EditTodo);

// Delete Todo Routes
router.delete("/:id", DeleteTodo);

export default router;
