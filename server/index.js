const express = require("express");
const cors = require("cors");
const employees = require("./employees.json");
const chat = require("./chat");

const app = express();
app.use(cors());
app.use(express.json());

// Employee list
app.get("/api/employees", (req, res) => {
  res.json(employees);
});

// Employee detail
app.get("/api/employees/:id", (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).json({ error: "Employee not found" });
  res.json(employee);
});

// AskHR chatbot
app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body;
    const answer = await chat(question);
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

