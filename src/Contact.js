import React, { useState } from "react";
import "./scss/contact.scss";
import mail from "./assets/email.png";
import phone from "./assets/phone-call.png";
import location from "./assets/location.png";
import facebook from "./assets/facebook 1.png";
import instagram from "./assets/instagram 1.png";
import twitter from "./assets/twitter 1.png";
import linkedin from "./assets/linkedin 1.png";
import { BsArrowRight } from "react-icons/bs";
function Contact({ setContent }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [check, setCheck] = useState("");
  const [check1, setCheck1] = useState(false);
  return (
    <>
      <div
        className="contactCont"
        onMouseOver={() => {
          setContent("");
        }}
      >
        <div className="contactGrid">
          <div className="cGrid1">
            <div className="cText">
              <h2>Reach out to us</h2>
              <p>We would love to hear from you.</p>
            </div>
            <div className="cInfo">
              <p>
                <span>
                  <img src={location} alt="location" />
                </span>
                31, Theophilus Orgi Street, Lekki Phase 1, Lagos
              </p>
              <p>
                <span>
                  <img src={phone} alt="phone" />
                </span>
                +234 81 3226 3740
              </p>
              <p>
                <span>
                  <img src={mail} alt="email" />
                </span>
                info@zylusgroup.com
              </p>
            </div>
          </div>
          <form
            className="cGrid2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="input1">
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input2">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input3">
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                value={message}
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <button className="contact-btn" type="submit">
              Lets's talk
              <span>
                <BsArrowRight />
              </span>
            </button>
          </form>
        </div>
        <div className="contactSocial">
          <a href="#" className="item1">
            <span>
              <img src={facebook} alt="fb" />
            </span>
            Facebook
          </a>
          <a href="#" className="item1">
            <span>
              <img src={instagram} alt="ig" />
            </span>
            Instagram
          </a>
          <a href="#" className="item1">
            <span>
              <img src={linkedin} alt="linkedin" />
            </span>
            LinkedIn
          </a>
          <a href="#" className="item1">
            <span>
              <img src={twitter} alt="twitter" />
            </span>
            Twitter
          </a>
        </div>
      </div>
      <div className="newsCont">
        <div className="news">
          <div className="nText">
            <h2>
              Receiving daily updates from us actually increases your chances of
              getting topnotch services
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <form
            className="cInputs"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Your Email"
              className="inputEmail"
              required
              value={cEmail}
              onChange={(e) => {
                setCEmail(e.target.value);
              }}
            />
            <input
              className="inputTel"
              type="tel"
              placeholder="Phone (Include country code)"
              required
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
            <div className="kk">
              <input
                type="checkbox"
                name="subscribe"
                value={check}
                checked={check1}
                onChange={(e) => {
                  setCheck(e.target.value);
                  setCheck1(!check1);
                }}
              />
              <label htmlFor="subscribe">
                I agree to recieve other communication from Zylus Elite
              </label>
            </div>
            <button type="submit" className="contact-btn">
              Send me mails <BsArrowRight />{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
