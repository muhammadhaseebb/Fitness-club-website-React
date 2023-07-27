import React from "react";
import "./Join.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_txroree",
        "template_h2omt5a",
        form.current,
        "iCIUX_Ntr4LRNMPW3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To</span>
          <span> Level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className="stroke-text"> With us</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email to join"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
