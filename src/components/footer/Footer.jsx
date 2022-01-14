import React from "react";
import "./footer.css";
import { IoLogoTwitter } from "react-icons/io";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiYoutubeFill,
  RiLinkedinFill,
} from "react-icons/ri";
function Footer() {
  return (
    <footer class="bg-dark text-inverse">
      <div class="container py-5 py-md-15">
        <div class="row gy-6 gy-lg-0">
          <div class="col-md-4 col-lg-3">
            <div className=" widget1">
              <img
                src="https://sandbox.elemisthemes.com/assets/img/logo-light.png"
                alt=""
                class="mb-4"
              />
              <p class="mb-4">
                © 2021 Sandbox.{" "}
                <span class="d-none d-lg-block">All rights reserved.</span>
              </p>
              <nav class="nav social social-white absolute">
                <a href="https://twitter.com/?lang=en">
                  <IoLogoTwitter />
                </a>
                <a href="https://www.facebook.com/">
                  <RiFacebookFill />
                </a>
                <a href="https://www.linkedin.com/">
                  <RiLinkedinFill />
                </a>
                <a href="https://www.instagram.com/">
                  <RiInstagramLine />
                </a>
                <a href="https://www.youtube.com/">
                  <RiYoutubeFill />
                </a>
              </nav>
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Get in Touch</h4>
              <p class="pe-xl-15 pe-xxl-17">
                Moonshine St. 14/05 Light City, London, United Kingdom
              </p>
              <a href="mailto:#">info@email.com</a>
              <p>+00 (123) 456 78 90</p>
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Learn More</h4>
              <ul class="list-unstyled  mb-0">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-12 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Our Newsletter</h4>
              <p class="mb-5">
                Subscribe to our newsletter to get our news &amp; deals
                delivered to you.
              </p>
              <div class="newsletter-wrapper">
                <div id="mc_embed_signup2">
                  <form
                    action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                    method="post"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    class="validate dark-fields"
                    target="_blank"
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div class="mc-field-group input-group form-floating">
                        <input
                          type="email"
                          class="required email form-control"
                          placeholder="Email Address"
                          id="mce-EMAIL2"
                        />
                        <label for="mce-EMAIL2">Email Address</label>
                        <input
                          type="submit"
                          value="Join"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          class="btn btn-primary "
                        />
                      </div>
                      <div id="mce-responses2" class="clear">
                        <div
                          class="response"
                          id="mce-error-response2"
                          style={{ display: "none" }}
                        ></div>
                        <div
                          class="response"
                          id="mce-success-response2"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                          value=""
                        />
                      </div>
                      <div class="clear"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
