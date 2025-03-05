import express from "express";
import { getJob } from "../controller/jobController.js";
import { creatJob } from "../controller/jobController.js";
import { updeatJob } from "../controller/jobController.js";
import { getJobById } from "../controller/jobController.js";
import { removeJob } from "../controller/jobController.js";

const router = express.Router();

router.get("/", getJob);
router.post("/", creatJob);
router.put("/", updeatJob);
router.get("/:id", getJobById);
router.delete("/",removeJob);

export default router;
