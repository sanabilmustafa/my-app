import React from 'react'
import Link from 'next/link'

export default function About_section() {
  return (
    <div>
            {/* <!-- About Section Start --> */}
            <div class="rs-about gray-color pt-120 pb-120 md-pt-80 md-pb-80">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 md-mb-30">
                            <div class="rs-animation-shape">
                                <div class="images">
                                   <img src="assets/images/about/Asset 5.png" alt=""/> 
                                </div>
                                <div class="middle-image2">
                                   <img class="dance3" src="assets/images/about/effect-1.png" alt=""/> 
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 pl-60 md-pl-15">
                            <div class="contact-wrap">
                                <div class="sec-title mb-30">
                                    <div class="sub-text style-bg">About Us</div>
                                    <h2 class="title pb-38">
                                    Get to know about us:
                                    </h2>
                                    {/* <div class="desc pb-35">
                                       Over 25 years working in IT services developing software applications and mobile apps for clients all over the world.
                                    </div> */}
                                    <p class="margin-0 pb-15">
                                    MICROLINKS is an IT firm that offers comprehensive tech expertise and proactive IT solutions
that meet the varying needs of our customers. Our company aspires to help turn your
ambitious goals into reality. We seek to integrate modern resources to provide unparalleled
quality services to our clients. We take a consistent approach to recruiting and skill
development of our employees. Our team consists of top-notch and expert consultants,
experienced developers, skilled designers, and proficient QA engineers to streamline and
enhance the performance of your business. We aspire to provide an exceptional caliber of help
&amp; support to our clients to ensure their IT services are in trusted hands.
                                    </p>
                                </div>
                                <div class="btn-part">
                                    <Link class="readon learn-more" href="/contact">Learn-More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="shape-image">
                        <img class="top dance" src="assets/images/about/dotted-3.png" alt=""/>
                    </div>
                </div>
            </div>
            {/* <!-- About Section End --> */}
    </div>
  )
}
