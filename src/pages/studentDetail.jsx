import { useParams , Link } from "react-router-dom";
import { students } from "../data/mockdata";

function StudentDetail() {
  const { id } = useParams();
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return <p className="p-6">Student not found</p>;
  }

  return (
    <div className="p-10 border rounded max-w-lg mx-auto">
      <Link to="/students" className="text-green-600 underline">
        ← Back to Students
        </Link>
      <h2 className="text-xl font-bold mb-2">{student.name}</h2>
      <p>Referral Code: {student.referralCode}</p>
      <p>Total Spent: ${student.totalSpent}</p>

      <h3 className="font-semibold mt-4">Orders</h3>

      <ul className="list-disc ml-6">
        {student.orders.map((order, index) => (
          <li key={index}>
            {order.snack} — Qty: {order.quantity} — Amount: ${order.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDetail;


