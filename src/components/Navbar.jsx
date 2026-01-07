
// import { NavLink } from "react-router-dom";
// import logo from "../assets/logo.png";

// function Navbar() {
//   const ActiveLink = ({ isActive }) => (isActive ? "text-gray-500" : "text-white");


//   return (
//     <nav className="flex justify-between items-center  px-6 py-4 bg-green-600">

//       <h1 className="font-semibold text-lg">School Canteen</h1>

//       <div className="flex gap-4 hover:scale-120">
//         <NavLink to="/snacks" className={ActiveLink}>
//           Snacks
//         </NavLink>
//         <NavLink to="/students" className={ActiveLink}>
//           Students
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const ActiveLink = ({ isActive }) => (isActive ? "text-gray-500" : "text-white");
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-green-600">
      
      {/* Left side: Logo + App Name */}
      <div className="flex items-center gap-3">
        <img 
          src={logo} 
          alt="School Canteen Logo" 
          className="w-8 h-8 object-contain"
        />
        <h1 className="text-white font-semibold text-lg">
          School Canteen
        </h1>
      </div>

      {/* Right side: Links */}
      
      <div className="flex gap-4 text-white hover:scale-120">
        <NavLink to="/snacks" className={ActiveLink}>Snacks</NavLink>
        <NavLink to="/students" className={ActiveLink}>Students</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;

