import React from "react";
import "./navbar.css";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";
function Navbar() {
  const history = useHistory();
  return (
    <header class="wrapper bg-light">
      <div className="d-flex flex-row align-items-center justify-content-between position-relative p-1 pb-0 pt-sm-3 pt-md-0">
        <div className=" absolute  pb-0 ml-lg-5 ml-md-4">
          <img
            src="https://sandbox.elemisthemes.com/assets/img/logo.png"
            alt=""
            class="nav_image"
          />
        </div>
        <div class="nav-link d-flex justify-content-between align-items-center hello d-sm-none d-md-flex">
          {" "}
          <LinkS
            className="nav-link-item fs-5"
            style={{ textDecoration: "none", color: "gray" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p className="it">Home</p>
          </LinkS>
          <LinkS
            className="nav-link-item fs-5"
            style={{ textDecoration: "none", color: "gray" }}
            to="services"
            spy={true}
            smooth={true}
            offset={30}
            duration={1000}
          >
            <p className="it">Services</p>
          </LinkS>
          <LinkS
            className="nav-link-item fs-5"
            style={{ textDecoration: "none", color: "gray" }}
            to="process"
            spy={true}
            smooth={true}
            offset={125}
            duration={1000}
          >
            <p className="it">Process</p>
          </LinkS>
          <LinkS
            className="nav-link-item fs-5"
            style={{ textDecoration: "none", color: "gray" }}
            to="about"
            spy={true}
            smooth={true}
            offset={80}
            duration={2000}
          >
            <p className="it">About</p>
          </LinkS>
          <LinkS
            className="nav-link-item fs-5"
            style={{ textDecoration: "none", color: "gray" }}
            to="testimonials"
            spy={true}
            smooth={true}
            offset={10}
            duration={2000}
          >
            <p className="it">Testimonials</p>
          </LinkS>
          <LinkS
            className="nav-link-item fs-5"
            style={{ textDecoration: "none", color: "gray" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={2500}
          >
            <p className="it">Contact</p>
          </LinkS>
        </div>

        <div class="mr-lg-5 p-2"></div>
      </div>
    </header>
  );
}

export default Navbar;
