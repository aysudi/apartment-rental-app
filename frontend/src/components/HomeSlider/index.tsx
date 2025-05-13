import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import { Navigation } from "swiper/modules";

const SliderComponent = () => {
  return (
    <div
      className="swiper-container"
      style={{ position: "relative", width: "80%", margin: "auto" }}
    >
      <Swiper
        modules={[Navigation]} // Enable navigation module
        spaceBetween={30} // Space between slides
        slidesPerView={4} // 4 slides per view
        loop={true} // Enable loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 1</h3>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 2</h3>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 3</h3>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              background: "#FF9A1E",
              height: "200px",
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
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "#fff" }}>Slide 4</h3>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev" style={buttonStyle}>
        Prev
      </div>
      <div className="swiper-button-next" style={buttonStyle}>
        Next
      </div>
    </div>
  );
};

// Custom button styles for next/prev buttons
const buttonStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
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
