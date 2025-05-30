import { useAuth } from "@/context/AuthContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import useFetchApartments from "@/hooks/useFetchApartments";
import useFetchBookings from "@/hooks/useFetchBookings";
import bookingsController from "@/services/api/bookings/bookingsApi";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { CreatedBooking } from "@/types/type";

export type BookingStatus = "pending" | "confirmed" | "cancelled";

const HostBookings = () => {
  const { bookings: allBookings, loading } = useFetchBookings();
  const { user, loading: userLoading } = useAuth();
  const { apartments: allApartments, loading: apartmentsLoading } =
    useFetchApartments();
  const [updatedBookings, setUpdatedBookings] = useState<
    CreatedBooking[] | null
  >(null);

  if (loading || userLoading || apartmentsLoading) return <LoadingSpinner />;

  const apartments = allApartments?.filter((app) => app.host.id === user?.id);

  const validBookings: CreatedBooking[] = (
    updatedBookings ?? allBookings
  ).filter((booking: CreatedBooking) =>
    apartments.some((app) => app.id === booking.apartmentId)
  );

  const handleUpdateStatus = async (id: string, status: BookingStatus) => {
    try {
      await bookingsController.updateBooking(id, { status: status });
      setUpdatedBookings((prev) =>
        (prev ?? allBookings).map((booking) =>
          booking.id === id ? { ...booking, status } : booking
        )
      );
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  return (
    <div className="px-6 py-16 space-y-6">
      <h1 className="text-3xl font-bold text-[#FF9A1E] mb-6">
        Your Apartment Bookings
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-[#FF9A1E] text-white">
            <tr>
              <th className="py-3 px-6 text-sm font-medium">Apartment</th>
              <th className="py-3 px-6 text-sm font-medium">Guest</th>
              <th className="py-3 px-6 text-sm font-medium">Dates</th>
              <th className="py-3 px-6 text-sm font-medium">Total Price</th>
              <th className="py-3 px-6 text-sm font-medium">Status</th>
              <th className="py-3 px-6 text-sm font-medium">Booked On</th>
              <th className="py-3 px-6 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {validBookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-gray-100 transition-all duration-200"
              >
                <td className="py-4 px-6 text-sm">
                  <div className="font-semibold">
                    {booking.apartment?.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {booking.apartment?.location}
                  </div>
                </td>
                <td className="py-4 px-6 text-sm">
                  {booking.user?.firstName} {booking.user.lastName}
                </td>
                <td className="py-4 px-6 text-sm">
                  {booking.bookedDates
                    ? `${new Date(
                        booking.bookedDates.startDate
                      ).toLocaleDateString()} - ${new Date(
                        booking.bookedDates.endDate
                      ).toLocaleDateString()}`
                    : "-"}
                </td>
                <td className="py-4 px-6 text-sm font-medium">
                  ${booking.totalPrice.toFixed(2)}
                </td>
                <td className="py-4 px-6 text-sm capitalize">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                      booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : booking.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm">
                  {new Date(booking.createdAt).toLocaleDateString()}
                </td>
                <td className="py-4 px-6 text-sm">
                  {booking.status === "pending" ? (
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        onClick={() =>
                          handleUpdateStatus(booking.id, "confirmed")
                        }
                        className="bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-2 rounded-md cursor-pointer"
                      >
                        Confirm
                      </Button>
                      <Button
                        onClick={() =>
                          handleUpdateStatus(booking.id, "cancelled")
                        }
                        className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-2 rounded-md cursor-pointer"
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <span className="text-xs text-gray-400 italic">
                      No actions
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {validBookings.length === 0 && (
          <div className="text-center text-gray-500 py-10 text-sm">
            No bookings found for your apartments.
          </div>
        )}
      </div>
    </div>
  );
};

export default HostBookings;
