import React from 'react'
import Link from 'next/link'

export default function Blog() {
  return (
    <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-70 md-pb-80">
      <div className="container">
        <div className="sec-title2 text-center mb-30">
          <span className="sub-text">Blogs</span>
          <h2 className="title testi-title">Latest Tips &amp;Tricks</h2>
          <div className="desc">
            Weve been building creative tools together for over a decade and
            have a deep appreciation for software applications
          </div>
        </div>
        <div
          className="rs-carousel owl-carousel blog-items-style"
          data-loop="true"
          data-items={3}
          data-margin={30}
          data-autoplay="true"
          data-hoverpause="true"
          data-autoplay-timeout={5000}
          data-smart-speed={800}
          data-dots="false"
          data-nav="false"
          data-nav-speed="false"
          data-center-mode="false"
          data-mobile-device={1}
          data-mobile-device-nav="false"
          data-mobile-device-dots="false"
          data-ipad-device={2}
          data-ipad-device-nav="false"
          data-ipad-device-dots="false"
          data-ipad-device2={2}
          data-ipad-device-nav2="false"
          data-ipad-device-dots2="false"
          data-md-device={3}
          data-md-device-nav="false"
          data-md-device-dots="false"
        >
          <div className="blog-item">
            <div className="image-wrap">
              <Link href="blog-details.htm">
                <img src="assets/images/blog/main-home/my-blog1.jpeg" alt="" />
              </Link>
              <ul className="post-categories">
                <li>
                  <Link href="/blog">Software Development</Link>
                </li>
              </ul>
            </div>
            <div className="blog-content">
              <ul className="blog-meta">
                <li className="date">
                  <i className="fa fa-calendar-check-o" /> 16 Nov 2020
                </li>
                <li className="admin">
                  <i className="fa fa-user-o" /> admin
                </li>
              </ul>
              <h3 className="blog-title">
                <Link href="/blog">
                  Necessity May Give Us Your Best Virtual Court System
                </Link>
              </h3>
              <p className="desc">
                We denounce with righteous indige nation and dislike men who are
                so beguiled...
              </p>
              <div className="blog-button">
                <Link href="/blog">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <div className="image-wrap">
              <Link href="blog-details.htm">
                <img src="assets/images/blog/main-home/my-blog2.jpeg" alt="" />
              </Link>
              <ul className="post-categories">
                <li>
                  <Link href="/blog"> Web Development</Link>
                </li>
              </ul>
            </div>
            <div className="blog-content">
              <ul className="blog-meta">
                <li className="date">
                  <i className="fa fa-calendar-check-o" /> 20 December 2020
                </li>
                <li className="admin">
                  <i className="fa fa-user-o" /> admin
                </li>
              </ul>
              <h3 className="blog-title">
                <Link href="/blog">
                  Tech Products That Makes Its Easier to Stay at Home
                </Link>
              </h3>
              <p className="desc">
                We denounce with righteous indige nation and dislike men who are
                so beguiled...
              </p>
              <div className="blog-button">
                <Link href="/blog">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <div className="image-wrap">
              <Link href="blog-details.htm">
                <img src="assets/images/blog/main-home/my-blog4.jpeg" alt=""  />
              </Link>
              <ul className="post-categories">
                <li>
                  <Link href="/blog">It Services</Link>
                </li>
              </ul>
            </div>
            <div className="blog-content">
              <ul className="blog-meta">
                <li className="date">
                  <i className="fa fa-calendar-check-o" /> 22 December 2020
                </li>
                <li className="admin">
                  <i className="fa fa-user-o" /> admin
                </li>
              </ul>
              <h3 className="blog-title">
                <Link href="/blog">
                  Open Source Job Report Show More Openings Fewer
                </Link>
              </h3>
              <p className="desc">
                We denounce with righteous indige nation and dislike men who are
                so beguiled...
              </p>
              <div className="blog-button">
                <Link href="/blog">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
