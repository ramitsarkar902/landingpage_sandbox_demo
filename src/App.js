import React from "react";
import "./app.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import ProcessSection from "./components/processSection/ProcessSection.jsx";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonials/Testimonial";
function App() {
  return (
    <div class="content-wrapper">
      <Services />
      <ProcessSection />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
