import useFetchApartments from "@/hooks/useFetchApartments";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";

const HostApartmentsPage: React.FC = () => {
  const { apartments } = useFetchApartments();

  const handleDelete = (apartmentId: string) => {
    // Call API to delete the apartment
    console.log(apartmentId);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#FF9A1E]">Your Apartments</h1>
        <Link to="/host/create-apartment">
          <button className="bg-[#FF9A1E] text-white px-6 py-2 rounded-lg hover:bg-[#e88810] transition-colors duration-300">
            Add New Apartment
          </button>
        </Link>
      </div>

      {/* Apartments Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-[#FF9A1E] text-white">
            <tr>
              <th className="py-3 px-6 text-sm font-medium">Title</th>
              <th className="py-3 px-6 text-sm font-medium">Location</th>
              <th className="py-3 w-[10rem] px-6 text-sm font-medium">
                Price / Night
              </th>
              <th className="py-3 px-6 text-sm font-medium">Rating</th>
              <th className="py-3 px-6 text-sm font-medium">Bookings</th>
              <th className="py-3 px-6 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {apartments.map((apartment) => (
              <tr
                key={apartment.id}
                className="hover:bg-gray-100 transition-all duration-200"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <img
                      src={apartment.coverImage}
                      alt={apartment.title}
                      className="w-12 h-12 object-cover rounded-md mr-4"
                    />
                    <span className="text-sm font-semibold">
                      {apartment.title}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm">{apartment.location}</td>
                <td className="py-4 px-6 text-sm font-medium">
                  ${apartment.pricePerNight}
                </td>
                <td className="py-4 px-6 text-sm font-semibold">
                  {apartment.avgRating}
                </td>
                <td className="py-4 px-6 text-sm">{apartment.rentalCount}</td>
                <td className="py-4 px-6 flex space-x-2">
                  {/* View Button */}
                  <Link
                    to={`/host/apartments/${apartment.id}`}
                    className="text-blue-500 hover:text-white hover:bg-blue-500 p-2 rounded-full transition-all duration-300"
                    aria-label="View Apartment"
                  >
                    <FaEye className="text-lg" />
                  </Link>

                  {/* Edit Button */}
                  <Link
                    to={`/host/apartments/edit/${apartment.id}`}
                    className="text-yellow-500 hover:text-white hover:bg-yellow-500 p-2 rounded-full transition-all duration-300"
                    aria-label="Edit Apartment"
                  >
                    <FaEdit className="text-lg" />
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(apartment.id)}
                    className="text-red-500 hover:text-white hover:bg-red-500 p-2 rounded-full transition-all duration-300 cursor-pointer"
                    aria-label="Delete Apartment"
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

export default HostApartmentsPage;
