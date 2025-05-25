import { useState, useEffect } from "react";
import bookingsController from "@/services/api/bookings/bookingsApi";
import dateDifferenceInDays from "@/utils/dateDifference";
import BookedDate from "@/classes/BookedDate";
import bookedDatesController from "@/services/api/bookedDates/bookedDatesApi";
import { Booking } from "@/classes/Booking";

export const useBooking = (
  apartment: any,
  startDate: Date | null,
  endDate: Date | null
) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (startDate && endDate) {
      const nights = dateDifferenceInDays(startDate, endDate);
      setTotalPrice(nights * apartment.pricePerNight + 50 + 30);
    } else if (startDate && !endDate) {
      setTotalPrice(apartment.pricePerNight + 80);
    }
  }, [startDate, endDate, apartment.pricePerNight]);

  const handleApartmentData = async (userId: string) => {
    if (startDate && endDate) {
      const bookedDate = new BookedDate(startDate, apartment.id, endDate);
      const req = await bookedDatesController.postBookedDate(bookedDate);
      console.log(req.id);
      const newBooking = new Booking(apartment.id, userId, totalPrice, req.id);
      await bookingsController.postBooking(newBooking);
      return true;
    }
    return false;
  };

  return { totalPrice, handleApartmentData };
};
