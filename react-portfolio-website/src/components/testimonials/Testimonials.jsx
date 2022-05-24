import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      {" "}
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="clients__avatar">
            <img src={AVTR1} alt="" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, exercitationem vitae. Similique, doloremque vitae
              fugiat voluptatibus quidem error! Laudantium consectetur minus
              nesciunt autem quo repudiandae enim ratione placeat laborum
              maiores!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="clients__avatar">
            <img src={AVTR1} alt="" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, exercitationem vitae. Similique, doloremque vitae
              fugiat voluptatibus quidem error! Laudantium consectetur minus
              nesciunt autem quo repudiandae enim ratione placeat laborum
              maiores!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="clients__avatar">
            <img src={AVTR1} alt="" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, exercitationem vitae. Similique, doloremque vitae
              fugiat voluptatibus quidem error! Laudantium consectetur minus
              nesciunt autem quo repudiandae enim ratione placeat laborum
              maiores!
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="clients__avatar">
            <img src={AVTR1} alt="" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, exercitationem vitae. Similique, doloremque vitae
              fugiat voluptatibus quidem error! Laudantium consectetur minus
              nesciunt autem quo repudiandae enim ratione placeat laborum
              maiores!
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
