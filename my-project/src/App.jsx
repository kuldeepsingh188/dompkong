import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Utilies from './components/Utilies'
import Partners from './components/Partners'
import Mint from './components/Mint'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nft from './components/Nft'
import Faq from './components/Faq'
import Kongs from './components/Kongs'
import Roadline from './components/Roadline'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToTop from './components/BackToTop'
import Preloader from './components/Preloader'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='overflow-hidden'>
      <BackToTop />
      <Preloader/>
      <Home />
      <About />
      <Utilies />
      <Kongs />
      <Mint />
      <Roadline/>
      <Nft />
      <Partners />
      <Faq/>
    </div>
  )
}

export default App
