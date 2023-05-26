import React from 'react'

export default function Check({data}) {
    const data_feature = data
    console.log(data_feature)
    if(data_feature === undefined){
        return 
    }

  return (
    <div>
       <div class="rs-why-choose style3 pt-12 pb-12 md-pb-80">
                <div class="container  pt-relative">
                    <div class="row align-items-center">
                        <div class="col-lg-8 md-pb-30">
                            <div class="features-content">
                                <ul class="features-list">
                                     {data_feature.map((i) => (
                                        <li key={i.index}>
                                          <i className='fa fa-check'></i>
                                          <span>{i}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
