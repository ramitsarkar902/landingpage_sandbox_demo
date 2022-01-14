import React from "react";
import "./app.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ProcessSection from "./components/processSection/ProcessSection.jsx";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";
function App() {
  return (
    <div class="content-wrapper">
      <Home />
      <Services />
      <ProcessSection />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
