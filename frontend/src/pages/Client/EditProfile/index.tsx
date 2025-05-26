import { Pencil } from "lucide-react";
import { useFormik } from "formik";
import { useAuth } from "@/context/AuthContext";

const EditProfile = () => {
  const { user } = useAuth();

  const editProfileFormik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      username: user?.username,
      balance: user?.balance,
      password: "",
      newPassword: "",
    },
    onSubmit: () => {},
  });

  return (
    <div className="min-h-screen pt-[7rem] bg-gray-50 pb-12">
      <div className=" max-w-7xl m-auto flex flex-col lg:flex-row gap-10">
        {/* Left Sidebar - Profile Image */}
        <div className="w-full lg:w-1/4 flex flex-col items-center">
          <div className="bg-gray-200 w-32 h-32 rounded-full flex justify-center items-center text-4xl font-bold text-white mb-6">
            A
          </div>
          <button className="text-blue-500 flex items-center gap-2">
            <Pencil className="w-5 h-5" /> Edit
          </button>
        </div>

        {/* Main Content - Profile Information Form */}
        <div className="w-full lg:w-3/4 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">My profile</h2>

          {/* Profile Fields */}
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
                />
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
                />
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
