import { NavLink } from "react-router";
import logo from "../../assets/images/header-logo.jpeg";

const Header = () => {
  return (
    <header className="bg-[#FF9A1E] ">
      <div className="w-[65%] mx-auto flex justify-between gap-2 items-center ">
        <div className="w-[5.3rem]">
          <img className="w-full h-full rounded-lg" src={logo} alt="Logo" />
        </div>
        <div className="flex gap-6 items-center text-white ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `py-[1.3rem] px-3 ${isActive ? "bg-[#f18502] " : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/apartments"}
            className={({ isActive }) =>
              `py-[1.3rem] px-3 ${isActive ? "bg-[#f18502] " : ""}`
            }
          >
            Apartments
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `py-[1.3rem] px-3 ${isActive ? "bg-[#f18502]" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
