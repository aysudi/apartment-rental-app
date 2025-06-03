import LoadingSpinner from "@/components/Common/LoadingSpinner";
import useFetchReviews from "@/hooks/useFetchReviews";
import authController from "@/services/api/users/usersApi";
import type { User } from "@/types/type";
import type React from "react";
import { useEffect } from "react";
import { Link } from "react-router";

type Props = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AboutMe = ({ user, setUser }: Props) => {
  const { reviews, loading } = useFetchReviews();

  const refreshUser = async () => {
    if (user?.id) {
      const refreshedUser = await authController.getOneUser(user.id);
      setUser(refreshedUser);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  if (loading) return <LoadingSpinner />;

  const validReviews = reviews.filter((review) => review?.userId == user?.id);

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
          {user?.reviews.length === 0 ? (
            <span className="text-gray-600 pt-12 block">No reviews yet</span>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {validReviews.map((review) => (
                <div
                  key={review.id}
                  className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">
                        Reviewed apartment
                      </span>
                      <span className="text-lg font-medium text-orange-600">
                        {review.apartment.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.899a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.416a1 1 0 00-.364 1.118l1.263 3.899c.3.921-.755 1.688-1.538 1.118l-3.32-2.416a1 1 0 00-1.176 0l-3.32 2.416c-.783.57-1.838-.197-1.539-1.118l1.263-3.899a1 1 0 00-.364-1.118L2.35 9.326c-.783-.57-.38-1.81.588-1.81h4.105a1 1 0 00.949-.69l1.262-3.899z" />
                          </svg>
                        ))}
                    </div>
                  </div>

                  <p className="text-gray-700 italic">“{review.comment}”</p>

                  <div className="mt-2 text-sm text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString("en-GB")}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
