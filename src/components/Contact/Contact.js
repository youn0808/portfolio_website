import React from "react";
import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import SocialsLink from "./SocialsLink";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_dxp8mmr",
      "template_r6ncwvh",
      form.current,
      "45o6--Rj1xMrFJ7OJ"
    );
    e.target.reset();
  };

  return (
    <section id="contact" className={classes.contact_section}>
      <h1>Contact Me</h1>
      <div className={classes["contact__container"]}>
        <div className={classes.contact__options}>
          <div className={classes.contact__option}>
            <span className={classes.contact__option_icon}>
              <AiOutlinePhone />
            </span>
            <h4>Contact Number</h4>
            <h5>+1 204 869 1756</h5>
            <a href="mailto:hhwannn2@gmail.com"></a>
          </div>
          <div className={classes.contact__option}>
            <span className={classes.contact__option_icon}>
              <MdOutlineEmail />
            </span>
            <h4>Email</h4>
            <h5>hhwannn2@gmail.com</h5>
            <a href="mailto:hhwannn2@gmail.com">Send a email</a>
          </div>

          <div className={classes.contact__option}>
            <span className={classes.contact__option_icon}>
              <BsWhatsapp />
            </span>
            <h4>WhatsApp</h4>
            <h5>+12048691756</h5>
            <a href="https://api.whatsapp.com/send?phone=+12048691756">
              Send a message
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />

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
      <SocialsLink />
    </section>
  );
};

export default Contact;
