import React from "react";

const AboutSection = () => {
  return (
    <section className="about-sec-rpb pad-tb" id="aboutus">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="common-heading">
              <span>We Are A Creative Agency</span>
              <h1 className="mb30">
                <span className="text-second">Top-rated</span> Web And Mobile App Development Company
              </h1>
              <p className="text-dark">
                <b>KnockOnce</b> develops custom mobile apps and IT solutions across diverse verticals. We assist clients in executing their projects more effectively by tailoring technologies and processes to their organization’s needs.
              </p>
              <h3 className="mt30 mb30">Big Ideas, Creative People, New Technology</h3>
              <p className='text-dark'>
                We focus on collaborating with organizations to understand their business operations and identify key mission areas that benefit from technological advancements. Our senior developers and solutions engineers bring extensive knowledge and experience to create innovations that enhance and elevate your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
