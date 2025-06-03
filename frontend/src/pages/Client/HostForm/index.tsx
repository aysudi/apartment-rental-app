import Apartment from "@/classes/Apartment";
import CoverImage from "@/components/Host/AddApartment/CoverImage";
import Description from "@/components/Host/AddApartment/Description";
import Features from "@/components/Host/AddApartment/Features";
import Images from "@/components/Host/AddApartment/Images";
import Rules from "@/components/Host/AddApartment/Rules";
import TitleLocation from "@/components/Host/AddApartment/TitleLocation";
import TypePrice from "@/components/Host/AddApartment/TypePrice";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import { useAuth } from "@/context/AuthContext";
import apartmentsController from "@/services/api/apartments/apartmentsApi";
import authController from "@/services/api/users/usersApi";
import addApartmentSchema from "@/validation/addApartmentSchema";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const HostForm = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      location: "",
      pricePerNight: "",
      description: "",
      features: [],
      rules: [],
      coverImage: "",
      images: [],
    },
    onSubmit: async (values, actions) => {
      const apartmentData = new Apartment(
        values.title,
        values.type,
        values.location,
        parseFloat(values.pricePerNight),
        values.description,
        values.coverImage,
        values.images,
        user!.id,
        values.features,
        values.rules
      );
      const req = await apartmentsController.postApartment(apartmentData);
      await authController.updateUser(user!.id, { role: "host" });
      actions.resetForm();
      Swal.fire({
        title: "Successfully added!",
        icon: "success",
      });
      navigate(`/apartment-details/${req.id}`);
    },
    validationSchema: addApartmentSchema,
  });

  if (loading && !user) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-[#F7F7F7] pt-[7.5rem] pb-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl border-2 border-[#FF9A1E] overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center text-[#FF9A1E] mb-8 tracking-wide">
            Become a Host & List Your Apartment
          </h1>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <TitleLocation formik={formik} />

          <TypePrice formik={formik} />

          <Description formik={formik} />

          <Features formik={formik} />

          <Rules formik={formik} />

          <CoverImage formik={formik} />

          <Images formik={formik} />

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#FF9A1E] text-white py-4 px-12 rounded-3xl text-xl font-semibold hover:bg-[#e07b0b] transition duration-300 transform hover:scale-105 cursor-pointer"
            >
              Submit Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HostForm;
