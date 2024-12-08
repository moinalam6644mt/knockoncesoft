import React from "react";

const DevelopmentProcess = () => {
  return (
    <section className="service-block pad-tb bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading ptag">
              <span>Process</span>
              <h2>Our Development Process</h2>
              <p className="text-dark">
                <b>KnockOnce</b> openly welcomes passionate people and encourages them to do their best in their respective fields. Together with our team, we work on innovations every day.
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://imaginativo.in/assets/images/development-process.png"
          alt="Development process"
          className="img-fluid"
        />
      </div>
    </section>
  );
};

export default DevelopmentProcess;
