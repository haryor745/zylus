import React from "react";
import { BsArrowRight, BsCheckLg } from "react-icons/bs";
import HeroImg from "./assets/hero-img.svg";
import dsImg from "./assets/DS.png";
import dsImg1 from "./assets/DS 1.png";
import asImg from "./assets/AS.png";
import asImg1 from "./assets/AS 1.png";
import fcImg from "./assets/FC.png";
import fcImg1 from "./assets/FC 1.png";
import rsImg from "./assets/RS.png";
import rsImg1 from "./assets/RS 1.png";
import xaveImg from "./assets/xave-img.png";
import investImg from "./assets/invest-img.png";
import pImg from "./assets/p-img.png";
import "./scss/main.scss";
const platform = [
  {
    id: 1,
    img: false,
    title: "XaveNow",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    link: false,
    btnName: "XaveNow",
    color: "one",
  },
  {
    id: 2,
    img: false,
    title: "Real Estate Cash Back",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    link: false,
    btnName: "Cash Back",
    color: "two",
  },
  {
    id: 3,
    img: false,
    title: "PDSS",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    link: false,
    btnName: "PDSS",
    color: "three",
  },
];
const finance1 = [
  {
    id: 1,
    img: asImg,
    img1: asImg1,
    title: "Auto Save",
    text: "Lorem Ipsum is simply dummy text and printing and typesetting industry plus Ipsum has.",
    btnText: "XaveNow Auto Save",
  },
  {
    id: 2,
    img: dsImg,
    img1: dsImg1,
    title: "Development Saving",
    text: "Lorem Ipsum is simply dummy text and printing and typesetting industry plus Ipsum has.",
    btnText: "PDSS",
  },
  {
    id: 3,
    img: rsImg,
    img1: rsImg1,
    title: "Cash Back on Real Estate",
    text: "Lorem Ipsum is simply dummy text and printing and typesetting industry plus Ipsum has.",
    btnText: "Cash Back",
  },
  {
    id: 4,
    img: fcImg,
    img1: fcImg1,
    title: "Fixed Commmision",
    text: "Lorem Ipsum is simply dummy text and printing and typesetting industry plus Ipsum has.",
    btnText: "Target Savings",
  },
];
function SectionA({ setContent }) {
  return (
    <div
      className="creamCont"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <main className="hero">
        <div className="heroText">
          <h1>Invest in untapped potential.</h1>
          <p>
            With our platform you can dircetly invest and raise capital to grow
            your business.
          </p>
          <div className="heroBtnCont">
            <span>
              <a className="heroBtn btn">Invest Now</a>
            </span>
            <span>
              <a className="cta">
                More Info <BsArrowRight />{" "}
              </a>
            </span>
          </div>
        </div>
        <div className="heroImg">
          <img src={HeroImg} alt="hero image" />
        </div>
      </main>
    </div>
  );
}
function SectionB() {
  return (
    <div className="section sectB">
      <div className="text">
        <h2>One Platform, endless potentials</h2>
        <p>
          An all-in-one finance management platform that makes planning,
          investment and wealth creation experiences easier than ever.
        </p>
      </div>
      <div className="content">
        {platform.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className={`img ${item.color}`}></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>
                <a className="cta">
                  Explore {item.btnName} <BsArrowRight />{" "}
                </a>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function SectionC() {
  return (
    <div className="ashCont">
      <div className="section sectC">
        <div className="cText">
          <h1>Have full control over your finances and business.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum ,{" "}
          </p>
        </div>
        <div className="cContent1">
          {finance1.map((item) => {
            return (
              <div className="box" key={item.id}>
                <img src={item.img} alt="alt" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#" className="cta">
                  <span>
                    <img src={item.img1} alt="img" />
                  </span>{" "}
                  {item.btnText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function SectionD() {
  return (
    <>
      <div className="section sectD one">
        <div className="dText">
          <h2>
            Gain access to platforms optimized for loans and secure savings.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the indus standard dummy text ever
            since the 1500s, when an un printer took a galley of type and
            scrambled it to make specimen book. It has survived not only five
            centuries.
          </p>
          <ul>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Unlimited loans
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Optimized saving platform
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              High interest on savings
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Quick access to loans
            </li>
            <li>
              <span className="btn">Explore Now</span>
            </li>
          </ul>
        </div>
        <div className="dImg">
          <img src={xaveImg} alt="xave-img" />
        </div>
      </div>
      <div className="section sectD two">
        <div className="dImg">
          <img src={investImg} alt="invest-img" />
        </div>
        <div className="dText">
          <h2>
            Business opportunities in Real estate investments and mortgage
            opportunities.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the indus standard dummy text ever
            since the 1500s, when an un printer took a galley of type and
            scrambled it to make specimen book. It has survived not only five
            centuries.
          </p>
          <ul>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Real estate investment
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Mortgage opportunities
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Property acquisitions
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Agro investment
            </li>
            <li>
              <span className="btn">Explore Now</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
function SectionE() {
  return (
    <div className="cont5">
      <div className="section sectE">
        <div className="reviewCont">
          <div className="review1">
            <h4>CASE STUDY</h4>
            <h3>Trusted by the world’s most profit centric teams</h3>
            <p>
              The Zylus Elite cooperative helps individuals and businesses scale
              their finances and businesses positively.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="review2">
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type.
            </h5>
            <div className="person">
              <div className="pImg">
                <img src={pImg} alt="person-image" />
              </div>
              <div className="pText">
                <h6>Alabi Samuel</h6>
                <p>Digital Marketer and Strategist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="member">
          <h2>
            Join Zylus Cooperative within minutes, improve your finance within
            hours.
          </h2>
          <p>
            Join the Zylus cooperative and have access to special finance tips
            and offers that would help build your business.
          </p>
          <a className="btn">Become a Member</a>
        </div>
      </div>
    </div>
  );
}

function Home({ setContent }) {
  return (
    <>
      <SectionA setContent={setContent} />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
    </>
  );
}

export default Home;
