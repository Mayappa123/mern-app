import express from "express";
import {
  getStudent,
  newStudent,
  deleteStudent,
  updateStudent,
  editStudent
} from "../controller/student.js";

const router = express.Router();

router.get("/", getStudent);
router.post("/new", newStudent);
router.get("/:id", deleteStudent);
router.put("/update/:id", updateStudent);
router.get("/edit/:id", editStudent);

export default router;
