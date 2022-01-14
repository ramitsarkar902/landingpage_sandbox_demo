import React from "react";

function Contact() {
  return (
    <section id="contact" class="contact_section_style">
      <div class="wrapper bg-white">
        <div class="container py-14 py-md-17  py-5 mt-5 mb-5">
          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div class="col-lg-8">
              <figure>
                <img
                  class="w-auto"
                  src="https://sandbox.elemisthemes.com/assets/img/illustrations/i5.png"
                  srcset="./assets/img/illustrations/i5@2x.png 2x"
                  alt=""
                />
              </figure>
            </div>

            <div class="col-lg-4">
              <h2 class="fs-5 text-uppercase text-line text-primary text-center mb-3">
                Get In Touch
              </h2>
              <h3 class="display-5 mb-7 fw-bold fs-1">
                Got any questions? Don't hesitate to get in touch.
              </h3>
              <div class="d-flex flex-row">
                <div>
                  <div class="icon text-primary fs-28 me-4 mt-n1">
                    {" "}
                    <i class="uil uil-location-pin-alt"></i>{" "}
                  </div>
                </div>
                <div>
                  <h5 class="mb-1 ">Address</h5>
                  <address style={{ color: "gray" }}>
                    Moonshine St. 14/05 Light City, London
                  </address>
                </div>
              </div>
              <div class="d-flex flex-row">
                <div>
                  <div class="icon text-primary fs-28 me-4 mt-n1">
                    {" "}
                    <i class="uil uil-phone-volume"></i>{" "}
                  </div>
                </div>
                <div>
                  <h5 class="mb-1">Phone</h5>
                  <p style={{ color: "gray" }}>00 (123) 456 78 90</p>
                </div>
              </div>
              <div class="d-flex flex-row">
                <div>
                  <div class="icon text-primary fs-28 me-4 mt-n1">
                    {" "}
                    <i class="uil uil-envelope"></i>{" "}
                  </div>
                </div>
                <div>
                  <h5 class="mb-1">E-mail</h5>
                  <p class="mb-0">
                    <a href="mailto:sandbox@email.com" class="link-body">
                      sandbox@email.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
