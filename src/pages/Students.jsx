import StudentCard from "../components/StudentCard.jsx";// single . means current folder double.. dot means parent folder

function Students({ students }) {
  return (
    <div>
      <h1 className='text-lg font-bold'>Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  )
}

export default Students

