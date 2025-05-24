import { useAuth } from "@/context/AuthContext";
import authController from "@/services/api/users/usersApi";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const LogInForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      const response = await authController.login(values);
      if (!response.isLogged) {
        toast.error(response.message);
      } else {
        toast.success(response.message);
        login(values);
        if (response.data.role == "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
      actions.resetForm();
    },
  });

  return (
    <form onSubmit={loginFormik.handleSubmit} className="space-y-6">
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md text-sm sm:text-base"
          value={loginFormik.values.email}
          onChange={loginFormik.handleChange}
          onBlur={loginFormik.handleBlur}
          name="email"
          placeholder="name@example.com"
          required
        />
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          className="w-full mt-2 p-2 border border-gray-300 rounded-md text-sm sm:text-base"
          value={loginFormik.values.password}
          onChange={loginFormik.handleChange}
          onBlur={loginFormik.handleBlur}
          name="password"
          placeholder="********"
          required
        />
        {loginFormik.errors.password && loginFormik.touched.password && (
          <p className="text-sm text-red-500 mt-2">
            {loginFormik.errors.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition text-sm sm:text-base cursor-pointer"
      >
        Login
      </button>
    </form>
  );
};

export default LogInForm;
