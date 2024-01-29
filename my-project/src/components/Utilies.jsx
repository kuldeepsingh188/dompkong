import React from 'react'
import { Products } from './Helper'
const Utilies = () => {
    return (
        <div className='bg-[#0A0A0A] mt-[-1px]'>
            <div className='container mx-auto pb-[60px] md:pb-[125px] px-[12px]'>
                <h3 className='text-white text-[50px] sm:text-[64px] font-normal font-Azo text-center pb-[50px]'>Utilities</h3>
                <div className="flex flex-wrap" >
                    {Products.map((data) => {
                        return (
                            <div data-aos="flip-left" data-aos-duration="1000" className='sm:w-1/2 md:w-1/3 px-3 pt-5 '>
                                <div className='doccard border-[1px] rounded-[16px] border-solid border-white hover:bg-[#FDDA60] transition-all ease-linear relative overflow-hidden hover:text-black'>
                                    <div className='w-[107px] h-[107px] bg-white blur-[94px] absolute top-0 right-0'></div>
                                    <div className='w-[91px] h-[91px] bg-white blur-[94px] absolute bottom-0 left-0'></div>
                                    <img className='m-auto pt-[25px]' src={data.img} alt="" />
                                    <p className='text-white hover:text-black text-[24px]  font-semibold font-Montserrat pt-[16px] text-center'>{data.heading}</p>
                                    <p className='text-white text-[16px]  font-normal font-Montserrat pb-[22px] text-center pt-[16px] px-[20px]'>{data.para}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Utilies