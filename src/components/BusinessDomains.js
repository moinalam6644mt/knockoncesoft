import React from "react";

const BusinessDomains = () => {
  return (
    <section className="pad-tb tilt3d bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 v-center">
            <div className="common-heading text-l">
              <h2>Helping Businesses in All Domains</h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="work-card-set">
              {[
                { icon: "icon-1.png", label: "Industrial Training" },
                { icon: "icon-13.png", label: "Custom Mobile App" },
                { icon: "icon-2.png", label: "Digital Marketing" },
                { icon: "icon-4.png", label: "Video Service" },
                { icon: "icon-5.png", label: "Micro-Finance Service" },
                { icon: "icon-6.png", label: "Enterprise Service" },
                { icon: "icon-7.png", label: "Education Service" },
                { icon: "icon-8.png", label: "Tour and Travels" },
                { icon: "icon-9.png", label: "Health Service" },
                { icon: "icon-10.png", label: "Event Management Service" },
                { icon: "icon-3.png", label: "Ecommerce Development" },
                { icon: "icon-12.png", label: "Business Consultant" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`icon-set wow fadeIn`}
                  data-wow-delay={`${0.2 * (index + 1)}s`}
                  style={{ visibility: "visible", animationDelay: `${0.2 * (index + 1)}s`, animationName: "fadeIn" }}
                >
                  <div className={`work-card cd${index + 1}`}>
                    <div className="icon-bg">
                      <img
                        src={`https://imaginativo.in/assets/images/icons/${item.icon}`}
                        alt={item.label}
                      />
                    </div>
                    <p>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDomains;
