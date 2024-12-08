import React from 'react';
import MainLayout from '@/components/MainLayout';
import '../app/globals.css';

const Contact = () => {
  return (
    <MainLayout>
      <section className="breadcrumb-areav2 bg-gradient12 shape-bg3" style={{ height: '300px' }}>
        <div id="breadcrumb-particles-js">
          <div className="container particles-main">
            <div className="col-lg-12 breadcrumb-particles-inner">
              <div className="bread-titlev2">
                <h1
                  className="wow fadeInUp text-white"
                  data-wow-delay=".2s"
                  style={{
                    visibility: 'visible',
                    animationDelay: '0.2s',
                    animationName: 'fadeInUp',
                  }}
                >
                  <span className="text-white">Contact Us</span>
                </h1>
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
                      <span className="text-white text-bold">Contact Us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <canvas
            className="particles-js-canvas-el"
            width="1441"
            height="150"
            style={{ width: '100%', height: '100%' }}
          ></canvas>
        </div>
      </section>
      <section className="enquire-form pad-tb" id="contactus">
        <div className="container">
          <div className="row light-bgs">
            <div className="col-lg-6">
              <div className="common-heading text-l">
                <span>Contact Us</span>
                <h4 className="mt0">
                  Drop us a line! We are here to answer your questions 24/7.
                </h4>
              </div>
              <br />
              <div className="form-block">
                <form action="home/send_email" method="post" name="feedback-form">
                  <div className="fieldsets row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Name" name="name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email" name="email" required />
                    </div>
                  </div>
                  <div className="fieldsets row">
                    <div className="col-md-6">
                      <input type="number" placeholder="Phone" name="phone" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Skype" name="skype" />
                    </div>
                  </div>
                  <div className="fieldsets row">
                    <div className="form-group col-sm-6">
                      <select name="type" id="type" required>
                        <option value="Hire Dedicated Developers">Hire Dedicated Developers</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Web Application Development">Web Application Development</option>
                        <option value="Mobile Application Development">Mobile Application Development</option>
                        <option value="Web and Mobile Application Development">Web and Mobile Application Development</option>
                        <option value="UX/UI Development">UX/UI Development</option>
                        <option value="QA Services">QA Services</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Bulk SMS">Bulk SMS</option>
                        <option value="Industrial Training">Industrial Training</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6"></div>
                  </div>
                  <div className="fieldsets">
                    <textarea placeholder="Message" name="message"></textarea>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck"
                      name="example1"
                      defaultChecked
                    />
                    <label className="custom-control-label text-dark" htmlFor="customCheck">
                      I agree to the <a href="#" style={{ color: 'red' }}>Terms & Conditions</a> of Knockonce Private Limited.
                    </label>
                  </div>
                  {/* reCAPTCHA v2 */}
                  <div className="g-recaptcha" data-sitekey="6LelfFglAAAAAAQP67i_TV7HR0zVonDJYfoNKabW"></div>
                  <div className="fieldsets mt20">
                    <button type="submit" name="submit" className="lnk btn-main bg-btn">
                      Inquiry Now <i className="fas fa-chevron-right fa-icon"></i>
                      <span className="circle"></span>
                    </button>
                  </div>
                  <p className="trm text-dark">
                    <i className="fas fa-lock"></i> We hate spam, and we respect your privacy.
                  </p>
                </form>
              </div>
            </div>
            <div className="col-lg-6 v-center">
              <div className="enquire-image">
                <img
                  src="https://imaginativo.in/assets/images/about/hellopic.png"
                  alt="enquire"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-agency pad-tb bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 v-center">
              <div className="image-block">
                <img
                  src="https://imaginativo.in/assets/images/about/about-image.png"
                  alt="about"
                  className="img-fluid no-shadow"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="common-heading text-l">
                <span>We Are Creative and Innovative Agency</span>
                <h2>About Agency</h2>
                <p className='text-dark'>
                  <b>Imaginativo</b> is India's pre-eminent leading web and mobile application development company
                  with a global presence and the number one choice for clients worldwide. With customer
                  satisfaction in mind, we are deeply devoted to developing exciting applications that strictly
                  meet business needs and oversee a variety of projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-block pad-tb bg-gradient7 upset">
        <div className="up-curvs">
          <svg
            height="100"
            width="100%"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 89.3"
            style={{ enableBackground: 'new 0 0 1920 89.3' }}
            xmlSpace="preserve"
            fill="#ffe2e2"
          >
            <path d="M1919.5,89.5H-0.5c0,0,0-90,0-90c114.9,4.8,228.6,17.9,343.6,24.6c118.6,7,237.4,11.9,356.1,14.7
            c237.6,5.7,475.3,3.1,712.7-7.7c164.2-7.5,328.1-23.7,492.3-31c0.7,0,15.2-0.5,15.2-0.6C1919.5-0.5,1919.5,89.5,1919.5,89.5z"></path>
          </svg>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="common-heading ptag">
                <span>We Deliver Our Best</span>
                <h2>We're Here to Help</h2>
                <p className="mb30">
                  Contact us with your requirements and observe your growth scale with our
                  suggestions and proven approaches.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {[
              {
                imgSrc: 'https://imaginativo.in/assets/images/icons/teama.svg',
                title: 'Communicate Your Requirements',
                description:
                  'In clear communication of your requirements, our team starts to analyze and map different forms, processes and developments.',
              },
              {
                imgSrc: 'https://imaginativo.in/assets/images/icons/badge.svg',
                title: 'Non-Disclosure Agreement',
                description:
                  'NDA guarantees that your business idea is safe with us. We treat every minute of our customers\' information confidentially and pay maximum attention to their privacy.',
              },
              {
                imgSrc: 'https://imaginativo.in/assets/images/icons/link.svg',
                title: 'Understanding The Requirement',
                description:
                  'Once we understand your requirements and design the development process, a team takes over the idea and starts with various approaches to implement it.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="col-lg-12 col-sm-12 mt30 wow fadeIn s-div"
                data-wow-delay={`${0.2 * (index + 1)}s`}
                style={{ visibility: 'visible', animationDelay: `${0.2 * (index + 1)}s`, animationName: 'fadeIn' }}
              >
                <div className="s-block wide-sblock">
                  <div className="s-card-icon">
                    <img src={service.imgSrc} alt="service" className="img-fluid" />
                  </div>
                  <div className="s-block-content1">
                    <h4>{service.title}</h4>
                    <p className='text-dark'>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="-cta-btn mt70">
            <div
              className="free-cta-title v-center wow zoomInDown"
              data-wow-delay="0.5s"
              style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'zoomInDown' }}
            >
              <p className='text-dark'>Let's Start a <span>New Project</span> Together</p>
              <a href="#contactus" className="btn-main bg-btn2 lnk">
                Inquire Now <i className="fas fa-chevron-right fa-icon"></i>
                <span className="circle"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
