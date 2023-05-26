import React from 'react'
import Link from 'next/link'

export default function ChooseOne() {
  return (
    <div className="rs-why-choose pt-120 pb-120 md-pt-70 md-pb-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 hidden-md">
            <div className="image-part">
              <img src="assets/images/choose/my-choose.jpg" alt="" />
            </div>
            <div className="animation style2">
              <div className="top-shape">
                <img
                  className="dance"
                  src="assets/images/choose/dotted-2.png"
                  alt="images"
                  
                />
              </div>
              <div className="bottom-shape">
                <img
                  className="dance2"
                  src="assets/images/choose/dotted-1.png"
                  alt="images"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl-60 md-pl-15">
            <div className="sec-title mb-40">
              <div className="sub-text style4-bg left">Why Choose Us</div>
              <h2 className="title pb-20">
                We Create Result-Oriented Dynamic Applications
              </h2>
              <div className="desc">
              Our goal is to enhance the corporate value of our company by developing and/or implementing premium IT products and services.
              </div>
            </div>
            <div className="services-wrap mb-25">
              <div className="services-icon">
                <img src="assets/images/choose/icons/1.png" alt=""  />
              </div>
              <div className="services-text">
                <h3 className="title">
                  <Link href="/">First Growing Process</Link>
                </h3>
                <p className="services-txt">
                  {" "}
                 Time is key. we value the time of our customers.
                </p>
              </div>
            </div>
            <div className="services-wrap mb-25">
              <div className="services-icon">
                <img src="assets/images/choose/icons/2.png" alt="" />
              </div>
              <div className="services-text">
                <h3 className="title">
                  <Link href="/">Clean code</Link>
                </h3>
                <p className="services-txt">
                  {" "}
                  understandable code is important to us as it is valuable to our clients.
                </p>
              </div>
            </div>
            <div className="services-wrap">
              <div className="services-icon">
                <img src="assets/images/choose/icons/3.png" alt="" />
              </div>
              <div className="services-text">
                <h3 className="title">
                  <Link href="/">Well Documentation</Link>
                </h3>
                <p className="services-txt">
                  {" "}
                  we try our best to provide you with a well documented files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
