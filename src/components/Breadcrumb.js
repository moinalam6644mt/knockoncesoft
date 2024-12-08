import React from "react";

const HeroCardWeb = () => {
  return (
    <section className="hero-card-web bg-gradient12 shape-bg3" id="home">
      <div className="hero-main-rp container-fluid">
        <div className="row">
          <div className="col-lg-12">
            {/* Particles.js container */}
            <div id="particles-js">
              <div className="container particles-main" id="particles-main">
                <div className="row particles-inner">
                  <div className="col-lg-12 text-center canvas-text">
                    <div id="text-type">
                      Ecommerce <span>Solutions</span> Service
                    </div>
                    <span className="typed-cursor"></span>
                    <p>
                      Imagine Your <span className="tagline-home">Dream</span> With Our
                      <span className="tagline-home"> Innovation</span> To Make Your Dream Come True
                    </p>
                    <a
                      href="/contact"
                      className="canvas-button-touch text-uppercase"
                      title="Get In Touch"
                    >
                      Get In Touch
                    </a>
                    <a
                      href="#"
                      className="canvas-button-servce text-uppercase"
                      title="Our Services"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
              <canvas
                className="particles-js-canvas-el"
                width="1455"
                height="716"
                style={{ width: "100%", height: "100%" }}
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCardWeb;
