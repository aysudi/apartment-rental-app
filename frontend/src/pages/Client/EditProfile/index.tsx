import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { useFormik } from "formik";
import LoadingSpinner from "@/components/LoadingSpinner";
import updateProfileSchema from "@/validation/updateProfileSchema";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";
import { User } from "@/classes/User";
import authController from "@/services/api/users/usersApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const EditProfile = () => {
  const { user, loading } = useAuth();
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [selectedImageURL, setSelectedImageURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.profileImage) {
      setSelectedImageURL(user.profileImage);
    }
  }, [user]);

  useEffect(() => {
    return () => {
      if (selectedImageURL.startsWith("blob:")) {
        URL.revokeObjectURL(selectedImageURL);
      }
    };
  }, [selectedImageURL]);

  const handleImageUpload = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setSelectedImageURL(objectUrl);
  };

  const editProfileFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      username: user?.username || "",
      balance: user?.balance || 0,
      password: "",
      newPassword: "",
    },
    onSubmit: async (values, actions) => {
      if (values.password !== user?.password) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect password!",
        });
      } else {
        const updatedUser = new User(
          values.firstName,
          values.lastName,
          values.username,
          values.email,
          values.newPassword || values.password,
          user.role,
          selectedImageURL,
          values.balance
        );
        await authController.updateUser(user.id, updatedUser);
        toast.success("Profile updated successfully");
        navigate("/user");
        actions.resetForm();
      }
    },
    validationSchema: updateProfileSchema,
  });

  if (loading) return <LoadingSpinner />;
  if (!user) return <p>No user found.</p>;

  return (
    <div className="min-h-screen pt-[7rem] bg-gray-50 pb-12">
      <div className="max-w-7xl m-auto flex flex-col lg:flex-row gap-10">
        {/* Profile Image Section */}
        <div className="w-full lg:w-1/4 flex flex-col items-center gap-4">
          <div className="relative group flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
              {selectedImageURL ? (
                <img
                  className="w-full h-full object-cover"
                  src={selectedImageURL}
                  alt="Profile"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    setSelectedImageURL("");
                    toast.error("Invalid image URL.");
                  }}
                />
              ) : (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center text-4xl font-bold text-white">
                  {user.firstName[0].toUpperCase()}
                </div>
              )}
            </div>
            <button
              onClick={() => setShowImageOptions(!showImageOptions)}
              className="absolute bottom-0 right-0 bg-[#FF9A1E] text-white p-2 rounded-full shadow-md hover:bg-[#e0880f] transition cursor-pointer"
            >
              <Pencil size={18} />
            </button>

            {showImageOptions && (
              <div className="mt-4 p-4 bg-white border border-gray-200 rounded-xl shadow-lg w-72 space-y-4 transition-all duration-300">
                <p className="text-sm font-semibold text-gray-700">
                  Update Profile Image
                </p>

                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex items-center gap-3 px-4 py-2 bg-gray-100 border border-dashed border-gray-300 rounded-md hover:bg-gray-200 transition"
                >
                  <span className="text-sm text-gray-600">
                    Choose from device
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file);
                    }}
                    className="hidden"
                  />
                </label>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Or paste image URL"
                    className="w-full p-2 pr-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
                    value={selectedImageURL}
                    onChange={(e) => setSelectedImageURL(e.target.value)}
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400 material-icons text-base">
                    link
                  </span>
                </div>

                <button
                  className="w-full py-2 rounded-md bg-[#FF9A1E] text-white hover:bg-[#e0880f] transition text-sm font-medium cursor-pointer"
                  onClick={async () => {
                    await authController.updateUser(user.id, {
                      profileImage: selectedImageURL,
                    });
                    toast.success("Image successfully changed");
                    setShowImageOptions(false);
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-3/4 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">My profile</h2>
          <form
            onSubmit={editProfileFormik.handleSubmit}
            className="flex flex-col gap-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={editProfileFormik.values.firstName}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                  className="mt-2 p-3 w-full bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
                />
                {editProfileFormik.errors.firstName && (
                  <p className="text-sm text-red-500">
                    {editProfileFormik.errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={editProfileFormik.values.lastName}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                  className="mt-2 p-3 w-full bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
                />
                {editProfileFormik.errors.lastName && (
                  <p className="text-sm text-red-500">
                    {editProfileFormik.errors.lastName}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editProfileFormik.values.email}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                  className="mt-2 p-3 w-full bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
                />
                {editProfileFormik.errors.email && (
                  <p className="text-sm text-red-500">
                    {editProfileFormik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={editProfileFormik.values.username}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                  className="mt-2 p-3 w-full bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
                />
                {editProfileFormik.errors.username && (
                  <p className="text-sm text-red-500">
                    {editProfileFormik.errors.username}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Balance
                </label>
                <input
                  type="number"
                  name="balance"
                  value={editProfileFormik.values.balance}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                  className="mt-2 p-3 w-full bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
                />
                {editProfileFormik.errors.balance && (
                  <p className="text-sm text-red-500">
                    {editProfileFormik.errors.balance}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Previous Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={editProfileFormik.values.password}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                  className="mt-2 p-3 w-full bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
                  placeholder="* * * * * * * *"
                />
                {editProfileFormik.errors.password && (
                  <p className="text-sm text-red-500">
                    {editProfileFormik.errors.password}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={editProfileFormik.values.newPassword}
                  onChange={editProfileFormik.handleChange}
                  onBlur={editProfileFormik.handleBlur}
                  className="mt-2 p-3 w-full bg-gray-50 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9A1E]"
                  placeholder="* * * * * * * *"
                />
                {editProfileFormik.errors.newPassword && (
                  <p className="text-sm text-red-500">
                    {editProfileFormik.errors.newPassword}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-[#FF9A1E] text-white py-2 px-8 rounded-xl text-lg cursor-pointer hover:brightness-90"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
