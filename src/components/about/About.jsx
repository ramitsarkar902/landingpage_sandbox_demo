import React, { useState } from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiYoutubeFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io";
function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section id="about" className="section_about_style">
      <div className="wrapper bg-white pt-5 mt-5 mb-5 pb-5">
        <div class="container py-14 py-md-17">
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-4">
              <h2 class=" text-uppercase text-line text-primary text-center mb-3 fs-5">
                Meet the Team
              </h2>
              <h3 class="display-5 mb-5 fw-bold fs-1">
                Save your time and money by choosing our professional team.
              </h3>
              <p class="mb-1" style={{ color: "gray" }}>
                Donec id elit non mi porta gravida at eget metus. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros tempus
                porttitor.
              </p>
              <a href="#" class="btn btn-primary rounded-pill my-5">
                See All Members
              </a>
            </div>
            <div class="col-lg-8 d-flex flex-wrap justify-content-between">
              {/*  <div class="flex "></div> */}
              <div class="item">
                <img
                  class="rounded-circle w-20 mx-auto mb-4"
                  src="https://sandbox.elemisthemes.com/assets/img/avatars/t1.jpg"
                  alt=""
                />
                <h4 class="mb-1">Cory Zamora</h4>
                <div class="meta mb-2">Marketing Specialist</div>
                <p class="mb-2" style={{ color: "gray" }}>
                  Etiam porta sem magna malesuada mollis.
                </p>
                <nav class="nav social justify-content-center text-center mb-0">
                  <a href="https://twitter.com/?lang=en">
                    <IoLogoTwitter />
                  </a>

                  <a href="https://www.linkedin.com/">
                    <RiLinkedinFill />
                  </a>
                  <a href="https://www.instagram.com/">
                    <RiInstagramLine />
                  </a>
                </nav>
              </div>
              <div class="item">
                <img
                  class="rounded-circle w-20 mx-auto mb-4"
                  src="https://sandbox.elemisthemes.com/assets/img/avatars/t3.jpg"
                  srcset="./assets/img/avatars/t3@2x.jpg 2x"
                  alt=""
                />
                <h4 class="mb-1">Nikolas Brooten</h4>
                <div class="meta mb-2">Sales Manager</div>
                <p class="mb-2" style={{ color: "gray" }}>
                  Donec ornare elit quam porta gravida at eget.
                </p>
                <nav class="nav social justify-content-center text-center mb-0">
                  <a href="https://twitter.com/?lang=en">
                    <IoLogoTwitter />
                  </a>
                  <a href="https://www.facebook.com/">
                    <RiFacebookFill />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <RiLinkedinFill />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
