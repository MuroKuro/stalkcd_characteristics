import express = require("express");
import MetricsController from "../controllers/metrics.controller";

const router = express.Router();
let message: string = 'Hello World';
console.log(message);

router.post("/", async (req, res) => {
    const controller = new MetricsController();
    const response = await controller.getMetrics(req.body);
    return res.send(response);
});

export default router;