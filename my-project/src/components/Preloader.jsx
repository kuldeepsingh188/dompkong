import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import gorila from '../assets/img/webp/gorila.webp'
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
  return (
      <div>
          {loder ? (
              <section className="bg-black zoom top-0 left-0 fixed min-h-screen w-full flex flex-column justify-center items-center z-[111]">
                  <div className="flex justify-center items-center flex-column text-center">
                      <div className="">
                          <h1 data-aos="zoom-in" data-aos-duration="1000" className='font-Azo text-white font-normal md:text-[64px] text-[45px] text-[#fff text-center pt-[39px] z-[33] relative'>WELCOME</h1>
                          <img className='w-100' src={gorila} alt="rainbow" />
                      </div>
                  </div>
              </section>
          ) : (
              ""
          )}
    </div>
  )
}

export default Preloader