import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return(

    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    <h1>check</h1>

    </BrowserRouter>

    
  );
}

export default App;