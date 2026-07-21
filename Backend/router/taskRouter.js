import express from "express"
const router = express.Router();

import {createTask, renameTask, deleteTask} from "../controller/taskController.js"

router.post("/",createTask)
router.put("/:id",renameTask)
router.delete("/:id",deleteTask)


export default router