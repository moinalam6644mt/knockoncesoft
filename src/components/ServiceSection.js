import React from "react";

const ServiceSection = () => {
  return (
    <section className="service pad-tb" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <div className="row">
          {/* Image Block */}
          <div className="col-lg-4">
            <div
              className="image-block upset bg-shape wow fadeIn"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <img
                src="https://imaginativo.in/assets/images/about/square-image-1.jpg"
                alt="Front-end Development"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Content Block */}
          <div className="col-lg-8 block-1">
            <div className="common-heading text-l pl25">
              <span style={{ color: "#333" }}>Overview</span>
              <h3 style={{ color: "#222" }}>
                Grow Your Business with Custom Front-end Development and
                Exceptional User Experiences
              </h3>
              <p style={{ color: "#555" }}>
                A compelling digital presence is essential to captivate your
                audience. With engaging and functional user interfaces, we help
                you create a seamless user experience that leaves a lasting
                impression. Partner with us to transform your business
                aspirations into reality.
              </p>
              <p style={{ color: "#555" }}>
                Our front-end developers craft intuitive and data-driven
                interfaces that combine functionality with stunning visuals.
                Whether you're looking for modern designs, responsive features,
                or high scalability, our team ensures your application exceeds
                expectations.
              </p>
              <p style={{ color: "#555" }}>
                The way users interact with your website is a reflection of your
                brand. Our team ensures smooth, fast, and realistic virtual
                experiences that leave users satisfied and impressed. From
                structured, SEO-friendly designs to dynamic, user-centric
                interfaces, we provide solutions tailored to your business
                needs.
              </p>
              <p style={{ color: "#555" }}>
                At <b>Imaginativo</b>, we believe in empowering businesses with
                cutting-edge designs that set them apart. Our experienced
                front-end developers bring your business goals to life through
                streamlined navigation, reliable functionality, and consistent
                performance.
              </p>
              <p style={{ color: "#555" }}>
                Using the latest tools and technologies, we develop responsive,
                versatile, and detail-oriented front-ends. Hire front-end
                developers from India to redefine industry norms with
                pixel-perfect, high-performing designs for all devices and
                platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="-cta-btn mt70">
        <div
          className="free-cta-title v-center wow zoomInDown"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "zoomInDown",
          }}
        >
          <p style={{ color: "#333" }}>
            Begin your <span style={{ color: "#0056b3" }}>Front-end Web App Development</span> Now
          </p>
          <a
            href="/contact"
            className="btn-main bg-btn2 lnk"
            style={{
              backgroundColor: "#0056b3",
              color: "#fff",
              borderRadius: "4px",
              padding: "10px 20px",
            }}
          >
            Talk With Our Expert
            <i className="fas fa-chevron-right fa-icon"></i>
            <span className="circle"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
