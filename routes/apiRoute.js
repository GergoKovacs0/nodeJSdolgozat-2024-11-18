import express from "express";
import * as apiController from "../controllers/apiController.js";

const router = express.Router();

router.get("/users/:id", apiController.getUserById);
router.get("/users", apiController.allUsers);

router.post("/users", apiController.createUser);

router.put("/users/:id", apiController.updateUser);

router.delete("/users/:id", apiController.deleteUser);

export default router;
