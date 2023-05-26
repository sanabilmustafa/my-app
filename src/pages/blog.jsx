import React from 'react'
import Header from '@/page_Containers/header'
import Footer from '@/components/Footer'
import image from '../../public/assets/images/about/soon.jpeg'
import Image from 'next/image'

export default function blog() {
  return (
    <div>
      <Header/>
      <Image src={image} className='flex justify-center m-44 '/>
      <Footer/>
    </div>
  )
}
