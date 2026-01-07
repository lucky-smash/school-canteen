function StudentCard({ student }) {
  return (
    <div className="flex flex-col items-center border p-4 rounded  hover:shadow-lg transition-shadow duration-300 hover:scale-105">
      <h2 className="font-bold">{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Class: {student.class}</p>
    </div>
  )
}

export default StudentCard
