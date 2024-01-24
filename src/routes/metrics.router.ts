import express = require("express");
import MetricsController from "../controllers/metrics.controller";
import axios from 'axios';
import { error } from "console";

const router = express.Router();

router.post("/", async (req, res) => {
    const controller = new MetricsController();
    const response = await controller.getMetrics(req.body);

    axios.post('http://localhost:8081/receiveMetrics', { response })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

    return res.send(response);
});

export default router;