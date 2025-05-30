import { useParams } from "react-router";
import useFetchOneApartment from "@/hooks/useFetchOneApartment";
import { MapPin, Check } from "lucide-react";
import BookApartment from "@/components/BookApartment";
import LoadingSpinner from "@/components/LoadingSpinner";
import type { Review } from "@/types/type";
import useFetchReviews from "@/hooks/useFetchReviews";
import { formatMonthYear } from "@/utils/formatMonthYear";
import ApartmentImageSlider from "@/components/ApartmentSlider";
import ReviewForm from "@/components/ReviewForm";
import { useAuth } from "@/context/AuthContext";
import useFetchBookings from "@/hooks/useFetchBookings";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const ApartmentDetails = () => {
  const { id } = useParams();
  const { apartment, loading, error } = useFetchOneApartment(id!);
  const {
    reviews,
    loading: reviewsLoading,
    error: reviewsError,
  }: {
    reviews: Review[];
    loading: boolean;
    error: string | null;
  } = useFetchReviews();
  const { user } = useAuth();
  const { bookings } = useFetchBookings();

  const [localReviews, setLocalReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (reviews && apartment) {
      const filtered = reviews.filter((r) => r.apartmentId === apartment.id);
      setLocalReviews(filtered);
    }
  }, [reviews, apartment]);

  const averageRating =
    localReviews.length > 0
      ? (
          localReviews.reduce((acc, review) => acc + review.rating, 0) /
          localReviews.length
        ).toFixed(1)
      : "0.0";

  const userHasBooking = user
    ? bookings.some(
        (b) =>
          b.userId === user.id &&
          b.apartmentId === apartment?.id &&
          new Date(b.bookedDates.endDate) < new Date()
      )
    : false;

  const handleReviewSubmit = (newReview: Review) => {
    setLocalReviews((prev) => [
      {
        ...newReview,
        user: {
          ...user!,
          createdAt: user!.createdAt || new Date().toISOString(),
        },
      },
      ...prev,
    ]);
  };

  if (loading || reviewsLoading) return <LoadingSpinner />;
  if (error || reviewsError) return <p>{error || reviewsError}</p>;
  if (!apartment) return <p>No apartment found.</p>;

  return (
    <div className="min-h-screen flex flex-col gap-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ApartmentImageSlider
        images={apartment.images}
        coverImg={apartment.coverImage}
      />

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col gap-10 w-full lg:w-[65%]">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{apartment.title}</h2>
            <div className="flex gap-2 items-center">
              <MapPin size={17} />
              <span>{apartment.location}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {apartment.features?.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 bg-[#FF9A1E] text-white text-sm font-bold rounded-2xl"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Description</h3>
            <p>{apartment.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Host</h3>
            <div className="flex gap-4 items-center">
              <div className="w-[4.5rem] h-[4.5rem]">
                <img
                  className="h-full w-full object-cover rounded-full"
                  src={apartment.host.profileImage}
                  alt="Host"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-lg">
                  {apartment.host.firstName} {apartment.host.lastName}
                </h4>
                <p className="text-gray-500 text-sm">
                  Host since {formatMonthYear(apartment.host.createdAt)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">House Rules</h3>
            <div className="flex flex-col gap-2">
              {apartment.rules?.map((rule, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <Check strokeWidth={3} className="text-green-600" size={17} />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Reviews</h3>
            <div>
              {averageRating} | {localReviews.length} review
              {localReviews.length !== 1 && "s"}
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <div className="flex flex-col gap-4">
                {localReviews?.map((review: Review, idx: number) => (
                  <div key={idx} className="border-b border-gray-200 pb-4 mb-2">
                    <div className="flex items-center gap-4 mb-2">
                      <img
                        src={review?.user?.profileImage || "/default-user.png"}
                        alt="Reviewer"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {review?.user?.firstName || "Unknown"}{" "}
                          {review?.user?.lastName || ""}
                        </p>
                        <p className="text-sm text-gray-500">
                          {review.user?.createdAt
                            ? formatMonthYear(review.user.createdAt)
                            : "Unknown"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={16}
                          className={
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      {review?.comment}
                    </p>
                  </div>
                ))}
              </div>
              {user && userHasBooking && (
                <ReviewForm
                  user={user}
                  apartmentId={apartment.id}
                  onSubmitSuccess={handleReviewSubmit}
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-full lg:w-[35%] mb-8 flex flex-col gap-4 text-center lg:text-start">
          <h2 className="text-3xl font-bold">Book Apartment</h2>
          <BookApartment apartment={apartment} />
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
