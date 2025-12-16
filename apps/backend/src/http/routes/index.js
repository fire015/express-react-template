const express = require("express");
const router = express.Router();
const healthController = require("../controllers/health");
const errorHandler = require("../middleware/error");

router.get("/health", healthController.healthCheck);
router.use(errorHandler);

module.exports = router;
