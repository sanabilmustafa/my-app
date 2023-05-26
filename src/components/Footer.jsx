import React from 'react'
import { FaClock, FaLocationArrow, FaPaperPlane, FaPhone, FaVoicemail } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="rs-footer" className="rs-footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
            <div className="footer-logo mb-30">
              <Link href="/">
                <img src="assets/images/logo-dark.png" alt="" />
              </Link>
            </div>
            <div className="textwidget pb-30">
              <p>
              MICROLINKS is an IT firm that offers comprehensive tech expertise and proactive IT solutions
              that meet the varying needs of our customers.
              </p>
            </div>
            <ul className="footer-social md-mb-30">
              <li>
                <Link href="#" target="_blank">
                  <span>
                    <i className="fa fa-facebook" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="# " target="_blank">
                  <span>
                    <i className="fa fa-twitter" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="# " target="_blank">
                  <span>
                    <i className="fa fa-pinterest-p" />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="# " target="_blank">
                  <span>
                    <i className="fa fa-instagram" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
            <h3 className="widget-title">IT Services</h3>
            <ul className="site-map">
              <li>
                <Link href="software-development.html">Financial Market Solutions</Link>
              </li>
              <li>
                <Link href="web-development.html">Digital Marketing</Link>
              </li>
              <li>
                <Link href="analytic-solutions.html">Cloud Services</Link>
              </li>
              <li>
                <Link href="cloud-and-devops.html">Web &amp; Application Development</Link>
              </li>
              <li>
                <Link href="product-design.html">Business Applications</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
            <h3 className="widget-title">Contact Info</h3>
            <ul className="address-widget">
              <li>
                <i><FaLocationArrow/></i>
                <div className="desc">
                Office 404 Business Forum, Khalid Bin Walid Rd, MCGP CHS PECHS, Karachi, Karachi City, Sindh
                </div>
              </li>
              <li>
                <i><FaPhone/></i>
                <div className="desc">
                  <Link href="tel:(+880)155-69569">(021) 32627313</Link>
                </div>
              </li>
              <li>
                <i><FaVoicemail/></i>
                <div className="desc">
                  <Link href="mailto:support@rstheme.com">info@microlinks.com.pk</Link>
                </div>
              </li>
              <li>
                <i><FaClock/></i>
                <div className="desc">Opening Hours: 10:00 - 18:00</div>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h3 className="widget-title">Newsletter</h3>
            <p className="widget-desc">
              We denounce with righteous and in and dislike men who are so
              beguiled and demo realized.
            </p>
            <p>
              <input
                type="email"
                name="EMAIL"
                placeholder="Your email address"
                required=""
              />
              <em className="paper-plane">
                <input type="submit" defaultValue="Sign up" />
              </em>
              <i><FaPaperPlane/></i>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row y-middle">
          <div className="col-lg-6 text-right md-mb-10 order-last">
            <ul className="copy-right-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="blog.html">Blog</Link>
              </li>
              <li>
                <Link href="shop.html">Shop</Link>
              </li>
              <li>
                <Link href="faq.html">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="copyright">
              <p>
                © 2022 All Rights Reserved. Developed By{" "}
                <Link href="http://rstheme.com/">RSTheme</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}
