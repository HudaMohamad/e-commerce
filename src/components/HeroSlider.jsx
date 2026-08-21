
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import bannerHero1 from '../img/banner_Hero1.jpg';
import bannerHero2 from '../img/banner_Hero2.jpg';
import bannerHero3 from '../img/banner_Hero3.jpg';

function HeroSlider() {
  return (
    <Swiper
      loop={true}  
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="content">
          <h4>Introducing the new</h4>

          <h3>
            Microsoft Xbox <br />
            360 Controller
          </h3>

          <p>Windows Xp/10/7/8 ps3, Tv Box</p>

          <Link to="/" className="btn">
            Shop Now
          </Link>
        </div>

        <img src={bannerHero1} alt="Xbox 360 Controller" />
      </SwiperSlide>

      <SwiperSlide>
        <div className="content">
          <h4>Introducing the new</h4>

          <h3>
            Microsoft Xbox <br />
            360 Controller
          </h3>

          <p>Windows Xp/10/7/8 ps3, Tv Box</p>

          <Link to="/" className="btn">
            Shop Now
          </Link>
        </div>

        <img src={bannerHero2} alt="Xbox 360 Controller" />
      </SwiperSlide>

      <SwiperSlide>
        <div className="content">
          <h4>Introducing the new</h4>

          <h3>
            Microsoft Xbox <br />
            360 Controller
          </h3>

          <p>Windows Xp/10/7/8 ps3, Tv Box</p>

          <Link to="/" className="btn">
            Shop Now
          </Link>
        </div>

        <img src={bannerHero3} alt="Xbox 360 Controller" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;