require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const courseRoutes = require("./routes/courseRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Course API Running");
});

app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});