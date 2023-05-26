import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="rs-services style3 rs-rain-animate gray-color pt-120 pb-120 md-pt-70 md-pb-80">
    <div className="container">
      <div className="row md-mb-60">
        <div className="col-lg-6 mb-60 md-mb-20">
          <div className="sec-title2 md-center">
            <span className="sub-text">Services</span>
            <h2 className="title testi-title">
              What Solutions We Provide to Our Valued Customers
            </h2>
          </div>
        </div>
        <div className="col-lg-6 mb-60 md-mb-0">
          <div className="btn-part text-right mt-60 md-mt-0 md-center">
            <Link className="readon started" href="">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-20">
          <div className="services-item">
            <div className="services-icon">
              <div className="image-part">
                <img
                  className="main-img"
                  src="assets/images/services/style2/main-img/1.png"
                  alt=""
                  width={100}
                />
                <img
                  className="hover-img"
                  src="assets/images/services/style2/hover-img/1.png"
                  alt=""
                  width={100}
                />
              </div>
            </div>
            <div className="services-content">
              <div className="services-text">
                <h3 className="title">
                  <Link href="#">Financial Market Solutions</Link>
                </h3>
              </div>
              <div className="services-desc">
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  etiusto odio data center for managing database.
                </p>
              </div>
              <div className="serial-number">01</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-20">
          <div className="services-item pink-bg">
            <div className="services-icon">
              <div className="image-part">
                <img
                  className="main-img"
                  src="assets/images/services/style2/main-img/2.png"
                  alt=""
                  width={100}
                  height={100}
                />
                <img
                  className="hover-img"
                  src="assets/images/services/style2/hover-img/2.png"
                  alt=""
                  width={100}
                  height={100}
                  
                />
              </div>
            </div>
            <div className="services-content">
              <div className="services-text">
                <h3 className="title">
                  <Link href="#">Digital Marketing</Link>
                </h3>
              </div>
              <div className="services-desc">
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  etiusto odio data center for managing database.
                </p>
              </div>
              <div className="serial-number">02</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-20">
          <div className="services-item aqua-bg">
            <div className="services-icon">
              <div className="image-part">
                <img
                  className="main-img"
                  src="assets/images/services/style2/main-img/3.png"
                  alt=""
                  width={100}
                  height={100}
                  
                />
                <img
                  className="hover-img"
                  src="assets/images/services/style2/hover-img/3.png"
                  alt=""
                  width={100}
                  height={100}
                  
                />
              </div>
            </div>
            <div className="services-content">
              <div className="services-text">
                <h3 className="title">
                  <Link href="#">Cloud Services</Link>
                </h3>
              </div>
              <div className="services-desc">
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  etiusto odio data center for managing database.
                </p>
              </div>
              <div className="serial-number">03</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 md-mb-20">
          <div className="services-item paste-bg">
            <div className="services-icon">
              <div className="image-part">
                <img
                  className="main-img"
                  src="assets/images/services/style2/main-img/4.png"
                  alt=""
                  width={100}
                  height={100}
                  
                />
                <img
                  className="hover-img"
                  src="assets/images/services/style2/hover-img/4.png"
                  alt=""
                  width={100}
                  height={100}
                  
                />
              </div>
            </div>
            <div className="services-content">
              <div className="services-text">
                <h3 className="title">
                  <Link href="#">Web &amp; Application Development</Link>
                </h3>
              </div>
              <div className="services-desc">
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  etiusto odio data center for managing database.
                </p>
              </div>
              <div className="serial-number">04</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 sm-mb-20">
          <div className="services-item blue-bg">
            <div className="services-icon">
              <div className="image-part">
                <img
                  className="main-img"
                  src="assets/images/services/style2/main-img/5.png"
                  alt=""
                  height={100}
                  width={100}
                />
                <img
                  className="hover-img"
                  src="assets/images/services/style2/hover-img/5.png"
                  alt=""
                  height={100}
                  width={100}
                />
              </div>
            </div>
            <div className="services-content">
              <div className="services-text">
                <h3 className="title">
                  <Link href="#">Business Applications</Link>
                </h3>
              </div>
              <div className="services-desc">
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  etiusto odio data center for managing database.
                </p>
              </div>
              <div className="serial-number">05</div>
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
