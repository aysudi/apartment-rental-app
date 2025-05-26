import { useAuth } from "@/context/AuthContext";
import { Luggage, EarthLock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const UserProfile = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState("AboutMe");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row pt-[5rem] px-4 sm:px-6 lg:px-24">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 h-full py-14 px-6 sm:px-12 lg:px-6 flex flex-col gap-4">
        <span className="text-3xl font-semibold">Profile</span>

        <ul className="mt-8 space-y-6">
          <li
            onClick={() => handleSectionChange("AboutMe")}
            className="flex items-center gap-3"
          >
            <div className="bg-white p-3 rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold shadow-lg">
              {user?.firstName[0]}
            </div>
            <a href="#" className="text-xl hover:text-[#FF9A1E]">
              About me
            </a>
          </li>
          <li
            onClick={() => handleSectionChange("PastTrips")}
            className="flex items-center gap-3"
          >
            <div className="bg-white p-3 rounded-full w-12 h-12 flex justify-center items-center shadow-lg">
              <Luggage className="w-12" />
            </div>
            <a href="#" className="text-xl hover:text-[#FF9A1E]">
              Past trips
            </a>
          </li>
          <li
            onClick={() => handleSectionChange("Connections")}
            className="flex items-center gap-3"
          >
            <div className="bg-white p-3 rounded-full w-12 h-12 flex justify-center items-center shadow-lg">
              <EarthLock className="w-12" />
            </div>
            <a href="#" className="text-xl hover:text-[#FF9A1E]">
              Connections
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 bg-white py-14 px-6 sm:px-12 lg:px-14">
        {/* Profile Header */}
        {activeSection == "AboutMe" && (
          <>
            <h1 className="text-3xl font-semibold">About Me</h1>

            <div className="flex items-center gap-4 mt-6">
              <div className="bg-[#FF9A1E] text-white p-6 rounded-full w-24 h-24 flex justify-center items-center text-4xl font-bold">
                {user?.firstName[0]}
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold">
                  {user?.firstName} {user?.lastName}
                </h1>
                <p className="text-lg text-gray-500">Guest</p>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold mb-2">
                Personal Information
              </h2>
              <div>
                <p className="text-lg font-semibold">Legal Name</p>
                <span className="text-gray-500">
                  {user?.firstName} {user?.lastName}
                </span>
                <hr className="mt-4" />
              </div>
              <div>
                <p className="text-lg font-semibold">Email</p>
                <span className="text-gray-500">{user?.email}</span>
                <hr className="mt-4" />
              </div>
              <div>
                <p className="text-lg font-semibold">Username</p>
                <span className="text-gray-500">{user?.username}</span>
                <hr className="mt-4" />
              </div>
              <div>
                <p className="text-lg font-semibold">Balance</p>
                <span className="text-gray-500">{user?.balance}$</span>
                <hr className="mt-4" />
              </div>
            </div>

            {/* Profile Completion */}
            <div className="mt-12 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">Edit your profile</h2>
              <p className="text-lg text-gray-600">
                Your Funda profile is an important part of every reservation.
                Complete yours to help other hosts and guests get to know you.
              </p>
              <Link
                to={"/edit-profile"}
                className="bg-[#FF9A1E] w-[5.5rem] mt-2 flex items-center justify-center text-white py-2 px-8 rounded-lg text-lg cursor-pointer hover:opacity-85"
              >
                Edit
              </Link>
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold">Reviews I’ve written</h3>
              <div className="border-t border-gray-200 mt-4 mb-4">
                {user?.reviews.length == 0 ? (
                  <span className="text-gray-600 pt-12">No reviews yet</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        )}
        {activeSection === "PastTrips" && (
          <div>
            <h2 className="text-2xl font-semibold">Past Trips</h2>
            <p className="text-lg text-gray-600 mt-2">List of past trips...</p>
            {/* Add your past trips content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
