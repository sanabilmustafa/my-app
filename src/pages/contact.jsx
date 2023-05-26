import Footer from '@/components/Footer'
import SearchModal from '@/components/SearchModal'
import Header from '@/page_Containers/header'
import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
       <div class="main-content">
           <Header/> 
            {/* <!-- Breadcrumbs Start -->/ */}
            <div class="rs-breadcrumbs img3">
                <div class="breadcrumbs-inner text-center">
                    <h1 class="page-title">Contact</h1>
                    <ul>
                        <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                            <Link class="active" href="">Home</Link>
                        </li>
                       <li>Contact</li>
                    </ul>
                </div>
            </div>
            {/* <!-- Breadcrumbs End --> */}

            {/* <!-- Contact Section Start --> */}
            <div class="rs-contact pt-120 md-pt-80">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 md-mb-60">
                           <div class="contact-box">
                                <div class="sec-title mb-45">
                                    <span class="sub-text new-text white-color">Let us Talk</span>
                                    <h2 class="title white-color">Speak With Expert Engineers.</h2>
                                </div>
                               <div class="address-box mb-25">
                                   <div class="address-icon">
                                       <i class="fa fa-home"></i>
                                   </div>
                                   <div class="address-text">
                                        <span class="label">Email:</span>
                                        <Link href="tel:123222-8888">(123) 222-8888</Link>
                                   </div>
                               </div>
                               <div class="address-box mb-25">
                                   <div class="address-icon">
                                       <i class="fa fa-phone"></i>
                                   </div>
                                   <div class="address-text">
                                       <span class="label">Phone:</span>
                                       <Link href="#">support@rstheme.com</Link>
                                   </div>
                               </div>
                               <div class="address-box">
                                   <div class="address-icon">
                                       <i class="fa fa-map-marker"></i>
                                   </div>
                                   <div class="address-text">
                                       <span class="label">Address:</span>
                                       <div class="desc">New Jesrsy, 1201, USA</div>
                                   </div>
                               </div>
                           </div>
                        </div> 
                        <div class="col-lg-8 pl-70 md-pl-15">
                            <div class="contact-widget">
                               <div class="sec-title2 mb-40">
                                   <span class="sub-text contact mb-15">Get In Touch</span>
                                   <h2 class="title testi-title">Fill The Form Below</h2>

                               </div>
                                <div id="form-messages"></div>
                                <form id="contact-form" method="post" action="mailer.php"> 
                                    <fieldset>
                                        <div class="row">
                                            <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                <input class="from-control" type="text" id="name" name="name" placeholder="Name" required=""/>
                                            </div> 
                                            <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                <input class="from-control" type="text" id="email" name="email" placeholder="E-Mail" required=""/>
                                            </div>   
                                            <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                <input class="from-control" type="text" id="phone" name="phone" placeholder="Phone Number" required=""/>
                                            </div>   
                                            <div class="col-lg-6 mb-30 col-md-6 col-sm-6">
                                                <input class="from-control" type="text" id="website" name="website" placeholder="Your Website" required=""/>
                                            </div>
                                      
                                            <div class="col-lg-12 mb-30">
                                                <textarea class="from-control" id="message" name="message" placeholder="Your message Here" required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="btn-part">                                            
                                            <div class="form-group mb-0">
                                                <input class="readon learn-more submit" type="submit" value="Submit Now"/>
                                            </div>
                                        </div> 
                                    </fieldset>
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="map-canvas pt-120 md-pt-80">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3620.4527936595364!2d66.99496474008609!3d24.848380378028956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1685026072725!5m2!1sen!2s" ></iframe>
                </div> 
            </div>
            {/* <!-- Contact Section Start --> */}

        </div> 
        {/* <!-- Main content End --> */}
        <Footer/>
        {/* <!-- start scrollUp  --> */}
        <div id="scrollUp" class="orange-color">
            <i class="fa fa-angle-up"></i>
        </div>
        {/* <!-- End scrollUp  --> */}

       <SearchModal/>
    </div>
  )
}
