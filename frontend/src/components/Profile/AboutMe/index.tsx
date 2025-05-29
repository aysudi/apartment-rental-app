import type { User } from "@/types/type";
import { Link } from "react-router";

type Props = { user: User | null };

const AboutMe = ({ user }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-semibold">About Me</h1>

      <div className="flex items-center gap-4 mt-6">
        <div className="bg-[#FF9A1E] text-white p-6 rounded-full w-24 h-24 flex justify-center items-center text-4xl font-bold">
          {user?.firstName[0]}
        </div>
        <div className="text-left">
          <h1 className="text-4xl font-bold">
            {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-lg text-gray-500 mt-1">
            {user &&
              user?.role.charAt(0).toUpperCase() +
                user?.role.slice(1).toLowerCase()}
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
        <div>
          <p className="text-lg font-semibold">Legal Name</p>
          <span className="text-gray-500">
            {user?.firstName} {user?.lastName}
          </span>
          <hr className="mt-4" />
        </div>
        <div>
          <p className="text-lg font-semibold">Email</p>
          <span className="text-gray-500">{user?.email}</span>
          <hr className="mt-4" />
        </div>
        <div>
          <p className="text-lg font-semibold">Username</p>
          <span className="text-gray-500">{user?.username}</span>
          <hr className="mt-4" />
        </div>
        <div>
          <p className="text-lg font-semibold">Balance</p>
          <span className="text-gray-500">{user?.balance}$</span>
          <hr className="mt-4" />
        </div>
      </div>

      {/* Profile Completion */}
      <div className="mt-12 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Edit your profile</h2>
        <p className="text-lg text-gray-600">
          Your Funda profile is an important part of every reservation. Complete
          yours to help other hosts and guests get to know you.
        </p>
        <Link
          to={`/edit-profile`}
          className="bg-[#FF9A1E] w-[5.5rem] mt-2 flex items-center justify-center text-white py-2 px-8 rounded-lg text-lg cursor-pointer hover:opacity-85"
        >
          Edit
        </Link>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold">Reviews I’ve written</h3>
        <div className="border-t border-gray-200 mt-4 mb-4">
          {user?.reviews.length == 0 ? (
            <span className="text-gray-600 pt-12">No reviews yet</span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
