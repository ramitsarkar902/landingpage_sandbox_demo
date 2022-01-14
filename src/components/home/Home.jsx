import React from "react";
import {
  BlinkingCursorTextBuilder,
  FloatingLettersTextBuilder,
} from "react-animated-text-builders";
function Home() {
  return (
    <section id="home">
      <div class="wrapper bg-light  pt-5 mb-5 pb-5">
        <div class="container pt-10 pt-md-14 pb-14 pb-md-17 text-center">
          <div class="row text-center pb-5 mb-5">
            <div
              class="col-lg-9 col-xxl-7 mx-auto"
              data-cues="zoomIn"
              data-group="welcome"
              data-interval="-200"
              data-disabled="true"
            >
              <h2
                class="display-1 mb-4 customized_text fw-bold fs-1"
                data-cue="zoomIn"
                data-interval="-200"
                data-group="welcome"
                data-show="true"
              >
                Creative. Smart. Awesome.
              </h2>
              <p
                class="lead fs-24 lh-sm px-md-5 px-xl-15 px-xxl-10 customized_text"
                data-cue="zoomIn"
                data-interval="-200"
                data-group="welcome"
                data-show="true"
                style={{ color: "gray" }}
              >
                We are an award winning web &amp; mobile design agency that
                strongly believes in the power of creative ideas.
              </p>
            </div>
          </div>

          <div class="row text-center mt-10 mb-5 pb-5">
            <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <figure>
                <img
                  class="w-auto"
                  src="https://sandbox.elemisthemes.com/assets/img/illustrations/i8.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
