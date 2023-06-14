import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";

import slider1 from "../../assets/sliderpic/slider1.jpg";
import slider2 from "../../assets/sliderpic/slider2.jpg";
import slider3 from "../../assets/sliderpic/slider3.jpg";
import slider4 from "../../assets/sliderpic/slider4.jpg";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        pagination={true}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={() => "someSlideChange"}
        onSwiper={(swiper) => "someSlideChange"}
        autoplay
        loop={true}
      >
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(${slider1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto">
              <div className="absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-color">
                <div className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    Make Your Summer Unforgettable!
                  </h1>
                  <Link to="/classes">
                    <button className="btn-outlined text-white">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(${slider3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto">
              <div className="absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-color">
                <div className="max-w-md px-5 lg:px-0 ">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    This Will be the best summer Just For You!
                  </h1>
                  <Link to="/classes">
                    <button className="btn-outlined text-white">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="mx-auto">
              <div className="absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-color">
                <div data-aos="fade-right" className="max-w-md px-5 lg:px-0">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    Get Ready For a Lot Of Adventures!
                  </h1>
                  <Link to="/">
                    <button className="btn-outlined text-white">
                      More About Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[92vh] h-[70vh]"
            style={{
              backgroundImage: `url(${slider4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-color">
                <div data-aos="fade-right" className="">
                  <h1 className="mb-2 hero-heading lg:text-5xl text-4xl font-bold">
                    So Fun That You Won`t Want To Leave!
                  </h1>
                  <Link to="/blog">
                    <button className="btn-outlined text-white">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
