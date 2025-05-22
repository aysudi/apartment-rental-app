import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  handleApartmentData: () => Promise<boolean>;
};

export default function BookingApartmentModal({
  isOpen,
  onClose,
  handleApartmentData,
}: Props) {
  const { user, loading } = useAuth();
  const [bookedUser, setBookedUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  if (loading) return <p>Loading</p>;

  const handleBooking = () => {
    if (
      user &&
      user.firstName == bookedUser.firstName &&
      user.lastName == bookedUser.lastName &&
      user.email == bookedUser.email
    ) {
      handleApartmentData();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute border px-3 pb-1 hover:border-black rounded-sm top-4 right-4 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Book Apartment</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              onChange={(e) => {
                setBookedUser(() => {
                  return { ...bookedUser, firstName: e.target.value };
                });
              }}
              type="text"
              name="firstName"
              className="w-full border rounded p-2"
              placeholder="Enter first name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Last Name</label>
            <input
              onChange={(e) => {
                setBookedUser(() => {
                  return { ...bookedUser, lastName: e.target.value };
                });
              }}
              type="text"
              name="lastName"
              className="w-full border rounded p-2"
              placeholder="Enter last name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              onChange={(e) => {
                setBookedUser(() => {
                  return { ...bookedUser, email: e.target.value };
                });
              }}
              type="email"
              name="email"
              className="w-full border rounded p-2"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="flex gap-3 justify-end mt-6">
            <button
              onClick={onClose}
              className="border border-[#FF9A1E] px-4 py-2 rounded-md cursor-pointer font-bold"
            >
              Cancel
            </button>
            <button
              onClick={handleBooking}
              className="bg-[#FF9A1E] text-white font-bold px-4 py-2 rounded-md hover:opacity-80 cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
