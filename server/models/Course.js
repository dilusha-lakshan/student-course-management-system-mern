const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseCode: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    lecturer: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;