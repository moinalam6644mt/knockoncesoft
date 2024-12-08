import React from "react";

const Footer = () => {
  return (
    <footer className="ftshap">
      <div className="footer-svg">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1920 80"
          style={{ enableBackground: "new 0 0 1920 80" }}
          xmlSpace="preserve"
        >
          <path className="st0" d="M0,27.2c589.2,129.4,1044-69,1920,31v-60H3.2L0,27.2z"></path>
        </svg>
      </div>

      <div className="footer-row2">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-sm-6 ftr-brand-pp">
              <a className="navbar-brand mt30 mb25" href="#">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width="250"
                />
              </a>
              <p className="text-dark">
                <b>KnockOnce Pvt. Ltd. </b>
                provides solutions and services across various verticals, helping
                clients execute projects efficiently by optimizing technologies and
                processes within their organizations.
              </p>
              <a
                href="/contact"
                className="btn-main bg-btn3 lnk mt20"
              >
                Become Partner <i className="fas fa-chevron-right fa-icon"></i>
                <span className="circle"></span>
              </a>
            </div>

            <div className="col-lg-3 col-sm-6">
              <h5>Contact Us</h5>
              <ul className="footer-address-list ftr-details">
                <li>
                  <span><i className="fas fa-envelope"></i></span>
                  <p>
                    Email <span><a href="moin.knockonce@gmail.com">moin.knockonce@gmail.com</a></span>
                  </p>
                </li>
                <li>
                  <span><i className="fas fa-phone-alt"></i></span>
                  <p>
                    Phone <span><a href="tel:+91-9525-952621">+91-9525-952621</a></span>
                  </p>
                </li>
                <li>
                  <span><i className="fas fa-map-marker-alt"></i></span>
                  <p>
                    Address <span>City Center, Durgapur</span>
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6">
              <h5>Services</h5>
              <ul className="footer-address-list link-hover">
                <li><a href="#">UI/UX Designing</a></li>
                <li><a href="#">Front-end Development</a></li>
                <li><a href="#">Website Development</a></li>
                <li><a href="#">Mobile App Development</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">Branding & Digital Strategies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="hline" />

      <div className="footer-row2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12 text-center">
              <ul className="footer-link-v2 link-hover mt30">
                <li><a href="#">Customer's FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="hline" />

      <div className="footer-row3">
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-social-media-icons">
                  <a href="https://facebook.com/Imaginativo-infotech-Private-Limited-100166582619862/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                  <a href="https://twitter.com/ImaginativoI" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.instagram.com/imaginativoinfotech/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="footer-">
                  <p>Copyright © 2024 <b>Imaginativo Infotech Private Limited</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
