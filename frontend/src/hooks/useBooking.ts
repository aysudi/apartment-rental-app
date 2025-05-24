import { useState, useEffect } from "react";
import { Booking } from "@/classes/Booking";
import bookingsController from "@/services/api/bookings/bookingsApi";
import dateDifferenceInDays from "@/utils/dateDifference";

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
    if (startDate) {
      const newBooking = new Booking(
        apartment.id,
        userId,
        totalPrice,
        startDate.toISOString(),
        endDate == null ? startDate.toISOString() : endDate.toISOString()
      );
      await bookingsController.postBooking(newBooking);
      return true;
    }
    return false;
  };

  return { totalPrice, handleApartmentData };
};
