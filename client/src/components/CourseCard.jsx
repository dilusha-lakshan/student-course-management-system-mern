function CourseCard({ course, onDelete }) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="font-bold text-lg">
        {course.courseName}
      </h3>

      <p>Code: {course.courseCode}</p>

      <p>Lecturer: {course.lecturer}</p>

      <p>Semester: {course.semester}</p>

      <p>Credits: {course.credits}</p>

      <button
        onClick={() => onDelete(course._id)}
        className="
        bg-red-500
        text-white
        px-3
        py-1
        rounded
        mt-2"
      >
        Delete
      </button>
    </div>
  );
}

export default CourseCard;