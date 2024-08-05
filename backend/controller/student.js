import Student from "../models/student.js";

export const getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    if (!res.headersSent) {
      res.json({ message: "Internal Server Error" });
    }
  }
};

export const newStudent = async (req, res) => {
  try {
    console.log(req.body);
    const student = new Student(req.body);
    await student.save();
    res.json(student);
  } catch (error) {
    res.json(error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const student = await Student.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!student) {
      return res.json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.json({ message: "Error updating student data", error });
  }
};

export const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = Student.findById(id);
    console.log(student);
  } catch (error) {
    console.error("error in editing student data");
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    console.log(deletedStudent);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const searchStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
