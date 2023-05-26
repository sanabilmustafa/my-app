import React, { useState } from 'react'
import Header from '@/components/header'
import Banner from '@/components/Banner'
import Partner from '@/components/partner'
import AboutOne from '@/components/about_one'
import Abouttwo from '@/components/about_two'
import ChooseOne from '@/components/choose_one'
import ChooseTwo from '@/components/choose_two'
import Blog from '@/components/Blog'
import Testimonial from '@/components/Testimonial'
import PartnerTwo from '@/components/Partner_two'
import Footer from '@/components/Footer'
import SearchModal from '@/components/SearchModal'
import Services from '@/components/Services'
import Products from '@/components/products'
import Technology from '@/components/technology'

export default function Index(products) {
  const [toggleCanvas, setToggleCanvas] = useState(false)
  
  return (

    <div className={`defult-home ${toggleCanvas ? 'nav-expanded' : ''}`}>
  <div className="offwrap" />
  {/*Preloader area start here*/}
  {/* <div id="loader" className="loader">
    <div className="loader-container" />
  </div> */}
  {/*Preloader area End here*/}
  
  <div className={`main-content `}>

    <Header toggle={()=> setToggleCanvas(true)} toggleOff = {()=> setToggleCanvas(false)} />
    <Banner/>
     {/* <Partner/> */}
    <AboutOne/>
    <Abouttwo/>
    <Services/>
    {/* <Products props={products.products}/>  */}
    <ChooseOne/>
    <ChooseTwo/>
    <Blog/>
     {/* <Testimonial/> */}
     <Technology/>
  </div>
  <Footer/> 
  {/* start scrollUp  */}
  <div id="scrollUp" className="orange-color">
    <i className="fa fa-angle-up" />
  </div>
    <SearchModal/>
</div>

  )
}
export async function getStaticProps(){
  // const id = context?.params.cat;
  const data = await import('../../data/data.json')
  return {
      props:{
          products : data.products
      }
  }
}