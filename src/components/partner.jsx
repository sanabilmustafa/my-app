import React from 'react'
import Link from 'next/link'

export default function Partner() {
  return (
    <div className="rs-partner style2 pt-50 pb-50">
    <div className="container">
      <div
        className="rs-carousel owl-carousel"
        data-loop="true"
        data-items={5}
        data-margin={30}
        data-autoplay="true"
        data-hoverpause="true"
        data-autoplay-timeout={5000}
        data-smart-speed={800}
        data-dots="false"
        data-nav="false"
        data-nav-speed="false"
        data-center-mode="false"
        data-mobile-device={2}
        data-mobile-device-nav="false"
        data-mobile-device-dots="false"
        data-ipad-device={4}
        data-ipad-device-nav="false"
        data-ipad-device-dots="false"
        data-ipad-device2={3}
        data-ipad-device-nav2="false"
        data-ipad-device-dots2="false"
        data-md-device={5}
        data-md-device-nav="false"
        data-md-device-dots="false"
      >
        <div className="partner-item">
          <div className="logo-Image">
            <Link href="https://rstheme.com">
              <img src="assets/images/partner/style2/1.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="partner-item">
          <div className="logo-Image">
            <Link href="https://rstheme.com">
              <img src="assets/images/partner/style2/2.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="partner-item">
          <div className="logo-Image">
            <Link href="https://rstheme.com">
              <img src="assets/images/partner/style2/3.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="partner-item">
          <div className="logo-Image">
            <Link href="https://rstheme.com">
              <img src="assets/images/partner/style2/4.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="partner-item">
          <div className="logo-Image">
            <Link href="https://rstheme.com">
              <img src="assets/images/partner/style2/5.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="partner-item">
          <div className="logo-Image">
            <Link href="https://rstheme.com">
              <img src="assets/images/partner/style2/6.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="partner-item">
          <div className="logo-Image">
            <Link href="https://rstheme.com">
              <img src="assets/images/partner/style2/7.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="partner-item">
          <div className="logo-Image">
            <Link href="https://rstheme.com">
              <img src="assets/images/partner/style2/8.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
