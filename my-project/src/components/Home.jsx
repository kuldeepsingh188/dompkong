import React from 'react'
import { DaimendIcon, DiscordIcon, MasterIcon, ShipIcon, TelegramIcon, TwiterIcon } from './Icons'
import Kingkong3 from '../assets/img/webp/kingkong3.webp'
import Kingkong2 from '../assets/img/webp/kingkong2.webp'
import Kingkong from '../assets/img/webp/kong1.webp'
import left_design from '../assets/img/webp/left_design.webp'
import right_design from '../assets/img/webp/right_design.webp'

const Home = () => {
  return (
    <div className='bg_home relative sm:min-h-screen'>
      <div data-aos="fade-right" className='absolute top-0 left-0'><img className='w-100' src={left_design} alt="left_design" /></div>
      <div data-aos="fade-left" className='absolute top-0 right-0'><img className='w-100' src={right_design} alt="right_design" /></div>
      <div data-aos="fade-up"
        data-aos-duration="3000" className='bottom-[0] first:only: right-0 z-[2] absolute sm:block hidden'>
        <img className='w-full' src={Kingkong3} alt="Kingkong3" />
      </div>
      <div data-aos="zoom-in-up"
        data-aos-duration="2000" className='bottom-[0] right-[15%] lg:right-[7%] z-[1] absolute sm:block hidden'>
        <img className='w-full' src={Kingkong2} alt="Kingkong2" />
      </div>
      <div data-aos="zoom-in-up"
        data-aos-duration="1000" className='bottom-[0] right-[44%] lg:right-[28%] xl:right-[24%] absolute md:block hidden'>
        <img className='w-full' src={Kingkong} alt="Kingkong" />
      </div>
      <div className='container mx-auto px-[12px]'>
        <div className='flex justify-end text-[16px] font-normal font-Azo pt-[30px]'>
          <button className='z-[4] bg-[#FDDA60] py-[16px] px-[24px] rounded-[4px] hover:bg-white'>CONNECT WALLET</button>
        </div>
        <div className='flex justify-center gap-[24px] pt-[38px]'>
          <span className='cursor-pointer'><TwiterIcon /></span>
          <span className='cursor-pointer'><ShipIcon /></span>
          <span className='cursor-pointer'> <DaimendIcon /></span>
          <span className='cursor-pointer'><DiscordIcon /></span>
          <span className='cursor-pointer'><MasterIcon /></span>
          <span className='cursor-pointer'><TelegramIcon /></span>
        </div>
        <div className='z-[9]'>
          <h1 data-aos="zoom-in" data-aos-duration="1000" className='font-Azo text-white font-normal md:text-[64px] text-[45px] text-[#fff text-center pt-[39px] z-[33] relative'>WELCOME <span className='block'>TO <span className='text-[#F1C85D] kong relative inline-block'> DomPKong</span></span></h1>
          <p data-aos="zoom-in" data-aos-duration="1000" className='text-[#fff] text-[16px] font-normal font-Montserrat text-center pt-[29px] z-[33] relative'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et.<span className='block'> Erat nam molestie. Vita</span></p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className='gap-[32px] flex sm:flex-row flex-col justify-center pt-[35px] relative z-[11]'>
          <button className='bg-[#FDDA60] m-auto sm:m-0 py-[16px] px-[60px] sm:px-[24px] rounded-[4px] text-[black] text-[16px] font-normal font-Azo hover:bg-white'>
            Whitepaper
          </button>
          <button className='bg-[#FDDA60] m-auto sm:m-0 py-[16px] px-[60px] sm:px-[24px] rounded-[4px] text-[black] text-[16px] font-normal font-Azo hover:bg-white'>
            Mint
          </button>
          <button className='bg-[#FDDA60] m-auto sm:m-0 py-[16px] px-[60px] sm:px-[24px] rounded-[4px] text-[black] text-[16px] font-normal font-Azo hover:bg-white'>
            Opensea
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home