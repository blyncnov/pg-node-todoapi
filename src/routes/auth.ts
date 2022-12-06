import express from "express";

// MiddleWares
import { CheckAuth } from "../middlewares/checkAuth";

// Routes Controllers
import {
  LoginAuthController,
  SignUpAuthController,
  UsersAuthController,
  ForgotPasswordAuthController,
  ResetPasswordAuthController,
} from "../controllers/auth";

const router = express.Router();

// Users Routes
router.get("/profile", CheckAuth, UsersAuthController);

// Sign-Up Routes
router.post("/signup", SignUpAuthController);

// Sign-In Routes
router.post("/login", LoginAuthController);

// Forgot-Password Routes
router.post("/forgot-password", ForgotPasswordAuthController);

// Reset-Password Routes
router.post("/reset-password/:id/:token", ResetPasswordAuthController);

export default router;
