import React from "react";
import "./contact.css"

function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="contact-section">
      <h2 id="contact-heading" className="contact-heading">Contact</h2>
      <p>If you’d like to reach out, feel free to connect with me via email or phone. I’m always open to discussing new ideas, collaborations, or opportunities!</p>
      
      <div className="contact-item">
        <h3>Email</h3>
        <p>
          <div className="mail">
          <a href="mailto:sujithraja2023aiml@sece.ac.in" className="contact-link">
            sujithraja2023aiml@sece.ac.in
          </a>
          </div>
        </p>
      </div>

      <div className="contact-item">
        <h3>Phone</h3>
        <p>
          <div className="contact"><a href="tel:+917418884408" className="contact-link">
          +91 7418884408
          </a>
          </div>
        </p>
      </div>
    </section>
  );
}

export default Contact;
