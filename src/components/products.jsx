import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Products({props}) {
   
        const [current, setCurrent] = useState(0);
        const length = props.length;
    
        const nextSlide = () => {
          setCurrent(current === length - 1 ? 0 : current + 1);
        };
      
        const prevSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
        };

        setInterval(()=> nextSlide(), 3000)
      
        // if (!Array.isArray(slides) || slides.length <= 0) {
        //   return null;
        // }
  return (
    <div>
      <div class="rs-project style4 gray-color pt-80 pb-120 md-pt-80 md-pb-80">
                <div class="container-fluid">
                    <div class="sec-title2 text-center mb-45">
                        <span class="sub-text gold-color">products</span>
                        <h2 class="title title2">
                            Our Recent Launched Products Available into Market
                        </h2>
                    </div>
                    <div class="slider ">
                    <FaArrowLeft className='left-arrow' onClick={prevSlide}/>
                    <FaArrowRight className='right-arrow' onClick={nextSlide}/>
                        {props.map((item, index) => (
                             <Link key={item.id} href={`/products/${item.title}/${item.id}`} passHref >
                             <div class={`col-lg-12 col-md-12 mb-30 ${index === current ? 'slide active' : 'slide'}`}>
                                {index === current && (
                                    <div class="project-item image">
                                <div class="project-img">
                                    <img src={item.main_Image} alt=""/>
                                </div>
                                <div class="project-content">
                                     <p class="category">{item.title}</p>
                                     <h3 class="title">{item.title}</h3> 
                                </div>
                             </div>
                                )}
                         </div>
                         </Link>
                        ))}
                    </div>
                </div>
            </div>
    </div>
  )
}

