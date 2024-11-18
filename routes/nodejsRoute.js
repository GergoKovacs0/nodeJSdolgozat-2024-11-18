import express from "express";
import * as nodejsController from "../controllers/nodejsController.js";

const router = express.Router();

router.get("/", nodejsController.nodejsController);

export default router;
