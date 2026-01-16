import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

const DB_FILE = "./db.json";

/* Utility Functions */
const readData = () => {
  const data = fs.readFileSync(DB_FILE, "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

/* 1️⃣ GET /students – Fetch all students */
app.get("/students", (req, res) => {
  const data = readData();
  res.status(200).json(data.students);
});

/* 2️⃣ POST /students – Add new student */
app.post("/students", (req, res) => {
  const { name, course, year } = req.body;

  if (!name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const data = readData();
  const newStudent = {
    id: Date.now(),
    name,
    course,
    year,
  };

  data.students.push(newStudent);
  writeData(data);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent,
  });
});

/* 3️⃣ PUT /students/:id – Update student */
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, course, year } = req.body;

  const data = readData();
  const studentIndex = data.students.findIndex((s) => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students[studentIndex] = {
    ...data.students[studentIndex],
    ...(name && { name }),
    ...(course && { course }),
    ...(year && { year }),
  };

  writeData(data);

  res.status(200).json({
    message: "Student updated successfully",
    student: data.students[studentIndex],
  });
});

/* 4️⃣ DELETE /students/:id – Delete student */
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const data = readData();
  const studentExists = data.students.some((s) => s.id === id);

  if (!studentExists) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students = data.students.filter((s) => s.id !== id);
  writeData(data);

  res.status(200).json({ message: "Student deleted successfully" });
});

/* Server */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
