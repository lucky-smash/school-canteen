import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import SnackGrid from "./pages/SnackGrid";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";

import { snacks as mockSnacks, students as mockStudents } from "./data/mockdata";

function App() {
  const [snacks] = useState(mockSnacks);
  const [students] = useState(mockStudents);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/snacks" />} />

          <Route path="/snacks" element={<SnackGrid snacks={snacks} />} />
          <Route path="/students" element={<Students students={students} />} />
          <Route path="/students/:id" element={<StudentDetail students={students} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;




