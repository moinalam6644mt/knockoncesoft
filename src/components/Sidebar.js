import React from 'react';
import '../app/globals.css';
const recentPosts = [
  {
    id: 1,
    image: 'https://imaginativo.in/assets/images/blog/blog-small.jpg',
    title: 'Stock Market App Development - Time, Cost, Features',
    date: 'September 24, 2019',
  },
  {
    id: 2,
    image: 'https://imaginativo.in/assets/images/blog/blog-small2.jpg',
    title: 'Stock Market App Development - Time, Cost, Features',
    date: 'September 24, 2019',
  },
  {
    id: 3,
    image: 'https://imaginativo.in/assets/images/blog/blog-small.jpg',
    title: 'Stock Market App Development - Time, Cost, Features',
    date: 'September 24, 2019',
  },
];

const categories = [
  { name: 'Business', count: 2 },
  { name: 'Financial', count: 3 },
  { name: 'Uncategorized', count: 4 },
  { name: 'Web Design', count: 3 },
  { name: 'WordPress', count: 5 },
];

const tags = [
  'webdesign', 'design', 'graphicdesign', 'website',
  'marketing', 'branding', 'webdevelopment', 'webdesigner',
];

const Sidebar = () => {
  return (
    <div className="col-lg-4 m-mt30 bg-light">
      <div className="sidebar">

        {/* Offer/Ads Section */}
        <div className="offer-image">
          <img
            src="https://imaginativo.in/assets/images/blog/strategy-guide.jpg"
            alt="Offer"
            className="img-fluid"
          />
        </div>

        {/* Recent Posts Section */}
        <div className="recent-post widgets mt60">
          <h3 className="mb30">Recent Posts</h3>
          {recentPosts.map((post) => (
            <div key={post.id} className="media">
              <div className="post-image bdr-radius">
                <a href="#">
                  <img src={post.image} alt="Post" className="img-fluid" />
                </a>
              </div>
              <div className="media-body post-info">
                <h5><a href="#">{post.title}</a></h5>
                <p className='text-dark'>{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Categories Section */}
        <div className="recent-post widgets mt60">
          <h3 className="mb30">Blog Categories</h3>
          <div className="blog-categories">
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <a href="#">
                    {category.name} <span className="categories-number">({category.count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tags Section */}
        <div className="recent-post widgets mt60">
          <h3 className="mb30">Most Used Tags</h3>
          <div className="tabs">
            {tags.map((tag, index) => (
              <a key={index} href="#" className='text-dark'>{tag}</a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
