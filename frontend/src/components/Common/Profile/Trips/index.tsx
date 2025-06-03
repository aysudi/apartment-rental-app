import type { CreatedBooking } from "@/types/type";
import { Link } from "react-router";

type Props = { bookedApartments: CreatedBooking[] };

const Trips = ({ bookedApartments }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trips</h2>
      <p className="text-lg text-gray-600 mb-6">
        Here’s a look at your booked apartments and stays:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {bookedApartments.length === 0 ? (
          <p className="text-gray-600">No past trips yet</p>
        ) : (
          bookedApartments.map((booking, idx) => {
            if (booking.status == "confirmed") {
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={booking?.apartment.coverImage}
                    alt={booking?.apartment.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6 space-y-4">
                    <Link
                      to={`/apartment-details/${booking.apartment.id}`}
                      className="text-xl font-semibold text-gray-800 hover:text-[#FF9A1E] transition-colors duration-300 cursor-default"
                    >
                      {booking.apartment.title}
                    </Link>
                    <p className="text-gray-500">
                      {booking.apartment.location}
                    </p>
                    <p className="text-lg text-[#FF9A1E] font-bold">
                      ${booking.apartment.pricePerNight} per night
                    </p>

                    <div className="text-sm text-gray-600">
                      <p>
                        Booking Date:{" "}
                        {new Date(booking.createdAt).toLocaleDateString()}
                      </p>
                      <p>
                        Start Date:{" "}
                        {new Date(
                          booking?.bookedDates.startDate
                        ).toLocaleDateString()}
                      </p>
                      <p>
                        End Date:{" "}
                        {new Date(
                          booking.bookedDates.endDate
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    {/* Total Price Calculation */}
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-lg font-semibold text-gray-800">
                        Total Price:
                      </p>
                      <p className="text-lg font-bold text-[#FF9A1E]">
                        ${booking.totalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })
        )}
      </div>
    </div>
  );
};

export default Trips;
