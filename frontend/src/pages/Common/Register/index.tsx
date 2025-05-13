import { useState } from "react";
import img from "../../../assets/images/sign-up-img.png";
import { Check } from "lucide-react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword || password.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      console.log("Form submitted:", { firstName, lastName, email, password });
    }
  };

  return (
    <div className="pt-[9.1rem] w-[70%] mb-[5rem] mx-auto flex justify-between min-h-[79vh] gap-10">
      <div className="w-[50%]">
        <div className="w-[100%] p-6 bg-white shadow-2xl rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create an account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex gap-4 w-full">
              <div className="w-[50%]">
                <label className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="w-[50%]">
                <label className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && (
                <p className="text-sm text-red-500 mt-2">
                  Password must be at least 8 characters long and include a
                  number and a special character.
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              <a href="#" className="text-blue-600 hover:underline">
                Login
              </a>
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
      <div className="flex items-center justify-center flex-col gap-8">
        <div className="w-[20rem] ">
          <img className="w-full h-full object-cover " src={img} alt="" />
        </div>
        <div className="flex flex-col gap-4 w-[60%]">
          <div className="flex gap-3 items-center">
            <Check size={43} className="text-[#0171B2] " />
            <span className="text-lg">
              Personal dashboard with monthly value check for your home
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <Check size={35} className="text-[#0171B2] " />
            <span className="text-lg">
              Save your favourite houses and receive updates
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <Check size={43} className="text-[#0171B2] " />
            <span className="text-lg">
              Receive the latest homes in your inbox with saved searches
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
