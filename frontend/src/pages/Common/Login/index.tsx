import LogInForm from "@/components/LogInForm";
import img from "../../../assets/images/sign-img.png";
import { Check } from "lucide-react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="pt-24 px-4 mb-20 mx-auto flex flex-col lg:flex-row justify-between min-h-screen gap-10 max-w-7xl">
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <div className="w-full sm:max-w-md p-6 bg-white shadow-lg rounded-md">
          <div className="mb-6 flex flex-col text-center">
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-gray-500 text-sm sm:text-base">
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
        <div className="w-48 sm:w-60 md:w-72">
          <img className="w-full h-full object-contain" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-full px-2 sm:px-4 md:px-0 sm:w-11/12 lg:w-3/4">
          {[
            "Personal dashboard with monthly value check for your home",
            "Save your favourite houses and receive updates",
            "Receive the latest homes in your inbox with saved searches",
          ].map((text, index) => (
            <div key={index} className="flex gap-3 items-start">
              <Check size={24} className="text-[#0171B2] mt-1" />
              <span className="text-sm sm:text-base md:text-lg leading-snug">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
