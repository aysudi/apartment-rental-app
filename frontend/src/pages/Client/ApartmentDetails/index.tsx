import { useParams } from "react-router";
import useFetchOneApartment from "@/hooks/useFetchOneApartment";
import { MapPin, Check } from "lucide-react";
import BookApartment from "@/components/BookApartment";
import LoadingSpinner from "@/components/LoadingSpinner";
import type { Review } from "@/types/type";
import useFetchReviews from "@/hooks/useFetchReviews";
import { formatMonthYear } from "@/utils/formatMonthYear";
import { FaStar } from "react-icons/fa";

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

  if (loading && reviewsLoading) return <LoadingSpinner />;
  if (error && reviewsError) return <p>{error}</p>;
  if (!apartment) return <p>No apartment found.</p>;

  const validReviews = reviews?.filter(
    (review) => review.apartmentId == apartment.id
  );

  return (
    <div className="flex flex-col mb-[3rem] gap-10 pt-[6.1rem] w-7xl m-auto h-min-[100vh] h-full">
      <div className="grid grid-cols-2 gap-2 h-[30rem] rounded-xl overflow-hidden">
        <div className="h-[30rem] overflow-hidden">
          <img
            className="w-full h-full object-cover "
            src="https://portozante.com/wp-content/uploads/2023/06/greece-5-star-luxury-two-bedroom-private-villla-with-pool-royal-infinity-spa-villa-with-heated-pool-porto-zante-villas-and-spa-zakynthos-island-1367x911.webp"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 h-[30rem] grid-rows-2 gap-x-2 gap-y-2 overflow-hidden">
          <div>
            <img
              className="w-full h-full object-cover "
              src="http://lxry.travel/images/528/a3f137ae2a65377b6aa32d2b1f22bf08.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover "
              src="https://static.wixstatic.com/media/865cf4_02880cd84a5d4884b6cd6847e337505b~mv2.jpg/v1/fill/w_640,h_762,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/865cf4_02880cd84a5d4884b6cd6847e337505b~mv2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover "
              src="https://www.ibizavilla.com/wp-content/uploads/2024/02/villa-Vadella_ibiza_Villa-1_1024x768.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="w-full h-full object-cover "
              src="https://www.luxuryvillasibiza.net/wp-content/uploads/2024/03/Discover-our-villas-with-pool-in-Ibiza-1.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex gap-14 justify-between w-full">
        <div className="flex flex-col gap-8 w-[calc(100%-32rem)]">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{apartment.title}</h2>
            <div className="flex gap-2 items-center">
              <MapPin size={17} />
              <span>{apartment.location}</span>
            </div>
            <div className="flex gap-4 mt-2">
              {apartment.features &&
                apartment.features.map((feature, idx) => {
                  return (
                    <span
                      key={idx}
                      className="px-4 py-1 bg-[#FF9A1E] text-white text-sm font-bold rounded-2xl"
                    >
                      {feature}
                    </span>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Description</h3>
            <p>{apartment.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Host</h3>
            <div className="flex gap-4 items-center">
              <div className="w-[5rem] h-[4.5rem]">
                <img
                  className="h-full w-full object-cover rounded-[50%]"
                  src={apartment.host.profileImage}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-lg">
                  {apartment.host.firstName} {apartment.host.lastName}
                </h4>
                <p className="text-gray-500 text-md">
                  Host since {formatMonthYear(apartment.host.createdAt)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">House rules</h3>
            <div className="flex flex-col gap-2">
              {apartment.rules &&
                apartment.rules.map((rule, idx) => {
                  return (
                    <div key={idx} className="flex gap-2 items-center">
                      <Check
                        strokeWidth={3}
                        className="text-green-600"
                        size={17}
                      />
                      <span>{rule}</span>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Reviews</h3>
            <div>
              {apartment.avgRating} |{" "}
              {apartment?.reviews?.length > 0
                ? apartment?.reviews?.length
                : "0"}{" "}
              {""}
              reviews
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {validReviews &&
                validReviews.map((review: Review, idx: number) => {
                  return (
                    <div key={idx} className="flex flex-col gap-3">
                      <div className="flex gap-4 items-center">
                        <div className="h-[3.5rem] ">
                          <img
                            className="h-full w-full object-cover rounded-full"
                            src={review?.user.profileImage}
                            alt=""
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">
                            {review.user.firstName} {review.user.lastName}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {formatMonthYear(review.user.createdAt)}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <FaStar color="#F59E0B" size={20} />
                        <p className="text-gray-600 mt-1">{review.comment}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <BookApartment apartment={apartment} />
      </div>
    </div>
  );
};

export default ApartmentDetails;
