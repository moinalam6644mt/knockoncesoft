import React from "react";

const ServiceSection2 = () => {
  return (
    <section className="service-section web-servic pad-tb" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading">
              <span>Services We're Providing</span>
              <h2 className="mb30">Our Design &amp; Development Services</h2>
            </div>
          </div>
        </div>

        <div className="row upset link-hover shape-num justify-content-center">
          {[
            {
              icon: "development.svg",
              label: "Website Design And Development",
              delay: "0.4s",
            },
            {
              icon: "app.svg",
              label: "Mobile App Development",
              delay: "0.6s",
            },
            {
              icon: "marketing.svg",
              label: "Digital Marketing Service",
              delay: "0.8s",
            },
            {
              icon: "branding.svg",
              label: "Logo And Branding Service",
              delay: "0.2s",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 mt30 shape-loc wow fadeInUp"
              data-wow-delay={item.delay}
              style={{ visibility: "visible", animationDelay: item.delay, animationName: "fadeInUp" }}
            >
              <div className="s-block" data-tilt="" data-tilt-max="5" data-tilt-speed="1000">
                <div className="s-card-icon">
                  <img
                    src={`https://imaginativo.in/assets/images/icons/${item.icon}`}
                    alt={item.label}
                    className="img-fluid"
                  />
                </div>
                <h4>{item.label}</h4>
                <a href="#">Learn More <i className="fas fa-chevron-right fa-icon"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
