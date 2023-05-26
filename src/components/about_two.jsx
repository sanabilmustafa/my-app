import React from 'react'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'

export default function Abouttwo() { 
  // const skillBars = dynamic(() => import('../../public/js/header-title.js'),{
  //   ssr: false,
  // })
 const [number, setNumber] = useState(0)
 const autoIncrement = () => {
      setInterval(() => {
        setNumber((number) => number + 1)
      }, 100);
 }
 let data = 70
 const pause = () => {
  if (number === data){
      setNumber(number === data)
  }
 }
  return (
    <div>
    <div className="rs-about style2 modify1 pt-120 pb-120 md-pt-70 md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 hidden-md">
            <div className="images">
              <img src="assets/images/about/my-about.jpg" alt=""  />
            </div>
          </div>
          <div className="col-lg-6 pl-60 md-pl-15">
            <div className="sec-title mb-30">
              <div className="sub-text style4-bg">About Us</div>
              <h2 className="title pb-20">
                We Are Increasing Business Success With Technology
              </h2>
              <div className="desc">
              Our goal is to accelerate our growth by expanding our customer base and to provide service to industries
              in every sector of the country.
              </div>
            </div>
            {/* Skillbar Section Start */}
            <div className="rs-skillbar style1 home4">
              <div className="cl-skill-bar">
                {/* Start Skill Bar */}
                <span className="skillbar-title">Software Development</span>
                <div className="skillbar" data-percent={70}>
                  <p className="skillbar-bar orange-bg"></p>
                  <span className="skill-bar-percent" >70%</span>
                </div>
                {/* Start Skill Bar */}
                <span className="skillbar-title">Cyber Security</span>
                <div className="skillbar" data-percent={80}>
                  <p className="skillbar-bar paste-bg" />
                  <span className="skill-bar-percent">80%</span>
                </div>
                {/* Start Skill Bar */}
                <span className="skillbar-title">Artificial Intelligence</span>
                <div className="skillbar" data-percent={95}>
                  <p className="skillbar-bar blue-bg" />
                  <span className="skill-bar-percent">95%</span>
                </div>
                {/* Start Skill Bar */}
                <span className="skillbar-title">Web Development</span>
                <div className="skillbar" data-percent={78}>
                  <p className="skillbar-bar pink-bg" />
                  <span className="skill-bar-percent">78%</span>
                </div>
                <div className="btn-part mt-45">
                  <Link className="readon started" href="/contact">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            {/* Skillbar Section End */}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
