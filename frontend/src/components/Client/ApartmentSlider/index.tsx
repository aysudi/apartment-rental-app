import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  coverImg: string;
};

const ApartmentImageSlider = ({ images, coverImg }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

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

      <div className="relative mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current!;
              swiper.params.navigation.nextEl = nextRef.current!;
            }
          }}
          modules={[Thumbs, Navigation]}
        >
          {allImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Thumb ${idx + 1}`}
                className="h-26 w-full object-cover rounded-md border-2 hover:border-[#FF9A1E] transition duration-200 cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={prevRef}
          className="swiper-button-prev bg-[#FF9A1E] text-white absolute rounded-full py-1.5 px-4 top-1/3 left-0 z-10 cursor-pointer"
        >
          <ChevronLeft />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next bg-[#FF9A1E] rounded-full py-1.5 px-4 text-white absolute top-1/3 right-0 z-10 cursor-pointer"
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default ApartmentImageSlider;
