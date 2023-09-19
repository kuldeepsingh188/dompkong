import React from 'react'
import watches from '../assets/img/png/watches.png'
import boats from '../assets/img/png/boats.png'
import cars from '../assets/img/png/cars.png'

const About = () => {
    return (
        <div className='bg-[#0A0A0A] mt-[-1px]'>
            <div className='container mx-auto px-[12px] sm:overflow-visible overflow-hidden pb-[50px] lg:pb-[100px]'>
                <div className=' lg:flex pt-[75px] md:pt-[150px] items-center'>
                    <div data-aos="fade-right" data-aos-duration="1000" className='lg:w-1/2'>
                        <h2 className='text-[#fff] text-[64px] font-normal font-Azo'>About </h2>
                        <p className='text-[#fff] text-[16px] font-normal font-Montserrat'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                    </div>
                    <div className='lg:w-1/2 flex justify-center pb-[44px]'>
                        {/* <!-- 3D Slideshow Section --> */}
                        <section id="slideshow" className=' relative'>
                            <div className='bg_fade absolute left-[30%] top-[20%]'></div>
                            <div class="entire-content">
                                <div class="content-carrousel">
                                    <figure class="shado "><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={watches} /></figure>
                                    <figure class="shad"><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={boats} /></figure>
                                    <figure class="shad"><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={cars} /></figure>
                                    <figure class="shad"><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={watches} /></figure>
                                    <figure class="shad"><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={boats} /></figure>
                                    <figure class="shad"><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={cars} /></figure>
                                    <figure class="shad"><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={watches} /></figure>
                                    <figure class="shad"><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={boats} /></figure>
                                    <figure class="shad"><img className='border-[3px] border-[#FDDA60] rounded-[8px]' src={cars} /></figure>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About