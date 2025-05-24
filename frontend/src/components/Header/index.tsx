import { NavLink } from "react-router";
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

        {/* Desktop Menu */}
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

          <div className=" flex items-center relative">
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
                  <NavLink
                    to={"/wishlist"}
                    className={({ isActive }) =>
                      `py-3 flex items-center gap-2 px-2 hover:bg-[#f18502] rounded-md ${
                        isActive ? "bg-[#f18502] text-white" : ""
                      }`
                    }
                  >
                    <Heart size={20} />
                    Wishlist
                  </NavLink>
                  <NavLink
                    to={"/become-host"}
                    className={({ isActive }) =>
                      `py-3 flex items-center gap-2 px-2 hover:bg-[#f18502] rounded-md ${
                        isActive ? "bg-[#f18502] text-white" : ""
                      }`
                    }
                  >
                    <DoorOpen size={20} />
                    Become Host
                  </NavLink>
                  <NavLink
                    to={"/login"}
                    onClick={logout}
                    className={({ isActive }) =>
                      `py-3 flex items-center gap-2 px-2 hover:bg-[#f18502] rounded-md ${
                        isActive ? "bg-[#f18502] text-white" : ""
                      }`
                    }
                  >
                    <LogOut size={20} />
                    Log Out
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to={"/wishlist"}
                    className={({ isActive }) =>
                      `py-3 flex items-center gap-2 px-2 hover:bg-[#f18502] rounded-md ${
                        isActive ? "bg-[#f18502] text-white" : ""
                      }`
                    }
                  >
                    <LogIn size={20} />
                    Log In
                  </NavLink>
                  <NavLink
                    to={"/become-host"}
                    className={({ isActive }) =>
                      `py-3 flex items-center gap-2 px-2 hover:bg-[#f18502] rounded-md ${
                        isActive ? "bg-[#f18502] text-white" : ""
                      }`
                    }
                  >
                    <UserPlus size={20} />
                    Sign Up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          onClick={() => setOpenedMenu(!openedMenu)}
          className="md:hidden border py-2 px-3 rounded-2xl flex gap-2 justify-center items-center text-white hover:bg-white hover:text-[#FF9A1E] cursor-pointer"
        >
          <AlignJustify size={20} />
          <User size={20} />
        </div>

        <div
          className={`${
            openedMenu ? "translate-x-0" : "-translate-x-full"
          } fixed inset-0 bg-opacity-50 z-40 transition-transform ease-in-out duration-300 md:hidden`}
          onClick={() => setOpenedMenu(false)}
        ></div>

        <div
          className={`${
            openedMenu ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 bg-white w-74 h-full p-6 z-50 transition-transform ease-in-out duration-300 md:hidden`}
        >
          <div className="flex pl-4 justify-between items-center">
            <div className="w-[7rem]">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={logo}
                alt="Logo"
              />
            </div>
            <button
              onClick={() => setOpenedMenu(false)}
              className="text-black text-xl hover:text-[#FF9A1E]"
            >
              X
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-1">
            <NavLink
              to={"/"}
              onClick={() => setOpenedMenu(false)}
              className={({ isActive }) =>
                `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                  isActive ? "bg-[#f18502] text-white" : ""
                }`
              }
            >
              <House size={20} />
              Home
            </NavLink>
            <NavLink
              to={"/apartments"}
              onClick={() => setOpenedMenu(false)}
              className={({ isActive }) =>
                `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                  isActive ? "bg-[#f18502] text-white" : ""
                }`
              }
            >
              <Hotel size={20} />
              Apartments
            </NavLink>
            <NavLink
              to={"/about"}
              onClick={() => setOpenedMenu(false)}
              className={({ isActive }) =>
                `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                  isActive ? "bg-[#f18502] text-white" : ""
                }`
              }
            >
              <BookOpen size={20} />
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              onClick={() => setOpenedMenu(false)}
              className={({ isActive }) =>
                `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                  isActive ? "bg-[#f18502] text-white" : ""
                }`
              }
            >
              <BookUser size={20} />
              Contact
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to={"/wishlist"}
                  onClick={() => setOpenedMenu(false)}
                  className={({ isActive }) =>
                    `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                      isActive ? "bg-[#f18502] text-white" : ""
                    }`
                  }
                >
                  <Heart size={20} />
                  Wishlist
                </NavLink>
                <NavLink
                  to={"/become-host"}
                  onClick={() => setOpenedMenu(false)}
                  className={({ isActive }) =>
                    `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                      isActive ? "bg-[#f18502] text-white" : ""
                    }`
                  }
                >
                  <DoorOpen size={20} />
                  Become Host
                </NavLink>
                <NavLink
                  to={"/login"}
                  onClick={() => {
                    setOpenedMenu(false);
                    logout();
                  }}
                  className={({ isActive }) =>
                    `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                      isActive ? "bg-[#f18502] text-white" : ""
                    }`
                  }
                >
                  <LogOut size={20} />
                  Log Out
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to={"/register"}
                  onClick={() => setOpenedMenu(false)}
                  className={({ isActive }) =>
                    `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                      isActive ? "bg-[#f18502] text-white" : ""
                    }`
                  }
                >
                  <UserPlus size={20} />
                  Sign Up
                </NavLink>
                <NavLink
                  to={"/login"}
                  onClick={() => setOpenedMenu(false)}
                  className={({ isActive }) =>
                    `px-4 flex items-center gap-3 py-3 text-lg text-black hover:bg-[#FF9A1E] rounded-md ${
                      isActive ? "bg-[#f18502] text-white" : ""
                    }`
                  }
                >
                  <LogIn size={20} />
                  Log In
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
