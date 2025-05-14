import img from "../../../assets/images/sign-up-img.png";
import { Check } from "lucide-react";
import { useFormik } from "formik";
// import { toast } from "sonner";
import { User } from "@/classes/User";
import { Link } from "react-router";
import registerSchema from "@/validation/registerSchema";

const Register = () => {
  const registerFormik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values, actions) => {
      const newUser = new User(
        values.firstName,
        values.lastName,
        values.username,
        values.email,
        values.password
      );
      console.log(newUser);
      // const response = await .register(newUser);
      // if (response.message == "dublicate email") {
      //   toast("Signup failed. Email already taken!");
      //   registerFormik.values.email = "";
      // } else {
      //   toast("Signup successful!");
      //   navigate("/login");
      // }
      actions.resetForm();
    },
    validationSchema: registerSchema,
  });

  return (
    <div className="pt-[6rem] px-4 mb-[5rem] mx-auto flex flex-col lg:flex-row justify-between min-h-[79vh] gap-10 max-w-7xl">
      <div className="w-full lg:w-1/2">
        <div className="w-full p-6 bg-white shadow-2xl rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create an account
          </h2>
          <form onSubmit={registerFormik.handleSubmit}>
            <div className="mb-4 flex flex-col md:flex-row gap-4 w-full">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  value={registerFormik.values.firstName}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  name="firstName"
                  placeholder="John"
                  required
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  value={registerFormik.values.lastName}
                  onChange={registerFormik.handleChange}
                  onBlur={registerFormik.handleBlur}
                  name="lastName"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                value={registerFormik.values.username}
                onChange={registerFormik.handleChange}
                onBlur={registerFormik.handleBlur}
                name="username"
                placeholder="john123"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                value={registerFormik.values.email}
                onChange={registerFormik.handleChange}
                onBlur={registerFormik.handleBlur}
                name="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                value={registerFormik.values.password}
                onChange={registerFormik.handleChange}
                onBlur={registerFormik.handleBlur}
                name="password"
                placeholder="********"
                required
              />
              {registerFormik.errors.password &&
                registerFormik.touched.password && (
                  <p className="text-sm text-red-500 mt-2">
                    {registerFormik.errors.password}
                  </p>
                )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                value={registerFormik.values.confirmPassword}
                onChange={registerFormik.handleChange}
                onBlur={registerFormik.handleBlur}
                name="confirmPassword"
                placeholder="********"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-800 cursor-pointer"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">OR CONTINUE WITH</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="p-2 border rounded-md hover:bg-gray-200 w-full cursor-pointer">
                Google
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center flex-col gap-8">
        <div className="w-[16rem] sm:w-[18rem] md:w-[20rem]">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-[90%] lg:w-[60%]">
          <div className="flex gap-3 items-center">
            <Check size={30} className="text-[#0171B2]" />
            <span className="text-base sm:text-lg">
              Personal dashboard with monthly value check for your home
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <Check size={30} className="text-[#0171B2]" />
            <span className="text-base sm:text-lg">
              Save your favourite houses and receive updates
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <Check size={30} className="text-[#0171B2]" />
            <span className="text-base sm:text-lg">
              Receive the latest homes in your inbox with saved searches
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
