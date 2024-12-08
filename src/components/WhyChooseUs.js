import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="service-block pad-tb bg-gradient7">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading ptag">
              <span>We Deliver Our Best</span>
              <h2>Why Choose KnockOnce</h2>
              <p className="mb30">
                We work with our clients to provide prime quality websites at competitive rates.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center text-dark">
          {[
            {
              delay: 0.5,
              iconSrc: "https://imaginativo.in/assets/images/icons/link.svg",
              title: "Trusted by People Like You",
              description:
                "We are an excellence-driven organization dedicated to providing a quality service to our customers. And that's why we do our work with integrity, dedication, and honesty.",
            },
            {
              delay: 0.8,
              iconSrc: "https://imaginativo.in/assets/images/icons/tech.svg",
              title: "Complete Technical Competency",
              description:
                "We have made sure to keep up with the upcoming technology trends and are dedicated to providing the best solutions to our customers. As a result, we have expanded our services alongside mainstream software development.",
            },
            {
              delay: 0.2,
              iconSrc: "https://imaginativo.in/assets/images/icons/teama.svg",
              title: "Reliable Service. In House Team",
              description:
                "We can confidently help you to handle your complex software needs. Our dedicated developers are experienced in delivering full-cycle software solutions to all types of businesses, from startups to enterprises.",
            },
            {
              delay: 1.4,
              iconSrc: "https://imaginativo.in/assets/images/icons/badge.svg",
              title: "Excellent Quality Delivered on Time",
              description:
                "We cleave to assiduity stylish practices to develop & deliver our products with superior quality. When developing a product, we remain visionary from the initial phase to shape it into an absolute product until the end.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="col-lg-6 col-sm-6 mt30 wow fadeIn"
              data-wow-delay={`${item.delay}s`}
              style={{
                visibility: "visible",
                animationDelay: `${item.delay}s`,
                animationName: "fadeIn",
              }}
            >
              <div className="s-block wide-sblock">
                <div className="s-card-icon-large1">
                  <img
                    src={item.iconSrc}
                    alt={`Icon for ${item.title}`}
                    className="img-fluid"
                  />
                </div>
                <div className="s-block-content-large">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="-cta-btn mt70">
          <div
            className="free-cta-title v-center wow zoomInDown"
            data-wow-delay="1.8s"
            style={{
              visibility: "visible",
              animationDelay: "1.8s",
              animationName: "zoomInDown",
            }}
          >
            <p>Let's Start a <span>New Project</span> Together</p>
            <a
              href="/contact"
              className="btn-main bg-btn2 lnk"
            >
              Inquire Now
              <i className="fas fa-chevron-right fa-icon"></i>
              <span className="circle"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
