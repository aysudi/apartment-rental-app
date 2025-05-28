import { NavLink, useNavigate } from "react-router-dom";
import {
  House,
  Hotel,
  Calendar,
  MessageCircle,
  Star,
  LogOut,
} from "lucide-react";

const HostSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-full">
      <div
        className={`h-full bg-white shadow-md z-50 transform transition-transform ease-in-out duration-300`}
      >
        <div className="flex justify-between items-center p-4 bg-[#FF9A1E] text-white">
          <h2 className="text-xl font-bold">Host Dashboard</h2>
        </div>

        <div className="p-4 space-y-4">
          <NavLink
            to="/host/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-lg text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <House size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/host/apartments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-lg text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <Hotel size={20} />
            Apartments
          </NavLink>

          <NavLink
            to="/host/bookings"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-lg text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <Calendar size={20} />
            Bookings
          </NavLink>

          <NavLink
            to="/host/contacts"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-lg text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <MessageCircle size={20} />
            Contacts
          </NavLink>

          <NavLink
            to="/host/reviews"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-lg text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <Star size={20} />
            Reviews
          </NavLink>
        </div>

        {/* Log Out Button at the bottom */}
        <div className="absolute bottom-4 w-full px-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 py-2 px-4 text-lg text-black hover:bg-[#FF9A1E] hover:text-white rounded-md w-auto cursor-pointer"
          >
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostSidebar;
