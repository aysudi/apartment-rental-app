import { useState } from "react";
import { Star } from "lucide-react";
import DateRangeCalendar from "../DateRangePicker";
import BookingApartmentModal from "../BookingModal";
import { useBooking } from "@/hooks/useBooking";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import GuestsSelector from "../GueatsSelector";
import BookingInfo from "../BookingInfo";

const BookApartment = ({ apartment }: any) => {
  const [guestsQuantity, setGuestsQuantity] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { totalPrice, handleApartmentData } = useBooking(
    apartment,
    startDate,
    endDate
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleBooking = async () => {
    if (user) {
      if (!startDate && !endDate) {
        setIsModalOpen(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You should select dates!",
        });
      } else {
        openModal();
      }
    } else {
      toast.error("Login to book an apartment");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg w-[30rem]">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <span className="text-2xl font-semibold">
            ${apartment.pricePerNight}
          </span>
          <span className="text-gray-500">/ night</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="text-orange-500" size={17} />
          <span>{apartment.avgRating}</span>
        </div>
      </div>

      <DateRangeCalendar
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <GuestsSelector
        guestsQuantity={guestsQuantity}
        setGuestsQuantity={setGuestsQuantity}
      />

      <hr />
      <BookingInfo apartment={apartment} totalPrice={totalPrice} />

      <button
        onClick={handleBooking}
        className="py-2 w-full bg-black text-white font-semibold hover:opacity-80 cursor-pointer rounded-sm"
      >
        Book Now
      </button>
      <p className="text-center text-gray-500">You won't be charged yet</p>

      <BookingApartmentModal
        totalPrice={totalPrice}
        handleApartmentData={handleApartmentData}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BookApartment;
