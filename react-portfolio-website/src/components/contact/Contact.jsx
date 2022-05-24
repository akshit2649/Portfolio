import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dddummmmyyyy@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Akshit Thakur</h5>
            <a href="" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+123456789"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
