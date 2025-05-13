import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const SliderComponent = () => {
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
        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 1</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 2</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 3</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 4</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "350px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 4</h3>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-button-prev" style={prevButtonStyle}>
        Prev
      </div>
      <div className="swiper-button-next" style={nextButtonStyle}>
        Next
      </div>
    </div>
  );
};

const prevButtonStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "10px",
  zIndex: 10,
  //   backgroundColor: "#FF9A1E",
  backgroundColor: "red",
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
  //   backgroundColor: "#FF9A1E",
  backgroundColor: "red",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transform: "translateY(-50%)",
};

export default SliderComponent;
