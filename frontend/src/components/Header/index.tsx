import { NavLink } from "react-router";
import logo from "../../assets/images/header-logo.jpeg";

const Header = () => {
  return (
    <header className="bg-[#FF9A1E] ">
      <div className="w-[65%] mx-auto py-[0.9rem] flex justify-between gap-2 items-center ">
        <div className="w-[5.3rem]">
          <img className="w-full h-full rounded-lg" src={logo} alt="Logo" />
        </div>
        <div className="flex gap-6 items-center text-white ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/apartments"}>Apartments</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
