import React from 'react'
import Link from 'next/link'

export default function Message() {
  return (
    <div>
            <div id="rs-blog" class="rs-blog style3 pt-110 pb-120 md-pt-75 md-pb-80">
                <div class="container">  
                    <div class="sec-title2 text-center mb-30">
                        <span class="sub-text">Message by CEO:</span>
                            <h2 class="title testi-title">
                            Message by CEO:
                            </h2>
                        <div class="desc">
                        My company has been delivering persistent quality services while building a solid business foundation amidst a challenging operating environment. My mission is to perpetuate this trajectory into the future and turn Microlinks (PVT) Limited into a leading IT company.
                        </div>
                    </div>
                    <div class="rs-carousel owl-carousel blog-items-style" data-loop="true" data-items="3" data-margin="30" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="false" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="2" data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2="2" data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device="3" data-md-device-nav="false" data-md-device-dots="false">
                        <div class="blog-item">
                            <div class="image-wrap">
                                <Link href="/blog"><img src="assets/images/blog/main-home/vision.jpeg" alt=""/></Link>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><Link href="/blog">My Vision: </Link></h3>
                               <p class="desc">I am well aware of the challenges forthcoming and am fully committed to strengthening our capabilities to enhance our corporate values.</p>
                            </div>
                        </div>
                        <div class="blog-item">
                            <div class="image-wrap">
                                <Link href="/blog"><img src="assets/images/blog/main-home/circle3.jpeg" alt=""/></Link>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><Link href="/blog">My Team: </Link></h3>
                               <p class="desc">My team understands that how we operate is just as crucial as what we
                                    accomplish. It is through the spirit of teamwork and a strong sense of vision that we
                                    strive toward our goal. To keep our quality standards unparalleled, I have set perimeters
                                    of continuous learning for our employees to excel in all markets. My employees
                                    frequently demonstrate resourcefulness and entrepreneurial quality that helps bring
                                exceptional value to the company.</p>
                            </div>
                        </div>
                        <div class="blog-item">
                            <div class="image-wrap">
                                <Link href="/blog"><img src="assets/images/blog/main-home/goal.jpeg" alt=""/></Link>
                            </div>
                            <div class="blog-content">
                               <h3 class="blog-title"><Link href="/blog">We help to achieve mutual goals:</Link></h3>
                               <p class="desc">Looking ahead, I am focused on accelerating the
                                execution of our growth strategy while continuing to build on the strength of our brand
                                – in helping our clients share knowledge and inspire innovation.</p>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
    </div>
  )
}
