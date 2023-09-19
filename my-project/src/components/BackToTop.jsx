import React, { useState } from 'react'

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ 
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
  return (
      <div>
          <div>
              <button className='z-[55] rounded-[50px] fixed bottom-[10px] bg-[#FDDA60] hover:bg-white right-[10px] h-[50px] w-[50px] flex justify-center items-center' onClick={scrollToTop}
                  style={{ display: visible ? "flex" : "none" }}><svg width="20" height="20" fill="black" viewBox="0 0 16 16"><path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"></path><path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path></svg></button>
          </div>
    </div>
  )
}

export default BackToTop