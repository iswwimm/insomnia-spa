import React from 'react';
import windowControlsImg from '../assets/window-controls.svg'; 

function CourseOutcomes() {
  return (
    <section className="w-full bg-white pb-8 md:pb-16">
      <div className="container px-4 md:px-8 flex justify-center">
        
        <div className="w-full max-w-[1150px] bg-[#F5E1EC] border border-black rounded-[20px] overflow-hidden shadow-sm">
          
          <div className="w-full flex justify-between pr-9 pt-0">
            
           <div className="text-black text-[16px] md:text-[20px] font-sans tracking-wide self-center pl-4 md:pl-6">
                untitled - Paint
            </div>
            
            <img 
            src={windowControlsImg} 
            alt="Window controls" 
            className="h-[24px] md:h-[36px] w-auto object-contain self-start"
            />

          </div>
          <div className="px-3 pb-3 md:px-5 md:pb-5 pt-2">
            <div className="w-full bg-gradient-to-b from-[#F9F9F9] to-[#EAEAEA] border border-black rounded-[12px] p-8 md:p-[60px] shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
              
              <h2 className="text-[28px] md:text-[40px] font-bold text-black mb-8 md:mb-12">
                Po kursie będziesz potrafiła:
              </h2>

              <ul className="space-y-4 md:space-y-6 text-[18px] md:text-[24px] text-black tracking-wide">
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-[16px]">◦</span> 
                  wykonać pełną stylizację od przygotowania do topu
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-[16px]">◦</span> 
                  pracować na formach górnych bez zalewania skórek
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-[16px]">◦</span> 
                  skrócić czas pracy nawet o 1-2 godziny
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-[16px]">◦</span> 
                  dobrać materiały pod każdą płytkę
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-[16px]">◦</span> 
                  przyjmować pierwsze klientki
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1 text-[16px]">◦</span> 
                  ustawić poprawną architekturę paznokcia
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CourseOutcomes;