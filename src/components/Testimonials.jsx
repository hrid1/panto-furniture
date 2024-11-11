import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import Rating from "./Rating";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="container my-24 mx-auto">
      <div className="mx-auto text-center">
        <h4 className="text-primary font-semibold uppercase text-xl mb-2.5">
          Testimonials
        </h4>
        <h2 className="text-4xl font-bold mb-12">Our Client Reviews</h2>
      </div>

      {/* SLIDER */}
      <div className="">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {reviews.map((review, idx) => (
              <SwiperSlide
                className=" bg-no-repeat bg-cover bg-center rounded-lg"
                key={idx}
                style={{ backgroundImage: `url(${review.coverImg})` }}
              >
                <div className="md:h-[547px] mb-4">
                  <div className="bg-white md:w-4/5 relative top-1/2 mx-auto rounded-xl h-1/3 text-center">
                    <img
                      className=" absolute -top-6 left-1/2 -translate-x-1/2 p-1 bg-white  rounded-full "
                      src={review.image}
                      alt=""
                    />

                    <div className="mt-10 absolute text-center">
                      <h3 className="text-lg font-semibold darK:text-black">
                        {review.name}
                      </h3>
                      <p className="mb-1 dark:text-black">Vairfied Customar</p>
                      <p className="text-gray-500 dark:text-black mb-4">
                        {review.review}
                      </p>

                      <div className="w-full mx-auto mb-2 flex items-center justify-center">
                        <Rating rating={review.rating}></Rating>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </section>
  );
};

export default Testimonials;
