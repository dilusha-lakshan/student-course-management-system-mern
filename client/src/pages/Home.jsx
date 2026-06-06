import { useEffect, useState } from "react";

import CourseCard from "../components/CourseCard";

import {
  getCourses,
  deleteCourse,
} from "../services/courseService";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);

    fetchCourses();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">
        Course List
      </h2>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-4"
      >
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;