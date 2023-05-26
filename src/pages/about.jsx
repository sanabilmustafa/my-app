import Footer from '@/components/Footer'
import SearchModal from '@/components/SearchModal'
import AboutHistory from '@/components/about-history'
import Message from '@/components/message'
import Technology from '@/components/technology'
import About_section from '@/page_Containers/About_section'
import Breadcrumb from '@/page_Containers/breadcrumb'
import Header from '@/page_Containers/header'
import Process_about from '@/page_Containers/process_about'
import Team_section from '@/page_Containers/team_section'
import React, { useState } from 'react'

export default function About() {


  return (
    <div>
      <div class="main-content">
            
           <Header/>
           <Breadcrumb/> 
           <About_section/> 
           {/* <Team_section/> */}
           <Message/>
           <AboutHistory/>
          
           <Technology/>
           {/* <Process_about/> */}
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
