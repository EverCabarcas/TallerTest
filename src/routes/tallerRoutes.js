import express from "express";
import { createNewTask, deleteOneTask, getListOfTask, updateOneTask } from "../controllers/tallerControllers.js";
const router = express.Router();

router.get("/task", getListOfTask);

router.post("/task", createNewTask);

router.put("/task/:id", updateOneTask);

router.delete("/task/:id", deleteOneTask);

export default router;
