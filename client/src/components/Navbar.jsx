import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div
        className="
        max-w-6xl
        mx-auto
        flex
        justify-between"
      >
        <h1 className="font-bold text-xl">
          Course Manager
        </h1>

        <div className="space-x-4">
          <Link to="/">Home</Link>

          <Link to="/add-course">
            Add Course
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;