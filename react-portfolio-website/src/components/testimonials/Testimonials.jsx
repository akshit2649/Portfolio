import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, exercitationem vitae. Similique, doloremque vitae fugiat
            voluptatibus quidem error! Laudantium consectetur minus nesciunt
            autem quo repudiandae enim ratione placeat laborum maiores!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, exercitationem vitae. Similique, doloremque vitae fugiat
            voluptatibus quidem error! Laudantium consectetur minus nesciunt
            autem quo repudiandae enim ratione placeat laborum maiores!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, exercitationem vitae. Similique, doloremque vitae fugiat
            voluptatibus quidem error! Laudantium consectetur minus nesciunt
            autem quo repudiandae enim ratione placeat laborum maiores!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, exercitationem vitae. Similique, doloremque vitae fugiat
            voluptatibus quidem error! Laudantium consectetur minus nesciunt
            autem quo repudiandae enim ratione placeat laborum maiores!
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, exercitationem vitae. Similique, doloremque vitae fugiat
            voluptatibus quidem error! Laudantium consectetur minus nesciunt
            autem quo repudiandae enim ratione placeat laborum maiores!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
