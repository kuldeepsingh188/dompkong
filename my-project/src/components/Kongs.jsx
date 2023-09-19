import React from 'react'
import the_kong from '../assets/img/png/the-kong.png'
import kong1 from '../assets/img/png/konng1.png'
import kong2 from '../assets/img/png/kong2.png'
import kong3 from '../assets/img/png/kong3.png'
import kong4 from '../assets/img/png/kong4.png'
import kong5 from '../assets/img/png/kong5.png'
import kongr1 from '../assets/img/png/kongr1.png'
import kongr2 from '../assets/img/png/kongr2.png'
import kongr3 from '../assets/img/png/kongr3.png'
import kongr4 from '../assets/img/png/kongr4.png'
import kongr5 from '../assets/img/png/kongr5.png'
const Kongs = () => {
    return (
      <div className='md:relative bg-[#0A0A0A] mt-[-1px]'>
          <div className='flex gap-3 overflow-scroll gayb'>
              <img data-aos="fade-right" data-aos-duration="1000" className='w-100 z-[10] hover:!scale-[1.1] cursor-pointer h-[165px] md:absolute left-0 top-0' src={kong1} alt="kong1" />
                <img data-aos="fade-right" data-aos-duration="1500" className='w-100 z-[10] hover:!scale-[1.1] cursor-pointer h-[165px] md:absolute left-[5%] top-[21%]' src={kong2} alt="kong2" />
              <img data-aos="fade-right" data-aos-duration="2000" className='w-100 z-[10] hover:!scale-[1.2] cursor-pointer h-[165px] md:absolute left-[9%] top-[41%]' src={kong3} alt="kong3" />
              <img data-aos="fade-right" data-aos-duration="2500" className='w-100 z-[10] hover:!scale-[1.2] cursor-pointer h-[165px] md:absolute left-[5%] bottom-[20%]' src={kong4} alt="kong4" />
              <img data-aos="fade-right" data-aos-duration="3000" className='w-100 z-[10] hover:!scale-[1.2] cursor-pointer h-[165px] md:absolute left-[0] bottom-[0%]' src={kong5} alt="kong5" />
            </div>
            <div className=' gap-3 overflow-scroll gayb md:block hidden'>
              <img data-aos="fade-left" data-aos-duration="1000" className='w-100 z-[10] hover:!scale-[1.2] cursor-pointer h-[165px] md:absolute right-0 top-0' src={kongr1} alt="kong1" />
              <img data-aos="fade-left" data-aos-duration="1500" className='w-100 z-[10] hover:!scale-[1.2] cursor-pointer h-[165px] md:absolute right-[5%] top-[21%]' src={kongr2} alt="kong2" />
              <img data-aos="fade-left" data-aos-duration="2000" className='w-100 z-[10] hover:!scale-[1.2] cursor-pointer h-[165px] md:absolute right-[9%] top-[41%]' src={kongr3} alt="kong3" />
              <img data-aos="fade-left" data-aos-duration="2500" className='w-100 z-[10] hover:!scale-[1.2] cursor-pointer h-[165px] md:absolute right-[5%] bottom-[20%]' src={kongr4} alt="kong4" />
              <img data-aos="fade-left" data-aos-duration="3000" className='w-100 z-[10] hover:!scale-[1.2] cursor-pointer h-[165px] md:absolute right-[0] bottom-[0%]' src={kongr5} alt="kong5" />
          </div>
          <div className='container m-auto'>
              <h3 className='text-white text-[50px] sm:text-[64px] font-normal font-Azo text-center pt-[54px]'>THE KONGS</h3>
              <div data-aos="zoom-in" data-aos-duration="1000" className='flex justify-center'> 
                  <img className='w-100' src={the_kong} alt="the_kong" />
              </div>
            </div>
            <div className='flex gap-3 overflow-scroll gayb pt-[50px] md:hidden'>
                <img data-aos="fade-left" data-aos-duration="1000" className='w-100 z-[10] hover:scale-[1.2] cursor-pointer h-[165px]  right-0 top-0' src={kongr1} alt="kong1" />
                <img data-aos="fade-left" data-aos-duration="1500" className='w-100 z-[10] hover:scale-[1.2] cursor-pointer h-[165px]  right-[5%] top-[21%]' src={kongr2} alt="kong2" />
                <img data-aos="fade-left" data-aos-duration="2000" className='w-100 z-[10] hover:scale-[1.2] cursor-pointer h-[165px]  right-[9%] top-[41%]' src={kongr3} alt="kong3" />
                <img data-aos="fade-left" data-aos-duration="2500" className='w-100 z-[10] hover:scale-[1.2] cursor-pointer h-[165px]  right-[5%] bottom-[20%]' src={kongr4} alt="kong4" />
                <img data-aos="fade-left" data-aos-duration="3000" className='w-100 z-[10] hover:scale-[1.2] cursor-pointer h-[165px]  right-[0] bottom-[0%]' src={kongr5} alt="kong5" />
            </div>
    </div >
  )
}

export default Kongs