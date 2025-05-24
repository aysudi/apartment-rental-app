import { Link, NavLink } from "react-router";
import logo from "../../assets/images/header-logo.jpeg";
import {
  House,
  Hotel,
  BookUser,
  User,
  AlignJustify,
  UserPlus,
  LogIn,
  LogOut,
  Heart,
  DoorOpen,
  BookOpen,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Header = () => {
  const { user, logout } = useAuth();
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <header className="bg-[#FF9A1E] fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="w-[5.3rem]">
          <img className="w-full h-full rounded-lg" src={logo} alt="Logo" />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `py-3 flex items-center gap-2 px-4 text-white hover:bg-[#f18502] rounded-md ${
                isActive ? "bg-[#f18502]" : ""
              }`
            }
          >
            <House size={20} />
            Home
          </NavLink>
          <NavLink
            to={"/apartments"}
            className={({ isActive }) =>
              `py-3 flex items-center gap-2 px-4 text-white hover:bg-[#f18502] rounded-md ${
                isActive ? "bg-[#f18502]" : ""
              }`
            }
          >
            <Hotel size={20} />
            Apartments
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `py-3 flex items-center gap-2 px-4 text-white hover:bg-[#f18502] rounded-md ${
                isActive ? "bg-[#f18502]" : ""
              }`
            }
          >
            <BookOpen size={20} />
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `py-3 flex items-center gap-2 px-4 text-white hover:bg-[#f18502] rounded-md ${
                isActive ? "bg-[#f18502]" : ""
              }`
            }
          >
            <BookUser size={20} />
            Contact
          </NavLink>
        </div>

        <div className="md:hidden flex items-center">
          <div
            onClick={() => setOpenedMenu(!openedMenu)}
            className="border py-2 px-3 rounded-2xl flex gap-2 justify-center items-center text-white hover:bg-white hover:text-[#FF9A1E] cursor-pointer"
          >
            <AlignJustify size={20} />
            <User size={20} />
          </div>

          <div
            className={`${
              openedMenu ? "block" : "hidden"
            } absolute top-16 right-0 bg-white text-black w-[12rem] p-4 rounded-md shadow-lg z-50`}
          >
            {user ? (
              <>
                <Link
                  to={"/wishlist"}
                  onClick={() => setOpenedMenu(false)}
                  className="flex items-center gap-3 py-2"
                >
                  <Heart size={20} />
                  Wishlist
                </Link>
                <Link
                  to={"/become-host"}
                  onClick={() => setOpenedMenu(false)}
                  className="flex items-center gap-3 py-2"
                >
                  <DoorOpen size={20} />
                  Become Host
                </Link>
                <Link
                  to={"/login"}
                  onClick={() => {
                    setOpenedMenu(false);
                    logout();
                  }}
                  className="flex items-center gap-3 py-2"
                >
                  <LogOut size={20} />
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={"/register"}
                  onClick={() => setOpenedMenu(false)}
                  className="flex items-center gap-3 py-2"
                >
                  <UserPlus size={20} />
                  Sign Up
                </Link>
                <Link
                  to={"/login"}
                  onClick={() => setOpenedMenu(false)}
                  className="flex items-center gap-3 py-2"
                >
                  <LogIn size={20} />
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
