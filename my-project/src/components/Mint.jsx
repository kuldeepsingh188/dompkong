import React from 'react'
import { useState } from 'react';
import wishkey from '../assets/img/png/wishkye.png'
const Mint = () => {
    const [count, setCount] = useState(0);
    const decrease = () => {
        if (count > 0) {
            setCount((count) => count - 1);
        }
    };

    if (count == 10) {
        document.getElementById("Zero").style.display = "none";
    }
    else if (count == 9) {
        document.getElementById("Zero").style.display = "block";
    }
    return (
        <div className='mint_bg mt-[-1px]'>
            <div className='container m-auto md:flex items-center pt-[60px] md:pt-[170px] px-[12px] pb-[63px]'>
                <div className='md:w-1/2 flex justify-center'>
                    <img data-aos="zoom-in" data-aos-duration="1000" className='w-100' src={wishkey} alt="wishkye" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className='md:w-1/2 md:mt-0 mt-[50px]'>
                    <h3 className='text-[white] md:text-[64px] text-[50px] font-normal font-Azo'>Mint NFT</h3>
                    <div className='flex justify-between pt-[51px]'>
                        <div className=''>
                            <p className='text-white text-[36px] font-[900] font-Montserrat'>9999 </p>
                            <p className='text-white text-[16px] font-normal font-Montserrat pt-[14px]'>of 10,000 minted</p>
                        </div>
                        <div className='pe-[55px]'>
                            <p className='text-white text-[36px] font-[900] font-Montserrat flex-shrink-0'>.2 ETH</p>
                            <p className='text-white text-[16px] font-normal font-Montserrat pt-[14px]'>per NFT</p>
                        </div>
                    </div>
                    <div className='flex justify-between pt-[33px]'>
                        <div>
                            <p className='text-white text-[36px] font-[900] font-Montserrat'>Max 9</p>
                            <p className='text-white text-[16px] font-normal font-Montserrat pt-[14px]'>NFTs per transaction</p>
                        </div>
                        <div>
                            <p className='text-white text-[36px] font-[900] font-Montserrat '>Max 2</p>
                            <p className='text-white text-[16px] font-normal font-Montserrat pt-[14px]'>Transaction per wallet</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center pt-[0px] gap-[14px] md:pt-[49px] pb-[29px]">
                        <div
                            className=" font-Montserrat text-[36px] font-[900] white_box bg-white hover:bg-[#FDDA60] transition_all w-[75px] h-[65px] rounded-[4px] flex justify-center items-center cursor-pointer"
                            onClick={decrease}
                        >
                            -
                        </div>
                        <p className=" font-Montserrat text-[36px] text-[white] font-[900] w-100 bg-black border-[2px] border-[white] rounded-[4px] max-w-[350px] px-[130px] h-[65px] flex justify-center items-center">
                            <span id="Zero" className="d-inline-block">
                                0
                            </span>
                            {count}
                        </p>
                        <div
                            className="font-Montserrat text-[36px] font-[900]  white_box hover:bg-[#FDDA60] transition_all bg-white w-[75px] h-[65px] rounded-[4px] flex justify-center items-center cursor-pointer"
                            onClick={() => setCount(count + 1)}
                        >
                            +
                        </div>
                    </div>
                    <button className='w-full bg-[#FDDA60] hover:bg-white rounded-[4px] py-[17px] lg:px-[175px] text-black text-[24px] font-normal font-Azo mt-[29px]'>
                        MINT NOW
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mint