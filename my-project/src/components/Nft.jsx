import React from 'react'
import Slider from "react-slick";
import fannie from '../assets/img/webp/fannie.webp'
import evening from '../assets/img/webp/evening.webp'
import naberskha from '../assets/img/webp/nebrska.webp'


const Nft = () => {
    const responsive = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 3000,
        slidesToShow: 3.7,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: 'Linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg-[#0A0A0A] mt-[-1px]'>
            <div className='container m-auto'>
                <h4 className='text-white text-[50px] sm:text-[64px] font-normal font-Azo text-center pt-[40px] md:pt-[100px]'>Partners</h4>
                <Slider className='pt-[52px] pb-[50px]' {...responsive}>
                    <div>
                        <img src={evening} alt="evening" />
                    </div>

                    <div>
                        <img src={evening} alt="evening" />
                    </div>

                    <div>
                        <img src={naberskha} alt="naberskha" />
                    </div>
                    <div>
                        <img src={fannie} alt="fannie" />
                    </div>
                </Slider>
            </div>
          
        </div >
       
)
}
export default Nft