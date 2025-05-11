import { NavLink } from "react-router";
import logo from "../../assets/images/header-logo.jpeg";
import { House, Hotel, BookUser } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#FF9A1E] ">
      <div className="w-[70%] mx-auto flex justify-between gap-2 items-center ">
        <div className="w-[5.3rem]">
          <img className="w-full h-full rounded-lg" src={logo} alt="Logo" />
        </div>
        <div className="flex gap-4 items-center text-white ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `py-[1.3rem] px-3 hover:bg-[#f18502] flex items-center gap-3 ${
                isActive ? "bg-[#f18502] " : ""
              }`
            }
          >
            <House size={17} />
            Home
          </NavLink>
          <NavLink
            to={"/apartments"}
            className={({ isActive }) =>
              `py-[1.3rem] px-3 hover:bg-[#f18502] flex items-center gap-3 ${
                isActive ? "bg-[#f18502] " : ""
              }`
            }
          >
            <Hotel size={18} />
            Apartments
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `py-[1.3rem] px-3 hover:bg-[#f18502] flex items-center gap-3 ${
                isActive ? "bg-[#f18502]" : ""
              }`
            }
          >
            <BookUser size={17} />
            Contact
          </NavLink>
          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              `border py-1 w-[5rem] rounded-lg text-center hover:bg-white hover:text-[#FF9A1E] ${
                isActive ? "bg-white text-[#FF9A1E]" : "text-white"
              }`
            }
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
