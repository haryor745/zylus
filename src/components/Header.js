import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";
import dsImg from "../assets/DS.png";
import asImg from "../assets/AS.png";
import rsImg from "../assets/RS.png";
import { useState, useEffect } from "react/cjs/react.development";
function Header({ content, setContent }) {
  const [center, setCenter] = useState("");

  function checkMenu() {
    if (content !== "Products" || "Company") {
      setContent("");
    } else {
      setContent("Products");
    }
  }
  useEffect(() => {
    // checkMenu();
  }, [content]);
  return (
    <div
      className="header"
      onMouseOver={(e) => {
        if (!e.target.classList.contains("hk")) {
          setContent("");
        }
      }}
    >
      <div className="headerInner">
        <div className="logo">
          <Link to="/">
            <a>
              <img src={logo} alt="logo" className="logo-img" />
            </a>
          </Link>
        </div>
        <div className="linksCont">
          <ul
            className="headerLinks"
            onMouseOver={(e) => {
              const temp = e.target.getBoundingClientRect();
              const centerCalc = (temp.left + temp.right) / 2;
              setContent(e.target.textContent);
              setCenter(centerCalc);
            }}
          >
            <li className="linkList hk">
              <a className="link hk">Products</a>
              <BsChevronDown />
            </li>
            <li className="linkList hk">
              <a className="link hk">Company</a>
              <BsChevronDown />
            </li>
            <li className="linkList">
              <a className="link">Partner</a>
            </li>
            <li className="linkList">
              <Link to="/contact">
                <a className="link">Contact Us</a>
              </Link>
            </li>
            <li className="linkList">
              <a className="link btn">Learn More</a>
            </li>
          </ul>
        </div>
      </div>
      {content === "Products" && (
        <aside
          className="menu hk"
          style={{
            left: center,
          }}
        >
          <div className="contBig hk">
            <div className="cont hk">
              <a href="#" className="cta hk">
                <span className="hk">
                  <img src={asImg} alt="img" className="hk" />
                </span>{" "}
                XaveNow
              </a>
              <a href="#" className="cta hk">
                <span>
                  <img src={dsImg} alt="img" className="hk" />
                </span>{" "}
                PDSS
              </a>
            </div>
            <a href="#" className="cta hk">
              <span>
                <img src={rsImg} alt="img" className="hk" />
              </span>{" "}
              Real Estate Cashback
            </a>
          </div>
        </aside>
      )}
      {content === "Company" && (
        <aside
          className="menu hk"
          style={{
            left: center,
          }}
          onMouseOver={() => {
            setContent("Company");
          }}
        >
          <div className="contBig2 hk">
            <a href="#" className="cta hk">
              About Us
            </a>
            <a href="#" className="cta hk">
              Career
            </a>
          </div>
        </aside>
      )}
    </div>
  );
}
export default Header;
