const express = require("express");

const router = express.Router();

const {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

//get all
router.get("/", getCourses);

//get one
router.get("/:id", getCourse);

//create
router.post("/", createCourse);

//update
router.put("/:id", updateCourse);

//delete
router.delete("/:id", deleteCourse);

module.exports = router;