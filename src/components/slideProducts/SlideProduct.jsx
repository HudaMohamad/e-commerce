import React from "react";

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
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            navigation={true}
            loop={data.length > 5}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Product item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default SlideProduct;