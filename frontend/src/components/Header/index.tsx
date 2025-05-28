import { NavLink } from "react-router-dom";
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
  UserRoundPen,
  ChartColumnBig,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

interface NavItemProps {
  to: string;
  icon: React.ComponentType<{ size: number }>;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  icon: Icon,
  onClick,
  children,
}) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `py-3 flex items-center gap-2 px-3 hover:bg-[#f18502] hover:text-white rounded-md ${
        isActive ? "bg-[#f18502] text-white" : ""
      }`
    }
  >
    <Icon size={20} />
    {children}
  </NavLink>
);

const Header = () => {
  const { user, logout } = useAuth();
  const [openedMenu, setOpenedMenu] = useState(false);

  const toggleMenu = () => setOpenedMenu((prev) => !prev);

  return (
    <header className="bg-[#FF9A1E] fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="w-[5.3rem]">
          <img className="w-full h-full rounded-lg" src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-white">
          <NavItem to="/" icon={House}>
            Home
          </NavItem>
          <NavItem to="/apartments" icon={Hotel}>
            Apartments
          </NavItem>
          <NavItem to="/about" icon={BookOpen}>
            About
          </NavItem>
          <NavItem to="/contact" icon={BookUser}>
            Contact
          </NavItem>

          <div className="relative flex items-center">
            <div
              onClick={toggleMenu}
              className="border py-2 px-3 rounded-2xl flex gap-2 justify-center items-center text-white hover:bg-white hover:text-[#FF9A1E] cursor-pointer"
            >
              <AlignJustify size={20} />
              <User size={20} />
            </div>

            <div
              className={`${
                openedMenu ? "flex" : "hidden"
              } flex-col gap-1 absolute top-16 right-0 bg-white text-black w-[12rem] p-4 rounded-md shadow-lg z-50`}
            >
              {user ? (
                <>
                  <NavItem to="/wishlist" icon={Heart}>
                    Wishlist
                  </NavItem>
                  <NavItem to="/become-host" icon={DoorOpen}>
                    Become Host
                  </NavItem>
                  <NavItem to="/user" icon={UserRoundPen}>
                    Profile
                  </NavItem>
                  {user.role === "host" && (
                    <NavItem to="/host/dashboard" icon={ChartColumnBig}>
                      Dashboard
                    </NavItem>
                  )}
                  <NavItem
                    to="/login"
                    icon={LogOut}
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                  >
                    Log Out
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem to="/login" icon={LogIn}>
                    Log In
                  </NavItem>
                  <NavItem to="/register" icon={UserPlus}>
                    Sign Up
                  </NavItem>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          onClick={toggleMenu}
          className="md:hidden border py-2 px-3 rounded-2xl flex gap-2 justify-center items-center text-white hover:bg-white hover:text-[#FF9A1E] cursor-pointer"
        >
          <AlignJustify size={20} />
          <User size={20} />
        </div>

        <div
          className={`${
            openedMenu ? "translate-x-0" : "-translate-x-full"
          } fixed inset-0 bg-opacity-50 z-40 transition-transform ease-in-out duration-300 md:hidden`}
          onClick={toggleMenu}
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
              onClick={toggleMenu}
              className="text-black text-xl hover:text-[#FF9A1E]"
            >
              X
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-1">
            <NavItem to="/" icon={House}>
              Home
            </NavItem>
            <NavItem to="/apartments" icon={Hotel}>
              Apartments
            </NavItem>
            <NavItem to="/about" icon={BookOpen}>
              About
            </NavItem>
            <NavItem to="/contact" icon={BookUser}>
              Contact
            </NavItem>

            {user ? (
              <>
                <NavItem to="/wishlist" icon={Heart}>
                  Wishlist
                </NavItem>
                <NavItem to="/become-host" icon={DoorOpen}>
                  Become Host
                </NavItem>
                <NavItem to="/user" icon={UserRoundPen}>
                  Profile
                </NavItem>
                {user.role == "host" && (
                  <NavItem to="/host/dashboard" icon={ChartColumnBig}>
                    Dashboard
                  </NavItem>
                )}
                <NavItem
                  to="/login"
                  icon={LogOut}
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                >
                  Log Out
                </NavItem>
              </>
            ) : (
              <>
                <NavItem to="/register" icon={UserPlus}>
                  Sign Up
                </NavItem>
                <NavItem to="/login" icon={LogIn}>
                  Log In
                </NavItem>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
