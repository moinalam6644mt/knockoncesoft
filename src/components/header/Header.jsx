import React from "react";
import logo from '../../../public/assests/images/compony_logo.png'
import d_svg from '../../../public/assests/images/designer.svg'
const Header = () => {
  return (
    <header className="header-pr nav-bg-b main-header navfix fixed-top menu-white">
      <div className="container-fluid m-pad">
        <div className="menu-header">
          {/* Logo Section */}
          <div className="dsk-logo">
            <a className="nav-brand" href="/">
              <img
                src={logo}
                alt="Logo"
                className="mega-white-logo"
              />
              <img
                src={logo}
                alt="Logo"
                className="mega-darks-logo"
              />
            </a>
          </div>

          {/* Navigation Section */}
          <div className="custom-nav" role="navigation">
            <ul className="nav-list onepge">
              <li className="sbmenu">
                <a href="#" className="menu-links">
                  Services
                </a>
                <div className="nx-dropdown">
                  <div className="sub-menu-section">
                    <div className="container">
                      <div className="sub-menu-center-block">
                        <div className="sub-menu-column">
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://imaginativo.in/assets/images/icons/designer.svg"
                                  className="menu-img"
                                  alt="UI/UX Design"
                                />
                                UI/UX Design
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://imaginativo.in/assets/images/icons/development.svg"
                                  className="menu-img"
                                  alt="Website Development"
                                />
                                Website Development
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://imaginativo.in/assets/images/icons/ux.svg"
                                  className="menu-img"
                                  alt="Front-end Development"
                                />
                                Front-end &amp; Back-end Development
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://imaginativo.in/assets/images/icons/app.svg"
                                  className="menu-img"
                                  alt="Mobile App Development"
                                />
                                Mobile App Development
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://imaginativo.in/assets/images/icons/marketing.svg"
                                  className="menu-img"
                                  alt="Digital Marketing"
                                />
                                Digital Marketing
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://imaginativo.in/assets/images/icons/consultant.jpg"
                                  className="menu-img"
                                  alt="Branding & Digital Strategies"
                                />
                                Branding &amp; Digital Strategies
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <img
                                  src="https://imaginativo.in/assets/images/icons/images%20(9).jpeg"
                                  className="menu-img"
                                  alt="Live Streaming"
                                />
                                Live Streaming
                              </a>
                            </li>
                            <li>
                              <a href="/">
                                <img
                                  src="https://imaginativo.in/assets/images/icons/images%20(12).jpeg"
                                  className="menu-img"
                                  alt="OTT Applications & Website"
                                />
                                OTT Applications &amp; Website
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="/blogs" className="menu-links">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="menu-links"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="menu-links"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="btn-br bg-btn3 btshad-b2 lnk"
                >
                  Get a Free Consultation<span className="circle"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Section */}
          <div className="mobile-menu2">
            <ul className="mob-nav2">
              <li className="navm-">
                <a
                  className="toggle hc-nav-trigger hc-nav-1"
                  href="#"
                  role="button"
                  aria-controls="hc-nav-1"
                >
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
