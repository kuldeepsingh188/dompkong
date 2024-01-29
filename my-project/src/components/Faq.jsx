import React from 'react'
import { WhitetwiterIcon, WhiteshipIcon, WhitedaimandIcon, WhitediscodeIcon, WhitemasterIcon, WhitetelegrameIcon } from './Icons'

const Faq = () => {
    return (
        <div className="bg-[url('/src/assets/img/webp/faq-bg.webp')] bg-cover bg-no-repeat pb-[56px] mt-[-1px] min-h-full">
            <div className='container m-auto pt-[50px] md:pt-[121px] px-[12px]'>
                <h3 className='text-white text-[50px] sm:text-[64px] font-normal font-Azo text-center'>FAQs</h3>
                <div class="flex flex-col items-center justify-center pb-[100px]">
                    {/* <!--  Panel 1  --> */}
                    <div class="">
                        <input type="checkbox" name="panel" id="panel-1" class="hidden" />
                        <label for="panel-1" class="relative block text-white text-[16px] sm:text-[22px] font-bold font-Montserrat shadow pb-[17px] pt-[55px]">Arcu faucibus diam feugiat magna etiam.</label>
                        <div class="accordion__content overflow-hidden border-b  border-[#FDDA60]">
                            <h2 class="text-white text-[16px] font-normal font-Montserrat pb-[43px]">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</h2>
                        </div>
                    </div>
                    <div class="">
                        <input type="checkbox" name="panel" id="panel-2" class="hidden" />
                        <label for="panel-2" class="relative block text-white text-[16px] sm:text-[22px] font-bold font-Montserrat shadow pb-[17px] pt-[25px]">Fermentum tortor aenean.</label>
                        <div class="accordion__content overflow-hidden border-b  border-[#FDDA60]">
                            <h2 class="text-white text-[16px] font-normal font-Montserrat pb-[43px]">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</h2>
                        </div>
                    </div>
                    <div class="">
                        <input type="checkbox" name="panel" id="panel-3" class="hidden" />
                        <label for="panel-3" class="relative block text-white text-[16px] sm:text-[22px] font-bold font-Montserrat shadow pb-[17px] pt-[25px]">Dictum est amet sollicitudin.</label>
                        <div class="accordion__content overflow-hidden border-b  border-[#FDDA60]">
                            <h2 class="text-white text-[16px] font-normal font-Montserrat pb-[43px]">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</h2>
                        </div>
                    </div>
                    <div class="">
                        <input type="checkbox" name="panel" id="panel-4" class="hidden" />
                        <label for="panel-4" class="relative block text-white text-[16px] sm:text-[22px] font-bold font-Montserrat shadow pb-[17px] pt-[25px]">Sed vulputate mi faucibus.</label>
                        <div class="accordion__content overflow-hidden border-b  border-[#FDDA60]">
                            <h2 class="text-white text-[16px] font-normal font-Montserrat pb-[43px]">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</h2>
                        </div>
                    </div>
                    <div class="">
                        <input type="checkbox" name="panel" id="panel-5" class="hidden" />
                        <label for="panel-5" class="relative block text-white text-[16px] sm:text-[22px] font-bold font-Montserrat shadow pb-[17px] pt-[25px]">Commodo placerat ultricies.</label>
                        <div class="accordion__content overflow-hidden border-b  border-[#FDDA60]">
                            <h2 class="text-white text-[16px] font-normal font-Montserrat pb-[43px]">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</h2>
                        </div>
                    </div>
                    <div class="">
                        <input type="checkbox" name="panel" id="panel-6" class="hidden" />
                        <label for="panel-6" class="relative block text-white text-[16px] sm:text-[22px] font-bold font-Montserrat shadow pb-[17px] pt-[25px]">Nunc amet cursus morbi donec.</label>
                        <div class="accordion__content overflow-hidden border-b  border-[#FDDA60]">
                            <h2 class="text-white text-[16px] font-normal font-Montserrat pb-[43px]">Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.</h2>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[24px] pt-[50px] md:pt-[120px] justify-center'>
                    <a href=""><WhitetwiterIcon /></a>
                    <a href=""><WhiteshipIcon /></a>
                    <a href=""><WhitedaimandIcon /></a>
                    <a href=""><WhitediscodeIcon /></a>
                    <a href=""><WhitemasterIcon /> </a>
                    <a href=""><WhitetelegrameIcon /></a>
                </div>
            </div>
            <div className='pt-[20px]'><hr/></div>
        </div>
    )
}

export default Faq