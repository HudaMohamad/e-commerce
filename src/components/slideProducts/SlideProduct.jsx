import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

// Components
import Product from "./product";

import "./slideProduct.css";

function SlideProduct({ data, title }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSwiper = (swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  };

  return (
    <div className="slide_products slide">
      <div className="container">
        {/* العنوان */}
        <div className="top_slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            asperiores?
          </p>
        </div>

        {/* Swiper */}
        {data && data.length > 0 ? (
          <div className="swiper_outer">
            <button ref={prevRef} className="swiper_nav_btn swiper_prev">
              <MdChevronLeft />
            </button>

            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              loop={data.length > 5}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onSwiper={handleSwiper}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <Product item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <button ref={nextRef} className="swiper_nav_btn swiper_next">
              <MdChevronRight />
            </button>
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default SlideProduct;