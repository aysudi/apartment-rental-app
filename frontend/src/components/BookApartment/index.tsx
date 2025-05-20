import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import DateRangeCalendar from "../DateRangePicker";
import { Booking } from "@/classes/Booking";
import BookingApartmentModal from "../BookingModal";
import bookingsController from "@/services/api/bookings/bookingsApi";
import Swal from "sweetalert2";
import dateDifferenceInDays from "@/utils/dateDifference";

const BookApartment = ({ apartment }: any) => {
  const [guestsQuantity, setGuestsQuantity] = useState(1);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEditModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (startDate && endDate) {
      const nights = dateDifferenceInDays(startDate, endDate);
      setTotalPrice(nights * apartment.pricePerNight + 50 + 30);
    }
  }, [startDate, endDate, apartment.pricePerNight]);

  const handleApartmentData = async () => {
    if (startDate && endDate) {
      const newBooking = new Booking(
        apartment.id,
        apartment.host.id,
        totalPrice,
        startDate.toISOString(),
        endDate.toISOString()
      );
      await bookingsController.postBooking(newBooking);
      Swal.fire({
        title: "Success!",
        text: "Your booking has been confirmed!",
        icon: "success",
        confirmButtonText: "Great!",
      });
      setIsModalOpen(false);
    } else {
      console.log("Invalid or missing datas");
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
      <div className="flex gap-2 flex-col">
        <h4 className="font-semibold text-sm">Check-in Date</h4>
        <DateRangeCalendar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>
      <div className="flex gap-2 flex-col mt-2">
        <h4 className="font-semibold text-sm">Guests</h4>
        <div className="w-full flex gap-2">
          <span
            onClick={() => {
              setGuestsQuantity((prevState) => {
                return prevState - 1;
              });
              console.log(guestsQuantity);
            }}
            className="py-2 px-4 border rounded-lg bg-white hover:bg-gray-100 cursor-pointer"
          >
            -
          </span>
          <input
            type="number"
            min="1"
            step="1"
            value={guestsQuantity}
            onChange={(e) => setGuestsQuantity(Number(e.target.value))}
            className="p-2 bg-white w-[75%] rounded-lg border text-center"
          />
          <span
            onClick={() => {
              setGuestsQuantity((prevState) => {
                return prevState + 1;
              });
              console.log(guestsQuantity);
            }}
            className="py-2 px-4 border rounded-lg bg-white hover:bg-gray-100 cursor-pointer"
          >
            +
          </span>
        </div>
        <span className="text-gray-500 text-sm">
          This apartment can accommodate up to 6 guests
        </span>
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p>
            ${apartment.pricePerNight} {"\u00D7"} 1 night
          </p>
          <p>${totalPrice && totalPrice - 80}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Cleaning fee</p>
          <p>$50</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Service fee</p>
          <p>$30</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center font-bold text-lg">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
      <button
        onClick={() => {
          openEditModal();
        }}
        className="py-2 w-full bg-black text-white font-semibold hover:opacity-80 cursor-pointer rounded-sm"
      >
        Book Now
      </button>
      <p className="text-center text-gray-500">You won't be charged yet</p>

      <BookingApartmentModal
        handleApartmentData={handleApartmentData}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BookApartment;
