import React, { useState } from "react";
import "./app.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProcessSection from "./components/processSection/ProcessSection.jsx";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";
import { FaArrowCircleUp } from "react-icons/fa";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <Navbar />
      <div class="content-wrapper">
        <Home />
        <Services />
        <ProcessSection />
        <About />
        <Testimonial />
        <Contact />
      </div>
      <div class="position-absolute right-0">
        <button>
          <FaArrowCircleUp
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
          />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
