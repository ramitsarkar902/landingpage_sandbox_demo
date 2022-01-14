import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
function Testimonial() {
  return (
    <section id="testimonials" class="testimonial_section_style">
      <div class="wrapper bg-light pt-5 mt-5 pb-5 ">
        <div class="container py-14 py-md-17">
          <div class="row gx-lg-8 gx-xl-12 gy-6 mb-15 align-items-center d-flex flex-wrap justify-content-between">
            <div class="col-lg-7 order-lg-2">
              <figure>
                <img
                  class="w-auto"
                  src="https://sandbox.elemisthemes.com/assets/img/illustrations/i4.png"
                  srcset="./assets/img/illustrations/i4@2x.png 2x"
                  alt=""
                />
              </figure>
            </div>
            <div class="col-lg-5 mt-lg-12 pb-5 justify-content-center">
              <Carousel>
                <Carousel.Item interval={5000}>
                  <div class="owl-item p-5 mr-0">
                    <div>
                      <blockquote class="icon icon-top fs-lg text-center">
                        <p>
                          “Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vestibulum ligula porta felis
                          euismod semper. Cras justo odio consectetur.”
                        </p>
                        <div class="blockquote-details justify-content-center text-center">
                          <div class="info ps-0">
                            <h5 class="mb-1">Coriss Ambady</h5>
                            <p class="mb-0">Financial Analyst</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <div className="owl-item  p-5 mr-5">
                    <div>
                      <blockquote class="icon icon-top fs-lg text-center">
                        <p>
                          “Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vestibulum ligula porta felis
                          euismod semper. Cras justo odio consectetur.”
                        </p>
                        <div class="blockquote-details justify-content-center text-center">
                          <div class="info ps-0">
                            <h5 class="mb-1">Nikolas Brooten</h5>
                            <p class="mb-0">Sales Manager</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <div className="owl-item  p-5 mr-5">
                    <div>
                      <blockquote class="icon icon-top fs-lg text-center">
                        <p>
                          “Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Vestibulum ligula porta felis
                          euismod semper. Cras justo odio consectetur.”
                        </p>
                        <div class="blockquote-details justify-content-center text-center">
                          <div class="info ps-0">
                            <h5 class="mb-1">Nick Brooten</h5>
                            <p class="mb-0">Design Manager</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div class="px-lg-5"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
