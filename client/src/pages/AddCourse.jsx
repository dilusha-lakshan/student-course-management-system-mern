import { useState } from "react";
import { createCourse } from "../services/courseService";

function AddCourse() {
  const [formData, setFormData] = useState({
    courseCode: "",
    courseName: "",
    lecturer: "",
    semester: "",
    credits: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createCourse(formData);

    alert("Course Added!");

    setFormData({
      courseCode: "",
      courseName: "",
      lecturer: "",
      semester: "",
      credits: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">
        Add Course
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="courseCode"
          placeholder="Course Code"
          value={formData.courseCode}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="lecturer"
          placeholder="Lecturer"
          value={formData.lecturer}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="semester"
          placeholder="Semester"
          value={formData.semester}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="credits"
          placeholder="Credits"
          value={formData.credits}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          className="
          bg-blue-600
          text-white
          px-4
          py-2
          rounded"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCourse;