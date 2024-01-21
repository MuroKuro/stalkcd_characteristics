import express = require("express");
import MetricsController from "../controllers/metrics.controller";

const router = express.Router();

router.post("/", async (req, res) => {
    const controller = new MetricsController();
    const response = await controller.getMetrics(req.body);
    console.log(response)
    return res.send(response);
});

export default router;