import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_k1rwruq', 'template_vmz51j8', form.current, 'X-QHAFlTZTqlMZtM2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
      <hr />
        <div>
          <span className="outline-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="outline-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">

      <form ref={form} className="email-container" onSubmit={sendEmail}>
      <input type="email" name="user_email" placeholder="Enter Your E-mail Address" />
      <button className="btn btn-j">Join Now</button>



      </form>


      </div>
    </div>
  );
};

export default Join;
