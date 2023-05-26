import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/page_Containers/header'
import Breadcrumb_products from '@/page_Containers/Breadcrumb_products'

export default function Productpage({products}) {
  return (
    <div>
      <Header/>
      <Breadcrumb_products/>
      <div>
      <div className="rs-project style6 modify2 gray-color pt-90 pb-100 md-pt-75 md-pb-80">
                <div className="container">
                    <div className="sec-title2 text-center mb-45">
                        <h2 className="title title7">
                           Our Products
                        </h2>
                    </div>
                    <div className="grid-style row">
                        {products.map((item) => (
                            <Link key={item.id} href={`/products/${item.title}/${item.id}`} passHref>
                                {/* <div className="col-md-6 mb-40"> */}
                            <div className="project-item">
                                <div className="project-img">
                                    <Image src={item.main_Image} alt="images" width={800} height={500}/>
                                    <div className="plus-icon"><i className="fa fa-plus"></i></div>
                                </div>
                                <div className="project-content"> 
                                    <h3 className="title">{item.title}</h3>
                                    <p className="category">{item.mini_desc}</p>
                                </div>
                            {/* </div> */}
                        </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
    </div>
    </div>
   
  )
}

export async function getStaticProps(context){
    // const id = context?.params.cat;
    const {products} = await import('../../../data/data.json')

    return {
        props:{
            products , 
            // pagename: id,
        }
    }
}