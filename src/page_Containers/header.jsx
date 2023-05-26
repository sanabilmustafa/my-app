import { useState } from 'react'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
    const [toggleNav, setToggleNav] = useState(true)
  return (
    <div>
       {/* <!--Full width header Start--> */}
       <div class="full-width-header">
                {/* <!--Header Start--> */}
                <header id="rs-header" class="rs-header">
                    {/* <!-- Topbar Area Start --> */}
                    <div class="topbar-area">
                        <div class="container">
                            <div class="row rs-vertical-middle">
                                <div class="col-lg-2">
                                    <div class="logo-part">
                                        <Link href="/"><img src="assets/images/logo-dark.png" alt=""/></Link>
                                    </div>
                                </div>
                                <div class="col-lg-10 text-right">
                                    <ul class="rs-contact-info">
                                        <li class="contact-part">
                                            <i class="flaticon-location"></i>
                                            <span class="contact-info">
                                                <span>Address</span>
                                                Office 404 Business Forum, Khalid Bin Walid Rd,<br /> MCGP CHS PECHS, Karachi City, Sindh
                                            </span>
                                        </li>
                                        <li class="contact-part">
                                            <i class="flaticon-email"></i>
                                            <span class="contact-info">
                                                <span>E-mail</span>
                                                <Link href="#">info@microlinks.com.pk</Link>
                                            </span>
                                        </li>
                                        <li class="contact-part no-border">
                                             <i class="flaticon-call"></i>
                                            <span class="contact-info">
                                                <span>Phone</span>
                                                (021) 32627313
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Topbar Area End --> */}

                    {/* <!-- Menu Start --> */}
                    <div class="menu-area menu-sticky ">
                        <div class="container">
                            <div class="logo-area">
                                <Link href="/">
                                    <img class="sticky-logo" src="assets/images/logo-dark.png" alt="logo"/>
                                </Link>
                            </div>
                            <div class="rs-menu-area">
                                <div class="main-menu">
                                    <div class="mobile-menu">
                                        <Link href="/" class="mobile-logo">
                                            <img src="assets/images/logo-light.png" alt="logo"/>
                                        </Link>
                                        <Link href="#" class="rs-menu-toggle rs-menu-toggle-close">
                                            <FaBars onClick={()=> setToggleNav(!toggleNav)}/>
                                        </Link>
                                    </div>
                                    <nav class={`rs-menu ${toggleNav ? 'rs-menu-hide' : ''}`}>
                                        <ul class="nav-menu">
                                            <li class=" current-menu-item"> <Link href="/">Home</Link> 
                                            </li>
                                            <li class="">
                                                <Link href="/about">About</Link>
                                            </li>
                                            <li class="menu-item-has-children">
                                               <Link href="/blog">Blog</Link>
                                               <ul class="sub-menu">
                                                   <li><Link href="/blog">Blog</Link> </li>
                                               </ul>
                                            </li>
                                            <li className='rs-mega-menu menu-item-has-children '>
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
                                            <li >
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul> 
                                        {/* <!-- //.nav-menu --> */}
                                    </nav>                                        
                                </div>
                                {/* <!-- //.main-menu -->                                 */}
                            </div>
                            <div class="expand-btn-inner search-icon hidden-sticky  hidden-md">
                                <ul>
                                    <li class="sidebarmenu-search">
                                        <Link class="hidden-xs rs-search" data-bs-toggle="modal" data-bs-target="#searchModal" href="#">
                                            <i class="flaticon-search"></i>
                                        </Link>
                                    </li>
                                </ul>
                                <div class="toolbar-sl-share">
                                    <ul class="social">
                                        <li><Link href="#"><i class="fa fa-facebook"></i></Link></li>
                                        <li><Link href="#"><i class="fa fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i class="fa fa-pinterest-p"></i></Link></li>
                                        <li><Link href="#"><i class="fa fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Menu End --> */}
                </header>
                {/* <!--Header End--> */}
            </div>
            {/* <!--Full width header End--> */}
    </div>
  )
}
