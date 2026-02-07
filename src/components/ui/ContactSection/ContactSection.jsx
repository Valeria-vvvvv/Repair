import React from "react";
import "./ContactSection.css";
import ContactForm from "../../forms/ContactForm/ContactForm";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
