import React from 'react'
import {FaPlay} from 'react-icons/fa'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="rs-banner style3 rs-rain-animate modify1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="banner-content">
            <div className="rs-videos">
              <div className="animate-border white-color style3">
                <Link
                  className="popup-border popup-videos"
                  href="https://www.youtube.com/watch?v=YLN1Argi7ik"
                >
                  {/* <i className="fa fa-play" /> */} <FaPlay/>
                </Link>
              </div>
            </div>
            <h1 className="title">
              Welcome to <br /> Microlinks (PVT) Limited {" "}
            </h1>
            <p className="desc">
              We have the solution for your data management system.
            </p>
            <ul className="banner-btn">
              <li>
                <Link className="readon started" href="/about">
                  Discover More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="images-part my-banner-image hidden-md">
      <img src="assets/images/banner/my-banner.png" alt=""  />
    </div>
    <div className="line-inner style2">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
  </div>
  )
}
