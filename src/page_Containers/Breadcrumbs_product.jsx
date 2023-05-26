import React from 'react'
import Link from 'next/link'

export default function Breadcrumbs_product({props}) {
  return (
    <div>
        {/* <!-- Breadcrumbs Start --> */}
        <div class="rs-breadcrumbs img5">
                <div class="breadcrumbs-inner text-center">
                    <h1 class="page-title">{props.title}</h1>
                    <ul>
                        <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                            <Link class="active" href="/">Home</Link>
                        </li>
                        <li>{props.title}</li>
                    </ul>
                </div>
            </div>
        {/* <!-- Breadcrumbs End --> */}
    </div>
  )
}
