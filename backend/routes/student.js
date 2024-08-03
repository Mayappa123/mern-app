import express from "express";
import {
  getStudent,
  newStudent,
  deleteStudent,
} from "../controller/student.js";

const router = express.Router();

router.get("/", getStudent);
router.post("/new", newStudent);
router.delete("/:id", deleteStudent);

export default router;
