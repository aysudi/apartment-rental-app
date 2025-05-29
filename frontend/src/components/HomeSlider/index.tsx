import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import useFetchApartments from "@/hooks/useFetchApartments";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderComponent = () => {
  const { apartments, loading } = useFetchApartments();
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;

  console.log(apartments);

  return (
    <div
      className="swiper-container"
      style={{ position: "relative", width: "98%", margin: "auto" }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
                className="overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              >
                <div
                  className="slide-content hover:scale-110 transition overflow-hidden"
                  style={{
                    backgroundImage: `url(${app.coverImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "350px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
              </SwiperSlide>
            ))}
      </Swiper>

      <div className="swiper-button-prev shadow-2xl" style={prevButtonStyle}>
        <ChevronLeft />
      </div>
      <div className="swiper-button-next shadow-2xl" style={nextButtonStyle}>
        <ChevronRight />
      </div>
    </div>
  );
};

const prevButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "10px",
  zIndex: 10,
  backgroundColor: "#FF9A1E",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transform: "translateY(-50%)",
};

const nextButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  right: "10px",
  zIndex: 10,
  backgroundColor: "#FF9A1E",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transform: "translateY(-50%)",
};

export default SliderComponent;
