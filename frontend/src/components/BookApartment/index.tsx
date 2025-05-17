// import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Star } from "lucide-react";
import DateRangeCalendar from "../DateRangePicker";

const BookApartment = ({ apartment }: any) => {
  //   const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [guestsQuantity, setGuestsQuantity] = useState(1);

  return (
    <div className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg w-[200rem]">
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
        <DateRangeCalendar />
        {/* <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow w-full"
        /> */}
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
          <p>${apartment.pricePerNight}</p>
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
        <p>${apartment.pricePerNight + 50 + 30}</p>
      </div>
      <button className="py-2 w-full bg-black text-white font-semibold hover:opacity-80 cursor-pointer rounded-sm">
        Book Now
      </button>
      <p className="text-center text-gray-500">You won't be charged yet</p>
    </div>
  );
};

export default BookApartment;
