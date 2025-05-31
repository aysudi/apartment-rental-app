import AboutMe from "@/components/Profile/AboutMe";
import Trips from "@/components/Profile/Trips";
import { useAuth } from "@/context/AuthContext";
import useFetchBookings from "@/hooks/useFetchBookings";
import { Luggage } from "lucide-react";
import { useState } from "react";

const UserProfile = () => {
  const { user, setUser } = useAuth();
  const { bookings, loading, error } = useFetchBookings();
  const [activeSection, setActiveSection] = useState("AboutMe");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  if (loading && !user) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  const bookedApartments = bookings.filter(
    (booking) => booking.userId === user?.id
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row pt-[5rem] px-4 sm:px-6 lg:px-24">
      <div className="w-full lg:w-1/4 h-full py-14 px-6 sm:px-12 lg:px-6 flex flex-col gap-4">
        <span className="text-3xl font-semibold">Profile</span>

        <ul className="mt-8 space-y-6">
          <li
            onClick={() => handleSectionChange("AboutMe")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="bg-white p-3 rounded-full w-12 h-12 flex justify-center items-center text-2xl font-bold shadow-lg">
              {user?.firstName[0]}
            </div>
            <a href="#" className="text-xl hover:text-[#FF9A1E]">
              About me
            </a>
          </li>
          <li
            onClick={() => handleSectionChange("Trips")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="bg-white p-3 rounded-full w-12 h-12 flex justify-center items-center shadow-lg">
              <Luggage className="w-12" />
            </div>
            <a href="#" className="text-xl hover:text-[#FF9A1E]">
              Trips
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full lg:w-3/4 bg-white py-14 px-6 sm:px-12 lg:px-14">
        {activeSection == "AboutMe" && (
          <AboutMe setUser={setUser} user={user} />
        )}

        {activeSection === "Trips" && (
          <Trips bookedApartments={bookedApartments} />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
