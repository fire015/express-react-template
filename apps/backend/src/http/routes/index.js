import express from "express";
import errorHandler from "../middleware/error.js";
import * as healthController from "../controllers/health.js";

const router = express.Router();

router.get("/health", healthController.healthCheck);
router.use(errorHandler);

export default router;
