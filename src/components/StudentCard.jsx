function StudentCard({ student }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Class: {student.class}</p>
    </div>
  )
}

export default StudentCard
