import { useFormik } from "formik";
import { toast } from "sonner";
import { User } from "@/classes/User";
import registerSchema from "@/validation/registerSchema";
import authController from "@/services/api/users/usersApi";
import { useNavigate } from "react-router";

const SignUpForm = () => {
  const navigate = useNavigate();

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

      const response = await authController.register(newUser);

      try {
        if (response.message === "duplicate email") {
          toast.error("Signup failed. Email already taken!");
          registerFormik.values.email = "";
        } else {
          toast.success("Signup successful!");
          navigate("/login");
        }
        console.log(response);
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        actions.resetForm();
      }
    },
    validationSchema: registerSchema,
  });

  return (
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
        <label className="block text-sm font-medium text-gray-700">Email</label>
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
        {registerFormik.errors.password && registerFormik.touched.password && (
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
  );
};

export default SignUpForm;
