import { useState, useEffect } from "react";
import useFetchApartments from "@/hooks/useFetchApartments";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import { useAuth } from "@/context/AuthContext";
import EditApartmentModal from "@/components/Common/EditApartment";
import apartmentsController from "@/services/api/apartments/apartmentsApi";
import Swal from "sweetalert2";

const HostApartmentsPage: React.FC = () => {
  const { apartments: allApartments, loading } = useFetchApartments();
  const { user, loading: userLoading } = useAuth();

  const [editOpen, setEditOpen] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState<any>(null);
  const [apartmentsState, setApartmentsState] = useState<any[]>([]);

  useEffect(() => {
    if (allApartments && user?.id) {
      setApartmentsState(allApartments.filter((app) => app.host.id == user.id));
    }
  }, [allApartments, user]);

  const handleEdit = (apartment: any) => {
    setSelectedApartment(apartment);
    setEditOpen(true);
  };

  const handleDelete = (apartmentId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await apartmentsController.deleteApartment(apartmentId);
          setApartmentsState((prev) =>
            prev.filter((apartment) => apartment.id !== apartmentId)
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your apartment has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting.",
            icon: "error",
          });
        }
      }
    });
  };

  if (loading || userLoading) return <LoadingSpinner />;

  return (
    <div className="px-6 py-16 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#FF9A1E]">Your Apartments</h1>
        <Link to="/host/add-apartment">
          <button className="bg-[#FF9A1E] text-white px-6 py-2 rounded-lg hover:bg-[#e88810] transition-colors duration-300 cursor-pointer">
            Add New Apartment
          </button>
        </Link>
      </div>

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
            {apartmentsState.map((apartment) => (
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
                  <Link
                    to={`/apartment-details/${apartment.id}`}
                    className="text-blue-500 hover:text-white hover:bg-blue-500 p-2 rounded-full transition-all duration-300"
                    aria-label="View Apartment"
                  >
                    <FaEye className="text-lg" />
                  </Link>
                  <button
                    onClick={() => handleEdit(apartment)}
                    className="text-yellow-500 hover:text-white hover:bg-yellow-500 p-2 rounded-full transition-all duration-300 cursor-pointer"
                    aria-label="Edit Apartment"
                  >
                    <FaEdit className="text-lg" />
                  </button>
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

      <EditApartmentModal
        open={editOpen}
        onOpenChange={setEditOpen}
        apartment={selectedApartment}
        setApartment={setSelectedApartment}
        updateApartments={setApartmentsState}
      />
    </div>
  );
};

export default HostApartmentsPage;
