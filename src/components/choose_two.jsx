import React from 'react'
import Link from 'next/link'

export default function ChooseTwo() {
  return (
    <div className="rs-why-choose style2 gray-color rs-rain-animate pt-120 pb-120 md-pt-70 md-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7 md-mb-30">
            <div className="sec-title mb-40">
              <div className="sub-text style4-bg left">Let us Talk</div>
              <h2 className="title pb-20">Speak With Expert Engineers.</h2>
              <div className="desc">
                From its medieval origins to the digital era, learn everything
                there
                <br />
                is to know about the ubiquitous lorem ipsum passage.
              </div>
            </div>
            <div className="services-wrap mb-25">
              <div className="services-icon">
                <img src="assets/images/choose/icons/style2/1.png" alt="" />
              </div>
              <div className="services-text">
                <h3 className="title">
                  <Link href="#">Email</Link>
                </h3>
                <p className="services-txt">support@rstheme.com</p>
              </div>
            </div>
            <div className="services-wrap mb-25">
              <div className="services-icon">
                <img src="assets/images/choose/icons/style2/2.png" alt="" />
              </div>
              <div className="services-text">
                <h3 className="title">
                  <Link href="#">Call Us</Link>
                </h3>
                <p className="services-txt"> (+01) 555 - 9811 - 444</p>
              </div>
            </div>
            <div className="services-wrap">
              <div className="services-icon">
                <img src="assets/images/choose/icons/style2/3.png" alt=""  />
              </div>
              <div className="services-text">
                <h3 className="title">
                  <Link href="#">Office Address</Link>
                </h3>
                <p className="services-txt">
                  374 FA Tower, William S Blvd
                  <br /> 2721, IL, USA
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="rs-contact mod1">
              <div className="contact-wrap">
                <div className="content-part mb-25">
                  <h2 className="title mb-15">Schedule Appointment</h2>
                  <p className="desc">We here to help you 24/7 with experts</p>
                </div>
                <div id="appointment-messages" />
                <form
                  id="appointment-form"
                  method="post"
                  action="appointment.php"
                >
                  <fieldset>
                    <div className="row">
                      <div className="col-lg-12 mb-15">
                        <input
                          className="from-control"
                          type="text"
                          id="appointment_name"
                          name="appointment_name"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 mb-15">
                        <input
                          className="from-control"
                          type="text"
                          id="appointment_email"
                          name="appointment_email"
                          placeholder="E-Mail"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 mb-15">
                        <input
                          className="from-control"
                          type="text"
                          id="appointment_phone"
                          name="appointment_phone"
                          placeholder="Phone Number"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 mb-25">
                        <input
                          className="from-control"
                          type="text"
                          id="appointment_website"
                          name="appointment_website"
                          placeholder="Your Website"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="form-group mb-0">
                      <input
                        className="submit-btn"
                        type="submit"
                        defaultValue="Submit Now"
                      />
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-inner">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  )
}
