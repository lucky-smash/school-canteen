import { Link } from "react-router-dom";
import StudentCard from "../components/StudentCard";

function Students({ students }) {
  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Students</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <Link
            key={student.id}
            to={`/students/${student.id}`}
            className="block hover:scale-[1.02] transition" // wrapping Link around StudentCard
          >
            <StudentCard student={student} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Students;

