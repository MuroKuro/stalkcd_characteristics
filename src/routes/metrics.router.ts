import express = require("express");
import MetricsController from "../controllers/metrics.controller";

const router = express.Router();


router.post("/", async (req, res) => {
    let message: string = 'Hello World';
    console.log(message);
    const controller = new MetricsController();
    const response = await controller.getMetrics(req.body);
    return res.send(response);
});

export default router;