import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom } from "swiper/modules";
import { useState } from "react";
import "swiper/css";

type Props = {
  images: string[];
  coverImg: string;
};

const ApartmentImageSlider = ({ images, coverImg }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const allImages = [coverImg, ...images.filter((img) => img !== coverImg)];

  return (
    <div className="w-full max-w-7xl mx-auto my-4">
      <Swiper
        loop
        zoom
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Zoom, Navigation, Thumbs]}
        className="rounded-xl overflow-hidden shadow-md"
      >
        {allImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="swiper-zoom-container">
              <img
                src={img}
                alt={`Apartment image ${idx + 1}`}
                className="w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[670px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
        {allImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Thumb ${idx + 1}`}
              className="h-20 sm:h-30 w-full object-cover rounded-md border-2 hover:border-[#FF9A1E] transition duration-200 cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ApartmentImageSlider;
