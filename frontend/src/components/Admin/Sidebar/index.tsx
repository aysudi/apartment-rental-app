import { Calendar, Contact, Hotel, House, LogOut, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="h-full">
      <div
        className={`h-full bg-white shadow-md z-50 transform transition-transform ease-in-out duration-300`}
      >
        <div className="flex justify-between items-center px-8 py-8 bg-[#FF9A1E] text-white">
          <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        </div>

        <div className="px-4 py-10 space-y-4">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-xl text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <House size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/apartments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-xl text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <Hotel size={20} />
            Apartments
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-xl text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <User size={20} />
            Users
          </NavLink>

          <NavLink
            to="/admin/contacts"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-xl text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <Contact size={20} />
            Contacts
          </NavLink>

          <NavLink
            to="/admin/bookings"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-4 text-xl text-black hover:bg-[#FF9A1E] hover:text-white rounded-md ${
                isActive ? "bg-[#f18502] text-white" : ""
              }`
            }
          >
            <Calendar size={20} />
            Bookings
          </NavLink>
        </div>

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

export default AdminSidebar;
