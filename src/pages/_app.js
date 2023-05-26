// import '@/styles/globals.css'
import '@/styles/animate.css'
import '@/styles/font-awesome.min.css'
import '@/styles/linea-fonts.css'
import '@/styles/magnific-popup.css'
import '@/styles/off-canvas.css'
import '@/styles/owl.carousel.css'
import '@/styles/responsive.css'
import '@/styles/rs-spacing.css'
import '@/styles/rsmenu-main.css'
import '@/styles/slick.css'
import '@/styles/swiper.min.css'
import '@/styles/bootstrap.min.css'
import '@/styles/style.css'
// import '../styles/style.less'


import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return( 
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}