import express from "express";
import * as greetingController from "../controllers/greetingController.js";

const router = express.Router();

router.get("/", greetingController.greetingController);

export default router;
