import React from "react";

const ServiceBlock = () => {
  const services = [
    { icon: "teama.svg", label: "Simple & Transparent Pricing" },
    { icon: "link.svg", label: "Robust Data Protection" },
    { icon: "nda.jpg", label: "Fully Signed NDA" },
    { icon: "hi.svg", label: "100% Code Security" },
    { icon: "badge.svg", label: "Easy Exit Policy" },
  ];

  return (
    <section className="service-block pad-tb bg-gradient7 upset">
      <div className="up-curvs">
        <svg
          height="100"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 89.3"
          style={{ enableBackground: "new 0 0 1920 89.3" }}
          fill="#ffe2e2"
        >
          <path
            d="M1919.5,89.5H-0.5c0,0,0-90,0-90c114.9,4.8,228.6,17.9,343.6,24.6c118.6,7,237.4,11.9,356.1,14.7
              c237.6,5.7,475.3,3.1,712.7-7.7c164.2-7.5,328.1-23.7,492.3-31c0.7,0,15.2-0.5,15.2-0.6C1919.5-0.5,1919.5,89.5,1919.5,89.5z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="common-heading ptag">
              <span>We Deliver Our Best</span>
              <h2>Still wondering if we're the right choice? Join Us</h2>
              <p className="mb30 text-dark">
                Become a partner of <span className="tagline-home">KnockOnce</span> and get great digital services for your business. We have a qualified and trained team of developers and designers who strive to offer the best solution for your business at a fair price.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-6 col-sm-6 mt30 wow fadeIn s-div"
              data-wow-delay={`${0.3 * (index + 1)}s`}
              style={{
                visibility: "visible",
                animationDelay: `${0.3 * (index + 1)}s`,
                animationName: "fadeIn",
              }}
            >
              <div className="s-block wide-sblock v-center">
                <div className="s-card-icon-large1">
                  <img
                    src={`https://imaginativo.in/assets/images/icons/${service.icon}`}
                    alt={`Icon representing ${service.label}`}
                    className="img-fluid"
                  />
                </div>
                <div className="s-block-content-large1">
                  <h4>{service.label}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="-cta-btn mt70">
          <div
            className="free-cta-title v-center wow zoomInDown"
            data-wow-delay="0.5s"
            style={{ visibility: "visible", animationDelay: "0.5s", animationName: "zoomInDown" }}
          >
            <p>Let's Start a <span>New Project</span> Together</p>
            <a
              href="/contact"
              className="btn-main bg-btn2 lnk"
            >
              Inquire Now<i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBlock;
