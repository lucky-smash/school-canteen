
// Mock order handler (can be extended to more complex logic)

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import SnackGrid from "./pages/SnackGrid.jsx";
import Students from "./pages/Students.jsx";

import { snacks as mockSnacks, students as mockStudents } from "./data/mockdata";

function App() {
  const [snacks , setSnacks] = useState(mockSnacks);
  const [students , setStudents] = useState(mockStudents);

  const orderSnack = (snackName) => {
    alert(`Ordering ${snackName}`);
  };


  return (
    <>
      <Navbar />

      <div className="p-6">
        <Routes>
          <Route path="/snacks" element={<SnackGrid snacks={snacks} onOrder={orderSnack} />} />
          <Route path="/students" element={<Students students={students} />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
