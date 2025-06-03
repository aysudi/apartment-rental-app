import { useAuth } from "@/context/AuthContext";
import authController from "@/services/api/users/usersApi";
import { useFormik } from "formik";
import Swal from "sweetalert2";

type BookingApartmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleApartmentData: (userId: string) => Promise<boolean>;
  totalPrice: number;
};

const BookingApartmentModal = ({
  isOpen,
  onClose,
  handleApartmentData,
  totalPrice,
}: BookingApartmentModalProps) => {
  const { user } = useAuth();

  const apartmentBooking = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: async (values, actions) => {
      if (!user) {
        console.error("User is not authenticated");
        return;
      }
      try {
        const success = await handleApartmentData(user.id);
        if (success && user) {
          await authController.updateUser(user.id, {
            balance: user.balance - totalPrice,
          });
          console.log(values);
          actions.resetForm();
          Swal.fire({
            title: "Booked successfully!",
            icon: "success",
          });
          onClose();
        }
      } catch (error) {
        console.error("Error booking apartment:", error);
      }
    },
  });

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute border px-3 pb-1 hover:border-black rounded-sm top-4 right-4 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Book Apartment</h2>

        <form onSubmit={apartmentBooking.handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={apartmentBooking.handleChange}
              onBlur={apartmentBooking.handleBlur}
              value={apartmentBooking.values.firstName}
              className="w-full border rounded p-2"
              placeholder="Enter first name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={apartmentBooking.handleChange}
              onBlur={apartmentBooking.handleBlur}
              value={apartmentBooking.values.lastName}
              className="w-full border rounded p-2"
              placeholder="Enter last name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              onChange={apartmentBooking.handleChange}
              onBlur={apartmentBooking.handleBlur}
              value={apartmentBooking.values.email}
              className="w-full border rounded p-2"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="flex gap-3 justify-end mt-6">
            <button
              onClick={onClose}
              className="border border-[#FF9A1E] px-4 py-2 rounded-md cursor-pointer font-bold"
              type="button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#FF9A1E] text-white font-bold px-4 py-2 rounded-md hover:opacity-80 cursor-pointer"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingApartmentModal;
