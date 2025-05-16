import { Link, NavLink } from "react-router";
import logo from "../../assets/images/header-logo.jpeg";
import { House, Hotel, BookUser, User, AlignJustify } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Header = () => {
  const { user } = useAuth();
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <header className="bg-[#FF9A1E] fixed w-full">
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
          <div className="flex relative flex-col gap-2 justify-start items-start">
            <div
              onClick={() => {
                if (openedMenu == false) {
                  setOpenedMenu(true);
                } else {
                  setOpenedMenu(false);
                }
              }}
              className={`border py-1 w-[5rem] rounded-2xl flex gap-2 justify-center items-center hover:bg-white hover:text-[#FF9A1E] cursor-pointer`}
            >
              <AlignJustify size={17} />
              <User />
            </div>
            <div
              className={`${
                openedMenu == false ? "hidden" : "flex"
              } absolute bottom-[-6.8rem] w-[8rem] text-black right-0 gap-2 flex-col p-4 rounded-md z-10 bg-white shadow-lg text-[1.1rem]`}
            >
              {user ? (
                <>
                  <Link
                    to={"/wishlist"}
                    onClick={() => {
                      setOpenedMenu(false);
                    }}
                  >
                    Wishlist
                  </Link>
                  <Link
                    to={"/login"}
                    onClick={() => {
                      setOpenedMenu(false);
                    }}
                  >
                    Log Out
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/register"}
                    onClick={() => {
                      setOpenedMenu(false);
                    }}
                  >
                    Sign Up
                  </Link>
                  <Link
                    to={"/login"}
                    onClick={() => {
                      setOpenedMenu(false);
                    }}
                  >
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
