import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./testimonial.css";
import userimg from "../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"

// Swiper.use([Navigation, Pagination, Scrollbar, A11y])

const user = [
  {
    id: 1,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },

  {
    id: 2,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },

  {
    id: 3,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },

  {
    id: 4,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },

  {
    id: 5,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },

  {
    id: 6,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },

  {
    id: 7,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },

  {
    id: 8,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },

  {
    id: 9,
    userName: "User123",
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui officia aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatdeserunt mollit anim id est laborum.'
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="container testimonial-parent-container">
        <div className="container testimonial-heading">
          <div className="line"></div>
          <h2>Testimonials</h2>
        </div>
        <div className="container testimonial-card-container">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {user.map(user =>(
                <SwiperSlide key={user.id} className="slide">
                    <div className="slide-content">
                        <div className="user-image">
                            <img src={userimg} alt="" className="user-img"/>
                            <p className="user-name">{user.userName}</p>
                        </div>
                        <p className="user-testimonial">{user.testimonial}</p>
                    </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
