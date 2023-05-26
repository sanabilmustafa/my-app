import React from 'react'
import Image from 'next/image'
import Check from '@/page_Containers/check'
import Header from '@/page_Containers/header'
import Breadcrumbs_product from '@/page_Containers/Breadcrumbs_product'
export default function product({data}) {
  return (
    <div>
        <Header/>
        <Breadcrumbs_product props={data}/>
        <div>
            <div>
            <div class="rs-about style4 pb-100 md-pb-70 product-content">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="testing-img img3">
                                <img src={data.main_Image} alt=""/>
                            </div>
                        </div>
                        <div class="col-lg-7 pl-60 md-pl-15 md-pt-60 ">
                            <div class="about-content">
                                <h2 class="title">{data.title}</h2>
                                <p>{data.description}</p>
                                <Check data={data.features}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
export async function getStaticPaths(){
    const data = await import('../../../../data/data.json')
    const products = data.products
    const allPaths = products.map((path)=>{
        return {
            params:{
                cat: path.title,
                id: path.id
            }
        }
    })
    return {
        paths: allPaths,
        fallback : false
    }
}
export async function getStaticProps(context){
    // console.log(context)
    const {products} = await import('../../../../data/data.json')
    const id = context.params.id
    const productsData = products.find((item) =>(
        id === item.id
    ))
    return {
        props : {data : productsData}
    }
}