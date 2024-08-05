import express from "express";
import {
  getStudent,
  newStudent,
  deleteStudent,
  updateStudent,
  editStudent,
} from "../controller/student.js";

const router = express.Router();

router.get("/", getStudent);
router.post("/new", newStudent);
router.put("/update/:id", updateStudent);
router.get("/edit/:id", editStudent);
router.delete("/delete/:id", deleteStudent);

export default router;
