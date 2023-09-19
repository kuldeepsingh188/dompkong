import React from 'react'
import monkey from '../assets/img/png/gorila.png'

const Roadline = () => {
  return (
      <div>
          <section className='bg-black mt-[-1px]'>
              <div className="cotainer mx-auto max-w-[1140px] px-3 overflow-x-hidden pt-5 sm:pt-[60px] md:pt-[90px] md:pb-8">
                  <h2 className='font-Azo font-[400] text-[50px] md:text-[64px] text-center text-white pb-[10px] sm:pb-[20px] md:pb-[30px]'>Roadmap</h2>
                  <div className=" flex-wrap flex">
                      <div className='w-full md:hidden flex justify-center items-center'>
                          <img src={monkey} data-aos="zoom-out" data-aos-duration="1000" alt="monkey" className='w-full max-w-[318px]' />
                      </div>
                      <div className='w-full md:w-7/12 md:hidden ps-4 pt-[24px]'>
                          <div className="relative before:absolute before:h-[105%] before:w-[3px] before:bg-[#FDDA60] before:left-[-8px] sm:before:left-[-6px] before:top-[20px] sm:before:top-[35px]">
                              <div className='flex relative ms-3 sm:ms-5'>
                                  <div className='h-[50px] sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full  bg-white hover:bg-[#FDDA60] hover:shadow-circleShadow flex justify-center items-center relative'>
                                      <div className='h-[20px] sm:h-[30px] sm:w-[30px] w-[20px] bg-[#FDDA60] rounded-full absolute top-[15px] sm:top-[20px] sm:left-[-39px] left-[-29px] '></div>
                                      <p className='text-black font-Montserrat font-[900] text-md'>20%</p>
                                  </div>
                                  <div className='ms-3' data-aos="fade-right" data-aos-duration="1000">
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 1</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                                  </div>
                              </div>
                              <div className='flex relative pt-[24px] sm:ms-5 ms-3'>
                                  <div className='h-[50px] sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full bg-white hover:bg-[#FDDA60] hover:shadow-circleShadow flex justify-center items-center relative'>
                                      <div className='h-[20px] sm:h-[30px] sm:w-[30px] w-[20px] bg-[#FDDA60] rounded-full absolute top-[15px] sm:top-[20px] sm:left-[-39px] left-[-29px] '></div>
                                      <p className='text-black font-Montserrat font-[900] text-sm sm:text-md'>40%</p>
                                  </div>
                                  <div className='ms-3' data-aos="fade-right" data-aos-duration="1200">
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 2</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                                  </div>
                              </div>
                              <div className='flex relative pt-[24px] sm:ms-5 ms-3'>
                                  <div className='h-[50px] sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full  bg-white hover:bg-[#FDDA60] hover:shadow-circleShadow flex justify-center items-center relative'>
                                      <div className='h-[20px] sm:h-[30px] sm:w-[30px] w-[20px] bg-[#FDDA60] rounded-full absolute top-[15px] sm:top-[20px] sm:left-[-39px] left-[-29px] '></div>
                                      <p className='text-black font-Montserrat font-[900] text-sm sm:text-md'>60%</p>
                                  </div>
                                  <div className='ms-3' data-aos="fade-right" data-aos-duration="1400">
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 3</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris.</p>
                                  </div>
                              </div>
                              <div className='flex relative pt-[24px] sm:ms-5 ms-3'>
                                  <div className='h-[50px] sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full  bg-white hover:bg-[#FDDA60] hover:shadow-circleShadow flex justify-center items-center relative'>
                                      <div className='h-[20px] sm:h-[30px] sm:w-[30px] w-[20px] bg-[#FDDA60] rounded-full absolute top-[15px] sm:top-[20px] sm:left-[-39px] left-[-29px] '></div>
                                      <p className='text-black font-Montserrat font-[900] text-sm sm:text-md'>80%</p>
                                  </div>
                                  <div className='ms-3' data-aos="fade-right" data-aos-duration="1600">
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 4</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                                  </div>
                              </div>
                          </div>
                          <div className='flex relative pt-[24px] sm:ms-5 ms-3'>
                              <div className='h-[50px] sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full bg-white hover:bg-[#FDDA60] hover:shadow-circleShadow flex justify-center items-center relative'>
                                  <div className='h-[20px] sm:h-[30px] sm:w-[30px] w-[20px] bg-[#FDDA60] rounded-full absolute top-[15px] sm:top-[20px] sm:left-[-39px] left-[-29px] '></div>
                                  <p className='text-black font-Montserrat font-[900] text-sm sm:text-md'>100%</p>
                              </div>
                              <div className='ms-3 data-aos="fade-right" data-aos-duration="1800"'>
                                  <p className='text-white font-Azo text-md font-[400]'>Phase 5</p>
                                  <p className='text-white font-Montserrat text-sm font-[400]'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                              </div>
                          </div>
                      </div>
                      <div className="relative w-full md:w-5/12 hidden md:block">
                          <div className='my_box2  max-w-[550px] lg:max-h-[550px] relative rounded-full'>
                              <img src={monkey} alt="monkey" className=' absolute items-center w-full max-w-[318px] pt-10' />
                          </div>
                          <div className='h-[30px] w-[30px] shadow-circleShadow bg-[#FDDA60] rounded-full absolute top-[4%] lg:left-[46%] md:left-[70%] '></div>
                          <div className='h-[30px] w-[30px] shadow-circleShadow bg-[#FDDA60] rounded-full absolute lg:top-[24%] md:top-[27%] lg:right-[27%] md:right-0'></div>
                          <div className='h-[30px] w-[30px] shadow-circleShadow bg-[#FDDA60] rounded-full absolute lg:top-[46%] md:top-[46%] lg:right-[22%] md:right-[-4%] '></div>
                          <div className='h-[30px] w-[30px] shadow-circleShadow bg-[#FDDA60] rounded-full absolute lg:top-[67%] md:top-[65%] lg:right-[26%] md:right-[0]'></div>
                          <div className='h-[30px] w-[30px] shadow-circleShadow bg-[#FDDA60] rounded-full absolute lg:top-[89%] lg:right-[45%] md:top-[86%] md:right-[15%] '></div>
                      </div>
                      <div className='w-full md:w-7/12 hidden md:block'>
                          <div className='flex relative pt-[24px] md:pt-0 md:ms-[-32px] '>
                              <div className="flex changecolor" data-aos="fade-right" data-aos-duration="1000">
                                  <div className='h-[50px] sm:h-[76px] circle w-full max-w-[50px] sm:max-w-[76px] rounded-full circle hover:bg-[#FDDA60]  bg-white flex justify-center items-center relative'>
                                      <div className='hidden lg:block w-[130px] lg:w-[140px] h-[1px] bg-white absolute top-[50%] translate-y-[-50%] lg:left-[-160px] after:absolute after:h-[10px] after:rounded-full after:w-[10px] after:top-[-5px] after:right-0 after:bg-white before:absolute before:bg-white before:w-[10px] before:h-[10px] before:rounded-full before:top-[-5px] before:left-0 '></div>
                                      <p className='text-black font-Montserrat font-[900] text-md'>20%</p>
                                  </div>
                                  <div className='md:ms-[9px] ms-3 xl:ms-[42px]'>
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 1</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                                  </div>
                              </div>
                          </div>
                          <div className='flex relative pt-[24px] md:ms-[8px] '>
                              <div className='changecolor flex' data-aos="fade-right" data-aos-duration="1300">
                                  <div className='h-[50px] circle sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full  bg-white  flex justify-center items-center relative'>
                                      <div className='hidden lg:block w-[90px] lg:w-[90px] h-[1px] bg-white absolute top-[50%] translate-y-[-50%] lg:left-[-110px] after:absolute after:h-[10px] after:rounded-full after:w-[10px] after:top-[-5px] after:right-0 after:bg-white before:absolute before:bg-white before:w-[10px] before:h-[10px] before:rounded-full before:top-[-5px] before:left-0 '></div>
                                      <p className='text-black font-Montserrat font-[900] text-md'>40%</p>
                                  </div>
                                  <div className='md:ms-[9px] ms-3 xl:ms-[42px]'>
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 2</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                                  </div>
                              </div>
                          </div>
                          <div className='flex md:pt-[20px] lg:pt-[37px] pt-[24px] md:ms-[47px] relative '>
                              <div className="flex changecolor" data-aos="fade-right" data-aos-duration="1600">
                                  <div className='h-[50px] sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full  circle bg-white  flex justify-center items-center relative'>
                                      <div className='hidden lg:block w-[90px] lg:w-[100px] h-[1px] bg-white absolute top-[50%] translate-y-[-50%] lg:left-[-120px] after:absolute after:h-[10px] after:rounded-full after:w-[10px] after:top-[-5px] after:right-0 after:bg-white before:absolute before:bg-white before:w-[10px] before:h-[10px] before:rounded-full before:top-[-5px] before:left-0 '></div>
                                      <p className='text-black font-Montserrat font-[900] text-md'>60%</p>
                                  </div>
                                  <div className='md:ms-[9px] ms-3 xl:ms-[42px]'>
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 3</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris.</p>
                                  </div>
                              </div>
                          </div>
                          <div className='flex relative pt-[24px] md:pt-[20px] lg:pt-[37px] md:ms-[8px]'>
                              <div className='flex changecolor' data-aos="fade-right" data-aos-duration="1900">
                                  <div className='h-[50px] sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full circle hover:bg-[#FDDA60] bg-white  flex justify-center items-center relative'>
                                      <div className='hidden lg:block w-[90px] lg:w-[90px] h-[1px] bg-white absolute top-[50%] translate-y-[-50%] lg:left-[-110px] after:absolute after:h-[10px] after:rounded-full after:w-[10px] after:top-[-5px] after:right-0 after:bg-white before:absolute before:bg-white before:w-[10px] before:h-[10px] before:rounded-full before:top-[-5px] before:left-0 '></div>
                                      <p className='text-black font-Montserrat font-[900] text-md'>80%</p>
                                  </div>
                                  <div className='md:ms-[9px] ms-3 xl:ms-[42px]'>
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 4</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                                  </div>
                              </div>
                          </div>
                          <div className='flex relative pt-[24px] md:ms-[-32px] md:pt-[20px] lg:pt-[37px]'>
                              <div className="flex changecolor" data-aos="fade-right" data-aos-duration="2200">
                                  <div className='h-[50px] sm:h-[76px] w-full max-w-[50px] sm:max-w-[76px] rounded-full hover:bg-[#FDDA60] circle bg-white  flex justify-center items-center relative'>
                                      <div className='hidden lg:block w-[120px] lg:w-[120px] h-[1px] bg-white absolute top-[50%] translate-y-[-50%] lg:left-[-140px] after:absolute after:h-[10px] after:rounded-full after:w-[10px] after:top-[-5px] after:right-0 after:bg-white before:absolute before:bg-white before:w-[10px] before:h-[10px] before:rounded-full before:top-[-5px] before:left-0 '></div>
                                      <p className='text-black font-Montserrat font-[900] text-md'>100%</p>
                                  </div>
                                  <div className='md:ms-[9px] ms-3 xl:ms-[42px]'>
                                      <p className='text-white font-Azo text-md font-[400]'>Phase 5</p>
                                      <p className='text-white font-Montserrat text-sm font-[400]'>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='py-6 sm:pt-8 md:pt-10 lg:pt-[60px] flex justify-center'>
                      <button className='bg-[#FDDA60] hover:bg-white py-4 px-3 sm:px-6 rounded-[4px] font-Azo text-sm sm:text-md shadow-btnShadow'>
                        Read Our Whitepaper</button>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Roadline