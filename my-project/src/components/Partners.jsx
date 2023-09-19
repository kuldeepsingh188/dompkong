import React from 'react'
import { Team } from './Helper'
import insta from '../assets/img/svg/insta.svg'
import twiter from '../assets/img/svg/twiter.svg'

const Partners = () => {
    return (
        <div className='bg-[#0A0A0A] mt-[-1px]'>
            <div className='container m-auto px-[12px]'>
                <h3 className='text-white text-[50px] sm:text-[64px] font-normal font-Azo text-center md:pt-[64px]'>Meet The Team</h3>
                <div className='flex flex-wrap'>
                    {Team.map((data) => {
                        return (
                            <div className='w-full flex flex-wrap relative'>
                                <div className='w-[100%] relative z-10 h-[1px] bg-[#FDDA60] shadow-topShadow mt-[65px]'>
                                </div>
                                <div data-aos="fade-right" data-aos-duration="1500" className='sm:w-1/2 pt-[18px] md:pt-[34px]'>
                                    <p className='text-white text-[24px] font-bold font-Montserrat'>{data.name}</p>
                                    <p className='text-white text-[20px] font-normal font-Montserrat pt-[12px]'>{data.job}</p>
                                    <img className='pt-[32px]' src={data.img1} alt="" />
                                </div>
                                <div data-aos="fade-left" data-aos-duration="1500" className='sm:w-1/2 pt-3 sm:pt-[18px] md:pt-[34px]'>
                                    <p className='text-white text-[24px] font-semibold font-Montserrat'>{ data.heading}</p>
                                    <p className='text-white text-[20px] font-normal font-Montserrat pt-[12px]'>{data.about}</p>
                                    <p className='text-white text-[16px] font-normal font-Montserrat pt-[32px]'>{data.para}</p>
                                    <p className='text-white text-[16px] font-normal font-Montserrat pt-[10px]'>{data.para2}</p>
                                    <ul className='flex pt-[34px]'>
                                        <li><a href=""><img src={insta} alt="insta" /></a></li>
                                        <li className='ps-[16px]'><a href=""><img src={twiter} alt="twiter" /></a></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Partners