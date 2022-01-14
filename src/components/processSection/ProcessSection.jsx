import React, { useState } from "react";
import "./processSection.css";
function ProcessSection() {
  const [id, setId] = useState("");
  const [collapse, setCollapse] = useState(false);
  return (
    <section id="process" class="sectionStyle">
      <div class="wrapper bg-light pt-5 mt-5">
        <div class="container py-14 py-md-17">
          <div class="row flex gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center ">
            <div class="col-lg-8">
              <figure>
                <img
                  class="w-auto"
                  alt="gg"
                  src="https://sandbox.elemisthemes.com/assets/img/illustrations/i3.png "
                />
              </figure>
            </div>
            <div class="col-lg-4 gg">
              <h2 class="fs-15 text-uppercase text-line text-primary mb-3 fs-5">
                How It Works?
              </h2>
              <h3 class="display-8 mb-10 fw-bold fs-1">
                Everything you need on creating a business process.
              </h3>
              <div class="d-flex flex-row mb-4 mt-4">
                <div>
                  <img
                    src="https://sandbox.elemisthemes.com/assets/img/icons/lineal/light-bulb.svg"
                    className="icon_svg"
                    alt=""
                  />
                </div>
                <div>
                  <h4 class="mb-1">Collect Ideas</h4>
                  <p class="mb-1">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </p>
                </div>
              </div>
              <div class="d-flex flex-row mb-4 mt-4">
                <div>
                  <img
                    src="https://sandbox.elemisthemes.com/assets/img/icons/lineal/pie-chart-2.svg"
                    class="svg-inject icon_svg icon-svg-sm text-blue me-4"
                    alt=""
                  />
                </div>
                <div>
                  <h4 class="mb-1">Data Analysis</h4>
                  <p class="mb-1">Vivamus sagittis lacus augue laoreet vel.</p>
                </div>
              </div>
              <div class="d-flex flex-row my-4">
                <div>
                  <img
                    src="https://sandbox.elemisthemes.com/assets/img/icons/lineal/design.svg"
                    class="icon_svg"
                    alt="no"
                  />
                </div>
                <div>
                  <h4 class="mb-1">Magic Touch</h4>
                  <p class="mb-1 ">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center pt-5 thirdSectionFooterDiv">
            <div class="col-lg-7 order-lg-2">
              <figure>
                <img
                  class="w-full thirdSectionFooterDivImg"
                  src="https://sandbox.elemisthemes.com/assets/img/illustrations/i2.png"
                  alt="gg"
                />
              </figure>
            </div>
            <div class="col-lg-5">
              <h2 class="fs-15 text-uppercase text-line text-primary mb-3 fs-5">
                Why Choose Us?
              </h2>
              <h3 class="display-8 mb-10 fw-bold fs-1">
                A few reasons why our valued customers choose us.
              </h3>
              <div
                class="accordion accordion-wrapper ggb"
                id="accordionExample"
              >
                <div class="card plain accordion-item">
                  <div class="card-header p-0" id="headingOne">
                    <button
                      class="accordion-button accordionButtonCustom bg-light"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      onClick={(e) => {
                        e.preventDefault();
                        setId("collapseOne");
                        setCollapse(!collapse);
                      }}
                    >
                      Professional Design
                    </button>
                  </div>
                  {id === "collapseOne" && collapse && (
                    <div
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div class="card plain accordion-item">
                  <div class="card-header p-0" id="headingOne">
                    <button
                      class="accordion-button accordionButtonCustom"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      onClick={(e) => {
                        e.preventDefault();
                        setId("collapse2");
                        setCollapse(!collapse);
                      }}
                    >
                      Top-Notch Support
                    </button>
                  </div>
                  {id === "collapse2" && collapse && (
                    <div
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div class="card plain accordion-item ">
                  <div class="card-header p-0" id="headingOne">
                    <button
                      class="accordion-button accordionButtonCustom"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      onClick={(e) => {
                        e.preventDefault();
                        setId("collapse3");
                        setCollapse(!collapse);
                      }}
                    >
                      Header and Slider Options
                    </button>
                  </div>
                  {id === "collapse3" && collapse && (
                    <div
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <p>
                          Fusce dapibus, tellus ac cursus commodo, tortor mauris
                          condimentum nibh, ut fermentum massa justo sit amet
                          risus. Cras mattis consectetur purus sit amet
                          fermentum. Praesent commodo cursus magna, vel.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
