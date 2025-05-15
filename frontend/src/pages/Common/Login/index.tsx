import LogInForm from "@/components/LogInForm";
import img from "../../../assets/images/sign-img.png";
import { Check } from "lucide-react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="pt-[6rem] px-4 mb-[5rem] mx-auto flex flex-col lg:flex-row justify-between min-h-[79vh] gap-10 max-w-7xl">
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <div className="w-full p-6 bg-white shadow-2xl rounded-md">
          <div className="mb-6 flex flex-col text-center">
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-gray-500">
              Enter your email and password to access your account
            </p>
          </div>

          <LogInForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Sign up
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

export default Login;
