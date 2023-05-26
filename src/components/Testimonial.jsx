import React from 'react'
import Link from 'next/link'

export default function Testimonial() {
  return (
    <div className="rs-testimonial main-home rs-rain-animate style4 gray-color modify1 md-fixing">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 hidden-md">
          <div className="testi-image">
            <img src="assets/images/testimonial/testimonial-2.png"  alt="" />
          </div>
        </div>
        <div className="col-lg-6 pl-50 md-pl-15">
          <div className="sec-title mb-50">
            <div className="sub-text style4-bg left testi">Testimonials</div>
            <h2 className="title pb-20">What Customer Saying</h2>
            <div className="desc">
              Over 25 years working in IT services developing software
              applications and mobile apps for clients all over the world.
            </div>
          </div>
          <div
            className="rs-carousel owl-carousel"
            data-loop="true"
            data-items={1}
            data-margin={30}
            data-autoplay="true"
            data-hoverpause="true"
            data-autoplay-timeout={5000}
            data-smart-speed={800}
            data-dots="true"
            data-nav="false"
            data-nav-speed="false"
            data-md-device={1}
            data-md-device-nav="false"
            data-md-device-dots="false"
            data-center-mode="false"
            data-ipad-device2={1}
            data-ipad-device-nav2="false"
            data-ipad-device-dots2="false"
            data-ipad-device={1}
            data-ipad-device-nav="false"
            data-ipad-device-dots="true"
            data-mobile-device={1}
            data-mobile-device-nav="false"
            data-mobile-device-dots="false"
          >
            <div className="testi-item">
              <div className="author-desc">
                <div className="desc">
                  <img
                    className="quote"
                    src="assets/images/testimonial/main-home/quote2.png"
                    alt=""
                    
                  />
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide
                  with additional clickthroughs from DevOps. Nanotechnology
                  immersion along the information highway.
                </div>
              </div>
              <div className="testimonial-content">
                <div className="author-Image">
                  <img
                    src="assets/images/testimonial/main-home/1.jpg"
                    alt=""
                    
                  />
                </div>
                <div className="author-part">
                  <Link className="name" href="#">
                    Mariya Khan
                  </Link>
                  <span className="designation">CEO, Brick Consulting</span>
                </div>
              </div>
            </div>
            <div className="testi-item">
              <div className="author-desc">
                <div className="desc">
                  <img
                    className="quote"
                    src="assets/images/testimonial/main-home/quote2.png"
                    alt=""
                    
                  />
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide
                  with additional clickthroughs from DevOps. Nanotechnology
                  immersion along the information highway.
                </div>
              </div>
              <div className="testimonial-content">
                <div className="author-Image">
                  <img
                    src="assets/images/testimonial/main-home/2.jpg"
                    alt=""
                    
                  />
                </div>
                <div className="author-part">
                  <Link className="name" href="#">
                    Sonia Akther
                  </Link>
                  <span className="designation">CEO, Keen IT Solution</span>
                </div>
              </div>
            </div>
            <div className="testi-item">
              <div className="author-desc">
                <div className="desc">
                  <img
                    className="quote"
                    src="assets/images/testimonial/main-home/quote2.png"
                    alt=""
                    
                  />
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide
                  with additional clickthroughs from DevOps. Nanotechnology
                  immersion along the information highway.
                </div>
              </div>
              <div className="testimonial-content">
                <div className="author-Image">
                  <img
                    src="assets/images/testimonial/main-home/3.jpg"
                    alt=""
                    
                  />
                </div>
                <div className="author-part">
                  <Link className="name" href="#">
                    Felando
                  </Link>
                  <span className="designation">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="testi-item">
              <div className="author-desc">
                <div className="desc">
                  <img
                    className="quote"
                    src="assets/images/testimonial/main-home/quote2.png"
                    alt=""
                    
                  />
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide
                  with additional clickthroughs from DevOps. Nanotechnology
                  immersion along the information highway.
                </div>
              </div>
              <div className="testimonial-content">
                <div className="author-Image">
                  <img
                    src="assets/images/testimonial/main-home/4.jpg"
                    alt=""
                    
                  />
                </div>
                <div className="author-part">
                  <Link className="name" href="#">
                    Neymar Vuya
                  </Link>
                  <span className="designation">Arist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="line-inner">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  </div>
  )
}
