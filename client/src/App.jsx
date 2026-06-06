import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddCourse from "./pages/AddCourse";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/add-course"
          element={<AddCourse />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;