import React from 'react'
import MainLayout from '@/components/MainLayout'
import Sidebar from '@/components/Sidebar';
import CTASection from '@/components/CTASection';

const blogPosts = [
  {
    id: 1,
    image: 'https://imaginativo.in/assets/images/blog/blog-dg-2.jpg',
    category: 'Laravel',
    date: 'Sep 24, 2020',
    title: 'Exploring the Key Features of Laravel 7 Framework',
    description: 'Laravel 7 has no Models directory, and it becomes inconvenient when the number of models used in projects exceeds',
  },
  {
    id: 2,
    image: 'https://imaginativo.in/assets/images/blog/blog-dg-3.jpg',
    category: 'Mobile Application',
    date: 'Sep 25, 2020',
    title: 'Best Technology for Mobile Application Development',
    description: 'Learn more about app design, app development, marketing, and business strategy',
  },
  {
    id: 3,
    image: 'https://imaginativo.in/assets/images/blog/blog-dg-1.jpg',
    category: 'Nodejs',
    date: 'Sep 23, 2020',
    title: 'Everything You Need To Know About Nodejs!',
    description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
  },
];

const blogs = () => {
  return (
    <MainLayout>

      <section className="breadcrumb-areav2 bg-gradient12 shape-bg3">
        <div id="breadcrumb-particles-js">
          <div className="container particles-main">
            <div className="col-lg-12 breadcrumb-particles-inner">
              <div className="bread-titlev2">
                <h1 className="wow fadeInUp text-white" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '.2s', animationName: 'fadeInUp' }}>
                  Useful Resources
                </h1>
                <a href="/contact" className="btn-main bg-btn2 lnk mt30" data-wow-delay=".6s">
                  Get a Free Consultation <i className="fas fa-chevron-right fa-icon"></i><span className="circle"></span>
                </a>
              </div>
              <nav className="bread-menu custom-margin-top-40">
                <ul>
                  <li><a href="/"><span className="text-primary">Home</span></a></li>
                  <li><a href="/blogs"><span className="text-white text-bold">Blogs</span></a></li>
                </ul>
              </nav>
            </div>
          </div>
          <canvas className="particles-js-canvas-el" width="1441" height="337" style={{ width: '100%', height: '100%' }}></canvas>
        </div>
      </section>

      <section className="blog-page pad-tb bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogPosts.map((post) => (
                  <div key={post.id} className="col-lg-6 mt60">
                    <div className="single-blog-post- shdo">
                      <div className="single-blog-img-">
                        <a href="#">
                          <img src={post.image} alt="blog" className="img-fluid" />
                        </a>
                        <div className={`entry-blog-post ${post.id % 2 === 0 ? 'dg-bg2' : 'bg-gradient12'}`}> {/* Conditional styling */}
                          <span className="bypost-">
                            <a href="#">
                              <i className="fas fa-tag"></i> {post.category}
                            </a>
                          </span>
                          <span className="posted-on-">
                            <a href="#">
                              <i className="fas fa-clock"></i> {post.date}
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="blog-content-tt">
                        <div className="single-blog-info-">
                          <h4>
                            <a href="#">{post.title}</a>
                          </h4>
                          <p className='text-dark'>{post.description}</p>
                        </div>
                        <div className="post-social">
                          <div className="ss-inline-share-wrapper ss-hover-animation-fade ss-inline-total-counter-left ss-left-inline-content ss-small-icons ss-with-spacing ss-circle-icons ss-without-labels">
                            <div className="ss-inline-share-content">
                              <div className="ss-social-icons-container">
                                <a href="#">Shares</a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                  <i className="fas fa-envelope"></i>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                  <i className="fab fa-facebook-messenger"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
      <CTASection />
    </MainLayout>
  )
}

export default blogs