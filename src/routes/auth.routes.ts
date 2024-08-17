import express from "express";
import { AuthController } from "../controllers/auth.controller";
import { isAuthenticated } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
router.post("/refresh-token", isAuthenticated, AuthController.refreshToken);
router.post("/logout", AuthController.logout);

export default router;
