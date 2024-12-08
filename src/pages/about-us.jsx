import MainLayout from '@/components/MainLayout'
import React from 'react'
import '../app/globals.css'
import ServiceBlock from '@/components/ServiceBlock'

const AboutUs = () => {
  return (
    <MainLayout>
      <section className="breadcrumb-areav2 bg-gradient12 shape-bg3">
        <div id="breadcrumb-particles-js">
          <div className="container particles-main">
            <div className="col-lg-12 breadcrumb-particles-inner">
              <div className="bread-titlev2">
                <h2
                  className="wow fadeInUp text-white"
                  data-wow-delay=".2s"
                  style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}
                >
                  Our Company Where <span className="text-primary">affordability meets professionalism</span>
                </h2>
                <p
                  className="mt20 wow fadeInUp"
                  data-wow-delay=".4s"
                  style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}
                >
                  <b>KnockOnce</b> is not just a development company, it is a nucleus of our business. We achieve this status by supporting the progress of our customers' businesses and the growth of our employees. To this end, a culture of balanced working life is promoted.
                </p>
                <a
                  href="/contact"
                  className="btn-main bg-btn2 lnk mt30"
                  data-wow-delay=".6s"
                >
                  Get a Free Consultation <i className="fas fa-chevron-right fa-icon"></i>
                  <span className="circle"></span>
                </a>
              </div>

              <div className="bread-menu custom-margin-top-40">
                <ul>
                  <li>
                    <a href="/">
                      <span className="text-primary">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <span className="text-white text-bold">About Us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <canvas
            className="particles-js-canvas-el"
            width="1441"
            height="337"
            style={{ width: '100%', height: '100%' }}
          ></canvas>
        </div>
      </section>

      <section className="about-agency pad-tb block-1 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 v-center">
              <div className="about-image">
                <img
                  src="https://imaginativo.in/assets/images/about/company-about.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="common-heading text-l">
                <span>About Us</span>
                <h2>Our Vision</h2>
                <p className='text-dark'>
                  At <b>Imaginativo</b>, our goal is to bring technology solutions to our customers' businesses and help them thrive on all fronts. Our vision is to provide customers with sites and applications that have the right mix of technologies for their diverse needs. As experts in mobile and web development technologies, we strive to empower ideas with the latest technologies to reach the pinnacle of success.
                </p>

                <h2>Our Mission</h2>
                <p className='text-dark'>
                  We believe in constant innovation and we take equal responsibility for every project we take on. With a wealth of experience and flexible business models, we want to offer our customers first-class services and technical solutions. As part of our expansion process, we have incorporated revolutionary technologies. We cultivate transparency as one of the hallmarks of our organization. For this, our web and application experts focus on being transparent throughout the work process.
                </p>

                <h2>Quality Policy</h2>
                <p className='text-dark'>
                  Our team of project managers, designers, experienced developers, and team leaders strives to deliver quality to our customers. We create structurally sound business plans while we think about the project. Based on customer requirements, we strategically combine design insights with our business analysis. In addition, we help our customers with initial documentation, schematics, developing an intuitive user experience, and designing real prototypes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose pad-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="common-heading">
                <span>We Are Awesome</span>
                <h2 className="mb30">Our <span className="text-second">Business Philosophy</span></h2>
                <p className="text-dark">
                  <b>Imaginativo</b> is recognized worldwide for its competence, excellence, and agility. We believe in delivering quality and exceeding our customers' expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="row upset">
            <div className="col-lg-6 col-sm-6 mt30">
              <div className="s-block up-hor">
                <div className="s-card-icon">
                  <img
                    src="https://imaginativo.in/assets/images/icons/competence.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Our Core Competence</h4>
                <p className="text-dark">
                  As our customers are successful in their business with our developed solutions, only then do we consider ourselves truly successful. Therefore, our goal is to pass on our commercial and technical expertise to effectively address our customers' pain points.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 mt30">
              <div className="s-block up-hor">
                <div className="s-card-icon">
                  <img
                    src="https://imaginativo.in/assets/images/icons/project-management.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Agile Approach</h4>
                <p className="text-dark">
                  Our agile approach to the development process and our flexible business models are suitable for all types of companies from all parts of the world. Therefore, our goal is to enable our clients to achieve digital transformation at affordable prices with a shorter turnaround time.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 mt30">
              <div className="s-block up-hor">
                <div className="s-card-icon">
                  <img
                    src="https://imaginativo.in/assets/images/icons/handshake.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Our Promise</h4>
                <p className="text-dark">
                  We are an excellence-driven organization dedicated to providing quality service to our customers. That's why we do our work with integrity, dedication, and sincerity.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 mt30">
              <div className="s-block up-hor">
                <div className="s-card-icon">
                  <img
                    src="https://imaginativo.in/assets/images/icons/process.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Our Process</h4>
                <p>
                  At <b>Imaginativo</b>, we adhere to industry best practices to develop and deliver our products to the highest quality. When developing a product, we remain proactive from the beginning to make it an absolute product to the end.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6 mt30">
              <div className="s-block up-hor">
                <div className="s-card-icon">
                  <img
                    src="https://imaginativo.in/assets/images/icons/user-experience.png"
                    alt="service"
                    className="img-fluid"
                  />
                </div>
                <h4>Our Expertise</h4>
                <p>
                  We have made sure to keep up with the upcoming technology trends and are dedicated to providing the best solutions to our customers. As a result, we have expanded our services alongside mainstream software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceBlock />
    </MainLayout>
  )
}

export default AboutUs