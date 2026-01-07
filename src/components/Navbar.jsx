
import { NavLink } from "react-router-dom";

function Navbar() {
  const ActiveLink = ({ isActive }) => (isActive ? "text-gray-500" : "text-white");

  
  return (
    <nav className="flex justify-between items-center  px-6 py-4 bg-green-600">

      <h1 className="font-semibold text-lg">School Canteen</h1>

      <div className="flex gap-4">
        <NavLink to="/snacks" className={ActiveLink}>
          Snacks
        </NavLink>
        <NavLink to="/students" className={ActiveLink}>
          Students
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
