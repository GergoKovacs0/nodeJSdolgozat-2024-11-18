import express from "express";
import * as expressController from "../controllers/expressController.js";

const router = express.Router();

router.get("/", expressController.expressController);

export default router;
