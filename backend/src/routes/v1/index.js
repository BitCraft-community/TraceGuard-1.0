const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const webhookRoutes = require("./webhookRoutes");

router.get("/health", (req, res) => {
    res.json({
        status: "success",
        version: "v1.0.0"
    });
});

router.use("/auth", authRoutes);
router.use("/webhooks", webhookRoutes);

module.exports = router;