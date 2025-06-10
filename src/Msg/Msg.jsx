import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import './Msg.css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import alice from '../assets/images/desktop/pexels-kampus-5920774.jpg'

const testimonials = [
  {
    name: "Alice Johnson",
    text: "This service is fantastic. Highly recommended This service is fantastic. Highly recommended!This service is fantastic. Highly recommended!",
    role: "Product Manager",
  },
  {
    name: "Mark Lee",
    text: "This service is fantastic. Highly recommended!Great user experience and top-notch support.This service is fantastic. Highly recommended!",
    role: "Developer",
  },
  {
    name: "Sara Kim",
    text: "This service is fantastic. Highly recommended!Super intuitive and reliable solution. Loved it!This service is fantastic. Highly recommended!",
    role: "UX Designer",
    
  },
];

const TestimonialSlider = () => {
  return (
        
      <div className="testimonial-slider-container">
        <h1 className="clinet">Client Testmonial</h1>,
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        breakpoints={
          {
            0 :{slidesPerView:1},
            // 768 :{slidesPerView:2},
            1024 :{slidesPerView:3}
          }
        }
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img
                src={alice}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSlider;
