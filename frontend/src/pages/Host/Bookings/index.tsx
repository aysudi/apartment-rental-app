import LoadingSpinner from "@/components/LoadingSpinner";
import { useAuth } from "@/context/AuthContext";
import useFetchApartments from "@/hooks/useFetchApartments";
import useFetchBookings from "@/hooks/useFetchBookings";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

const HostBookings = () => {
  const { bookings: allBookings, loading } = useFetchBookings();
  const { user, loading: userLoading } = useAuth();
  const { apartments: allApartments, loading: apartmentsLoading } =
    useFetchApartments();

  if (loading || userLoading || apartmentsLoading) return <LoadingSpinner />;

  const apartments = allApartments?.filter((app) => app.host.id == user?.id);

  const validBookings = allBookings.filter((booking) =>
    apartments.some((app) => app.id === booking.apartmentId)
  );

  const formatDate = (date: Date) => {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleDateString();
  };

  return (
    <div className="px-6 py-16 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#FF9A1E]">Your Bookings</h1>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-[#FF9A1E] text-white">
            <tr>
              <th className="py-3 px-6 text-sm font-medium">User</th>
              <th className="py-3 px-6 text-sm font-medium">Apartment</th>
              <th className="py-3 px-6 text-sm font-medium">Booking Dates</th>
              <th className="py-3 px-6 text-sm font-medium">Status</th>
              <th className="py-3 px-6 text-sm font-medium">Total Price</th>
              <th className="py-3 px-6 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {validBookings &&
              validBookings?.map((booking, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-100 transition-all duration-200"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <span className="text-sm font-semibold">
                        {booking.user.firstName} {booking.user.lastName}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm">
                    {booking.apartment.title}
                  </td>
                  <td className="py-4 px-6 text-sm">
                    {formatDate(booking.bookedDates.startDate)}
                  </td>
                  <td className="py-4 px-6 text-sm">
                    {formatDate(booking.bookedDates.endDate)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium">
                    ${booking.totalPrice}
                  </td>
                  <td className="py-4 px-6 flex space-x-2">
                    <Link
                      to={`/host/bookings/edit`}
                      className="text-yellow-500 hover:text-white hover:bg-yellow-500 p-2 rounded-full transition-all duration-300"
                      aria-label="Edit Booking"
                    >
                      <FaEdit className="text-lg" />
                    </Link>

                    <button
                      className="text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-full transition-all duration-300"
                      aria-label="Delete Booking"
                    >
                      <FaTrashAlt className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HostBookings;
