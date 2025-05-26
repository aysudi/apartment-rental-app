import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom } from "swiper/modules";
import { useState } from "react";
import "swiper/css";

type Props = {
  images: string[];
};

const ApartmentImageSlider = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-full max-w-7xl mx-auto my-4">
      {/* Main slider */}
      <Swiper
        loop
        zoom
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Zoom, Navigation, Thumbs]}
        className="rounded-xl overflow-hidden shadow-md"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="swiper-zoom-container">
              <img
                src={img}
                alt={`Apartment image ${idx + 1}`}
                className="w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        watchSlidesProgress
        modules={[Thumbs]}
        className="mt-4"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Thumb ${idx + 1}`}
              className="h-20 sm:h-24 w-full object-cover rounded-md border-2 hover:border-[#FF9A1E] transition duration-200 cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ApartmentImageSlider;
