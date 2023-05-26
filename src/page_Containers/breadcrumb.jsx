import React from 'react'
import Link from 'next/link'

export default function Breadcrumb() {
  return (
    <div>
        {/* <!-- Breadcrumbs Start --> */}
            <div class="rs-breadcrumbs img1">
                <div class="breadcrumbs-inner text-center">
                    <h1 class="page-title">About</h1>
                    <ul>
                        <li title="Braintech - IT Solutions and Technology Startup HTML Template">
                            <Link class="active" href="/">Home</Link>
                        </li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        {/* <!-- Breadcrumbs End --> */}
    </div>
  )
}
