import React from 'react';
import Layout from '../component/Layout.js';
import { FaEnvelope, FaPhoneAlt, FaRegAddressCard } from 'react-icons/fa';  // Import React Icons
import contactImage from '../image1/contact.jpg'
  // Import the CSS file for this page

const Contact = () => {
  return (
    <Layout title={"contact us"}>
              <div className="contact-image">
          <img
            src={contactImage}
            alt="Contact Us"
            className="image"
          />
        </div>
      <div className="contact-container">
        {/* Header */}
        <h1 className="contact-header">Contact Us</h1>
        <p className="contact-description">Feel free to reach out to us through the following methods:</p>

        {/* Contact Details */}
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope size={40} className="contact-icon" />
            <p className="contact-text">
              Email: <a href="mailto:rohitverma@gmail.com">rohitverma@gmail.com</a>
            </p>
          </div>

          <div className="contact-item">
            <FaPhoneAlt size={40} className="contact-icon" />
            <p className="contact-text">
              Phone: <a href="tel:+1234567890">+916206694804</a>
            </p>
          </div>

          <div className="contact-item">
            <FaRegAddressCard size={40} className="contact-icon" />
            <p className="contact-text">
              Toll-Free: <a href="tel:+18001234567">+1 (800) 123-4567</a>
            </p>
          </div>
        </div>

        {/* Image Section */}

      </div>
    </Layout>
  );
};

export default Contact;
