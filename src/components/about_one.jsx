import React from 'react'
import Link from 'next/link'

export default function AboutOne() {
  return (
    <div id="rs-about" className="rs-about pt-120 md-pt-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="sec-title mb-50">
            <div className="sub-text style4-bg">About Us</div>
            <h2 className="title pb-20">
              Get to know About Us
            </h2>
            <div className="desc">
                <b>MICROLINKS</b> is an IT firm that offers comprehensive tech expertise and proactive IT solutions that meet the varying needs of our customers. Our company aspires to help turn your ambitious goals into reality. We seek to integrate modern resources to provide unparalleled quality services to our clients. We take a consistent approach to recruiting and skill development of our employees. Our team consists of top-notch and expert consultants, experienced developers, skilled designers, and proficient QA engineers to streamline and enhance the performance of your business. We aspire to provide an exceptional caliber of help & support to our clients to ensure their IT services are in trusted hands.
            </div>
          </div>
          {/* Counter Section Start */}
          <div className="rs-counter style3">
            <div className="container">
              <div className="counter-top-area">
                <div className="row">
                  <div className="col-sm-6 sm-pr-0 sm-pl-0 xs-mb-30">
                    <div className="counter-list">
                      <div className="counter-text">
                        <div className="count-number">
                          <span className="rs-count  orange-color">
                            90%
                          </span>
                        </div>
                        <h3 className="title">Quality Services</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 sm-pr-0 sm-pl-0">
                    <div className="counter-list">
                      <div className="counter-text">
                        <div className="count-number">
                          <span className="rs-count ">80%</span>
                        </div>
                        <h3 className="title">Skilled Employee</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Counter Section End */}
        </div>
        <div className="col-lg-7">
          {/* Services Section Start */}
          <div className="rs-services style3 md-pt-50">
            <div className="container">
              <div className="row">
                <div className="col-md-6 pr-10 pt-40 sm-pt-0 sm-pr-0 sm-pl-0">
                  <div className="services-item mb-20">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src="assets/images/services/style3/main-img/1.png"
                          alt=""
                          
                        />
                        <img
                          className="hover-img"
                          src="assets/images/services/style3/hover-img/1.png"
                          alt=""
                          
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link href="web-development.html">High-quality Code</Link>
                        </h3>
                      </div>
                      {/* <div className="services-desc">
                        <p>
                          At vero eos et accusamus etiusto odio praesentium
                          accusamus.
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="services-item cyan-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src="assets/images/services/style3/main-img/2.png"
                          alt=""
                          
                        />
                        <img
                          className="hover-img"
                          src="assets/images/services/style3/hover-img/2.png"
                          alt=""
                          
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link href="/">Full-stack teams</Link>
                        </h3>
                      </div>
                      {/* <div className="services-desc">
                        <p>
                          At vero eos et accusamus etiusto odio praesentium
                          accusamus.
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-10 sm-pr-0 sm-pl-0 sm-mt-20">
                  <div className="services-item gold-bg mb-20">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src="assets/images/services/style3/main-img/3.png"
                          alt=""
                          
                        />
                        <img
                          className="hover-img"
                          src="assets/images/services/style3/hover-img/3.png"
                          alt=""
                          
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link href="/">Skilled Employees</Link>
                        </h3>
                      </div>
                      {/* <div className="services-desc">
                        <p>
                          At vero eos et accusamus etiusto odio praesentium
                          accusamus.
                        </p>
                      </div> */}
                    </div>
                  </div>
                  <div className="services-item blue-bg">
                    <div className="services-icon">
                      <div className="image-part">
                        <img
                          className="main-img"
                          src="assets/images/services/style3/main-img/4.png"
                          alt=""
                          
                        />
                        <img
                          className="hover-img"
                          src="assets/images/services/style3/hover-img/4.png"
                          alt=""
                          
                        />
                      </div>
                    </div>
                    <div className="services-content">
                      <div className="services-text">
                        <h3 className="title">
                          <Link href="/">High-quality Code</Link>
                        </h3>
                      </div>
                      {/* <div className="services-desc">
                        <p>
                          At vero eos et accusamus etiusto odio praesentium
                          accusamus.
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Section End */}
        </div>
      </div>
    </div>
  </div>
 
  )
}
