

import express from "express"
import { CreateTask, Deletetask, EditTask, GetTask } from "../controller/task.js";
import isAuth from "../Helper/IsAuth.js";

const router = express.Router();


router.post("/post",isAuth,CreateTask);r
router.put("")


export default router;