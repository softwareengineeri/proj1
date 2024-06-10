import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import './ContactForm.css'; // Import CSS file

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const inputs = form.current.querySelectorAll('.item');
    let hasError = false;

    inputs.forEach((input) => {
      const field = input.closest('.field');
      const errorText = field.querySelector('.error-txt');

      if (input.value.trim() === '') {
        hasError = true;
        field.classList.add('error');
        errorText.style.display = 'block';
      } else {
        field.classList.remove('error');
        errorText.style.display = 'none';
      }
    });

    // If there are validation errors, do not submit the form
    if (hasError) {
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm('service_tydjljd', 'template_zngndsd', form.current, {
        publicKey: 'AP3oMO2gqdfWAKyTL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent Successfully!');
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error sending message. Please try again later.');
        },
      );
  };

  return (
    <>
      <Navbar />
      <div className='contactbox'>
        <section className="contact">
          <h2>Contact Us!</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-box">
              <div className="input-field field">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  className="item"
                  name="user_name"
                  autoComplete="off"
                />
                <div className="error-txt">Full Name can't be blank</div>
              </div>
              <div className="input-field field">
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  className="item"
                  name="user_email"
                  autoComplete="off"
                />
                <div className="error-txt">Email Address can't be blank</div>
              </div>
            </div>
            <div className="textarea-field field">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="item"
                placeholder="Your Message"
                autoComplete="off"
              ></textarea>
              <div className="error-txt">Message can't be blank</div>
            </div>
            <button className="CFbtn" type="submit" value="Send">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactUs;