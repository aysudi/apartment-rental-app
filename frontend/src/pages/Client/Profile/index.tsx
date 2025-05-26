import { Luggage, EarthLock } from "lucide-react";
import { useState } from "react";

const UserProfile = () => {
  const [] = useState();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row pt-[5rem] px-4 sm:px-6 lg:px-24">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 h-full py-14 px-6 sm:px-12 lg:px-6 flex flex-col gap-4">
        <span className="text-3xl font-semibold">Profile</span>

        <ul className="mt-8 space-y-6">
          <li className="flex items-center gap-3">
            <div className="bg-white p-3 rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold shadow-lg">
              A
            </div>
            <a href="#" className="text-xl hover:text-[#FF9A1E]">
              About me
            </a>
          </li>
          <li className="flex items-center gap-3">
            <div className="bg-white p-3 rounded-full w-12 h-12 flex justify-center items-center shadow-lg">
              <Luggage className="w-12" />
            </div>
            <a href="#" className="text-xl hover:text-[#FF9A1E]">
              Past trips
            </a>
          </li>
          <li className="flex items-center gap-3">
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
        <h1 className="text-3xl font-semibold">About Me</h1>

        <div className="flex items-center gap-4 mt-6">
          <div className="bg-[#FF9A1E] text-white p-6 rounded-full w-24 h-24 flex justify-center items-center text-4xl font-bold">
            A
          </div>
          <div className="text-left">
            <h1 className="text-4xl font-bold">Aysu</h1>
            <p className="text-lg text-gray-500">Guest</p>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Edit your profile</h2>
          <p className="text-lg text-gray-600 mt-2">
            Your Funda profile is an important part of every reservation.
            Complete yours to help other hosts and guests get to know you.
          </p>
          <button className="bg-[#FF9A1E] text-white py-2 px-8 rounded-xl mt-6 text-lg cursor-pointer hover:opacity-85">
            Edit
          </button>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold">Reviews I’ve written</h3>
          <div className="border-t border-gray-200 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
