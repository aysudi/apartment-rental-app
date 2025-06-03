import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import useFetchApartments from "@/hooks/useFetchApartments";
import LoadingSpinner from "../../Common/LoadingSpinner";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderComponent = () => {
  const { apartments, loading } = useFetchApartments();
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="relative w-full px-4 md:px-6 lg:px-10 xl:px-16 max-w-[1440px] mx-auto">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <div className="swiper-button-prev flex items-center justify-center bg-[#FF9A1E] text-white p-2 rounded-lg cursor-pointer">
          <ChevronLeft />
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full"
      >
        {apartments &&
          apartments
            .filter((app) => !!app.coverImage)
            .map((app, idx) => (
              <SwiperSlide
                key={idx}
                onClick={() => {
                  navigate(`/apartment-details/${app.id}`);
                }}
                className="overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
              >
                <div
                  className="w-full h-[250px] sm:h-[300px] md:h-[320px] lg:h-[340px] bg-center bg-cover bg-no-repeat transform group-hover:scale-105 transition-transform duration-300 rounded-xl"
                  style={{ backgroundImage: `url(${app.coverImage})` }}
                ></div>
              </SwiperSlide>
            ))}
      </Swiper>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <div className="swiper-button-next flex items-center justify-center bg-[#FF9A1E] text-white p-2 rounded-lg cursor-pointer">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
