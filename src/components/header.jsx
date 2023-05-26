import React, { useState, useEffect } from 'react'
import { FaBars, FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow,FaBarcode, FaPhone, FaPinterest, FaSearch, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

export default function Header(props) {
  const [toggleNav, setToggleNav] = useState(false)

  const [stickyNav, setStickyNav] = useState(false)
  useEffect(()=> {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar)
    };
  }, []);
  const stickNavbar = () =>{
    if (window !== undefined){
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyNav(true) : setStickyNav(false)
    }
  }

  return (
    <div>
    <div className="full-width-header">
    {/*Header Start*/}
    <header
      id="rs-header "
      className="rs-header style3 modify2 header-transparent">
      {/* Menu Start */}
      <div className={`menu-area menu-sticky ${stickyNav ? 'sticky' : ''}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 ">
              <div className="logo-part mobile-menu">
                <Link href="/ ">
                  <img
                    className="normal-logo"
                    src="assets/images/logo-light.png"
                    alt="logo"
                  />
                  <img
                    className="sticky-logo"
                    src="assets/images/logo-dark.png"
                    alt="logo"
                    
                  />
                </Link>
              </div>
              <div className={`mobile-menu `} onClick={()=> setToggleNav(!toggleNav)}>
                <Link href="#" className="rs-menu-toggle rs-menu-toggle-close">
                  <FaBars/>
                </Link>
              </div>
            </div>
            <div className="col-lg-10 text-right">
              <div className="rs-menu-area">
              <div className="main-menu">
                  <nav className="rs-menu pr-100 lg-pr-50 md-pr-0">
                      <ul className={`nav-menu ${toggleNav ? '' : 'mobile-menu-toggle'}`} >
                      <li className="current-menu-item">
                        {" "}
                        <Link href='/'>Home</Link>
                       
                        {/* //.mega-menu */}
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      
                      <li className="menu-item-has-children">
                        <Link href="/blog">Blog</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/blog">Blog</Link>{" "}
                          </li>
                          <li>
                            <Link href="/blog">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='rs-mega-menu menu-item-has-children'>
                        <Link href="/products">Products</Link>
                        <ul className="mega-menu">
                          <li className="mega-menu-container mega-menu-container-bg">
                            <div className="mega-menu-innner">
                              <div className="single-megamenu">
                                <ul className="sub-menu">
                                  <li className="menu-title">
                                    EDUCATION
                                  </li>
                                  <li>
                                    <Link href="/products">EDU Smart</Link>
                                  </li>
                                  <li className="active">
                                    <Link href="/products/Learning%20Management%20System%20(LMS)/lms">
                                      LMS 
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products/HUMAN%20RESOURCE%20MANAGEMENT%20SYSTEM/HR">HRMS</Link>
                                  </li>
                                  <li>
                                    <Link href="/products/DOCUMENT%20LIBRARY./DOCUMENT%20LIBRARY.">
                                      E-Document Library
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products">
                                    Payment Gateway Library    
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="single-megamenu">
                                <ul className="sub-menu">
                                  <li className="menu-title">
                                    MANUFACTURING
                                  </li>
                                  <li>
                                    <Link href="/products/Pharm%20Suite/Pharm%20Suite">Pharm Suite</Link>
                                  </li>
                                  <li>
                                    <Link href="/products/HUMAN%20RESOURCE%20MANAGEMENT%20SYSTEM/HR">
                                      HRMS
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products">E-Documentary Library</Link>
                                  </li>
                                  <li>
                                    <Link href="/products/NACTA%20SCREENING/nactascreening">
                                      NACTA Screening 
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products">
                                      Payment Gateway Integration 
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="single-megamenu">
                                <ul className="sub-menu">
                                  <li className="menu-title">FINANCIAL MARKET</li>
                                  <li>
                                    <Link href="/products/Seams/seams">Seams</Link>
                                  </li>
                                  <li>
                                    <Link href="/products/Tradelinks/Tradelinks">
                                      Tradelinks 
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products/DOCUMENT%20LIBRARY./DOCUMENT%20LIBRARY.">E-Document Library </Link>
                                  </li>
                                  <li>
                                    <Link href="/products">
                                      Payment Gateway Integration 
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products/AMLCFT/AML-CFT">
                                      AML/CFT 
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="single-megamenu">
                                <ul className="sub-menu">
                                  <li className="menu-title">E-COMMERCE</li>
                                  <li>
                                    <Link href="/products/POS%20&%20ACCOUNTING%20SOFTWARE./posand%20accounting%20software">
                                      POS 
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products">
                                      E-Document Library 
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products/HUMAN%20RESOURCE%20MANAGEMENT%20SYSTEM/HR">
                                      HRMS 
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products/NACTA%20SCREENING/nactascreening">
                                      NACTA Screening 
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/products">
                                      Payment Gateway Integration
                                    </Link>
                                  </li>
                                  
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>{" "}
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>{" "}
                    {/* //.nav-menu */}
                  </nav>
                </div>{" "}
                {/* //.main-menu */}
                <div className="expand-btn-inner search-icon hidden-md">
                  <ul>
                    <li className="sidebarmenu-search">
                      <Link
                        className="hidden-xs rs-search"
                        data-bs-toggle="modal"
                        data-bs-target="#searchModal"
                        href="#"
                      >
                        <i><FaSearch/></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        id="nav-expander"
                        className={`humburger nav-expander`}
                        href="#"
                        onClick={props.toggle}
                        //nav expander button outside 
                      >
                        <span className="dot1" />
                        <span className="dot2" />
                        <span className="dot3" />
                        <span className="dot4" />
                        <span className="dot5" />
                        <span className="dot6" />
                        <span className="dot7" />
                        <span className="dot8" />
                        <span className="dot9" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu End */}
    </header>
    {/*Header End*/}
    {/* Canvas Menu start */}
    <nav className={`right_menu_togle`}>
      <div className="close-btn" onClick={ props.toggleOff }>
        <div className="nav-link">
          {/* button inside */}
          <Link id="nav-close" className="humburger nav-expander" href="#" > 
            <span className="dot1" />
            <span className="dot2" />
            <span className="dot3" />
            <span className="dot4" />
            <span className="dot5" />
            <span className="dot6" />
            <span className="dot7" />
            <span className="dot8" />
            <span className="dot9" />
          </Link>
        </div>
      </div>
      <div className="canvas-logo">
        <Link href="/ ">
          <img src="assets/images/logo-dark.png" alt="logo" />
        </Link>
      </div>
      <div className="offcanvas-text">
        <p>
        Our goal is to enhance the corporate value of our company by developing and/or implementing premium
        IT products and services.
        </p>
      </div>
      <div className="canvas-contact">
        <div className="address-area">
          <div className="address-list">
            <div className="info-icon">
              <i><FaLocationArrow/></i>
            </div>
            <div className="info-content">
              <h4 className="title"> &nbsp; Address</h4>
              <em>Office 404 Business Forum, Khalid Bin Walid Rd, MCGP CHS PECHS, Karachi, Karachi City, Sindh</em>
            </div>
          </div>
          <div className="address-list">
            <div className="info-icon">
              <i><FaEnvelope/></i>
            </div>
            <div className="info-content">
              <h4 className="title">&nbsp;Email</h4>
              <em>
                <Link href="mailto:support@rstheme.com">info@microlinks.com.pk</Link>
              </em>
            </div>
          </div>
          <div className="address-list">
            <div className="info-icon">
              <i><FaPhone/></i>
            </div>
            <div className="info-content">
              <h4 className="title">&nbsp;Phone</h4>
              <em>(021) 32627313</em>
            </div>
          </div>
        </div>
        <ul className="social">
          <li>
            <Link href="#">
              <i><FaFacebook/></i>
            </Link>
          </li>
          <li>
            <Link href="#">
            <i><FaTwitter/></i>
            </Link>
          </li>
          <li>
            <Link href="#">
             <i><FaPinterest/></i>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i><FaInstagram/></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    {/* Canvas Menu end */}
  </div>
  </div>
  )
}
