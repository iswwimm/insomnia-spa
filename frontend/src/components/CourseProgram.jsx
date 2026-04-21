import React, { useState, useEffect, useRef } from 'react';
import mod0Img from '../assets/module-0.jpg';
import mod1_1Img from '../assets/module-1-1.jpg';
import mod1_2Img from '../assets/module-1-2.jpg';
import mod2Img from '../assets/module-2.jpg';
import mod3Img from '../assets/module-3.jpg';
import mod4Img from '../assets/module-4.jpg';

const programModules = [
  {
    id: 0,
    moduleName: "Moduł 0",
    title: "przygotowanie stanowiska",
    type: null,
    items: [
      "prawidłowe przygotowanie stanowiska dla efektywnej pracy",
      "nazwy i linki do niezbędnych materiałów"
    ],
    image: mod0Img,
    heights: { desktop: { text: 220, photo: 265 }, mobile: { text: 150, photo: 220 } }
  },
  {
    id: 1,
    moduleName: "Moduł 1.1",
    title: "przygotowanie płytki",
    type: "Część teoretyczna",
    items: [
      "budowa paznokcia",
      "bazy i ich właściwości",
      "lista najczęściej spotykanych zapowietrzeń pod bazą"
    ],
    image: mod1_1Img,
    heights: { desktop: { text: 290, photo: 195 }, mobile: { text: 190, photo: 180 } }
  },
  {
    id: 2,
    moduleName: "Moduł 1.2",
    title: "przygotowanie płytki",
    type: "Część praktyczna",
    items: [
      "mechaniczne przygotowanie płytki",
      "schemat opracowania skórek",
      "chemiczne przygotowanie płytki"
    ],
    image: mod1_2Img,
    heights: { desktop: { text: 250, photo: 235 }, mobile: { text: 170, photo: 200 } }
  },
  {
    id: 3,
    moduleName: "Moduł 2",
    title: "dobranie formy",
    type: "Część teoretyczna i praktyczna",
    items: [
      "kryteria postawienia formy",
      "dobieranie prawidłowego rozmiaru pod każdy typ paznokci",
      "dobieranie górnej formy na paznokieć (praktyka)"
    ],
    image: mod2Img,
    heights: { desktop: { text: 340, photo: 145 }, mobile: { text: 230, photo: 140 } }
  },
  {
    id: 4,
    moduleName: "Moduł 3",
    title: "tworzenie szkieletu od 0",
    type: null,
    items: [
      "praktyczna demonstracja przedłużenia szkieletu - schemat",
      "prawidłowe ułożenie żelu na formie",
      "piłowanie kształtów — równy kwadrat i szpic"
    ],
    image: mod3Img,
    heights: { desktop: { text: 255, photo: 230 }, mobile: { text: 190, photo: 180 } }
  },
  {
    id: 5,
    moduleName: "Moduł 4",
    title: "budowa żelem",
    type: null,
    items: [
      "nauka metody bez opiłowania",
      "schemat — efektowne i szybkie nałożenie żelu",
      "opracowanie gotowego paznokcia"
    ],
    image: mod4Img,
    heights: { desktop: { text: 230, photo: 255 }, mobile: { text: 170, photo: 200 } }
  }
];

function CourseProgram() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCurrentPage(0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(programModules.length / itemsPerPage);

  const pages = [];
  for (let i = 0; i < programModules.length; i += itemsPerPage) {
    pages.push(programModules.slice(i, i + itemsPerPage));
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    
    if (distance > minSwipeDistance) nextPage();
    if (distance < -minSwipeDistance) prevPage();
  };

  const repeatSymbols = "✧･ﾟ✩ *:･ﾟ✧ ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ ".repeat(10);
  
  const gapSize = isMobile ? 16 : 56;

  return (
    <section id="course-program" className="w-full max-w-[1280px] mx-auto bg-white py-16 md:py-[60px] flex flex-col items-center overflow-hidden">
      <div className="w-full flex items-center justify-center mb-10 md:mb-14 overflow-hidden px-4 md:px-8">
        <div className="flex-1 flex justify-start overflow-hidden whitespace-nowrap opacity-70">
            <span className="font-helvetica font-medium text-black text-[24px] md:text-[36px] leading-[100%] tracking-normal pl-2 md:pl-6">
            {repeatSymbols}
            </span>
        </div>
        <span className="px-2 md:px-6 font-snell font-normal text-[45px] md:text-[96px] text-black leading-none tracking-[-0.01em] text-center pb-2 shrink-0">
        Program szkolenia
        </span>
        <div className="flex-1 flex justify-start overflow-hidden whitespace-nowrap opacity-70">
            <span className="font-helvetica font-medium text-black text-[24px] md:text-[36px] leading-[100%] tracking-normal pl-2 md:pl-6">
            {repeatSymbols}
            </span>
        </div>
      </div>

      <div 
        className="w-[350px] max-w-[100vw] md:w-[1076px] overflow-hidden mx-auto relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${currentPage * 100}% - ${currentPage * gapSize}px))` 
          }}
        >
          {pages.map((page, pageIndex) => (
            <div 
              key={pageIndex} 
              className="w-full shrink-0 flex justify-center gap-4 md:gap-16"
              style={{ marginRight: pageIndex === totalPages - 1 ? '0' : `${gapSize}px` }}
            >
              
              {page.map((mod) => {
                const textHeight = isMobile ? mod.heights.mobile.text : mod.heights.desktop.text;
                const photoHeight = isMobile ? mod.heights.mobile.photo : mod.heights.desktop.photo;

                return (
                  <div 
                    key={mod.id} 
                    className="w-[350px] max-w-[100vw] md:w-[510px] h-[370px] md:h-[485px] flex flex-col border border-[#000000] rounded-[20px] bg-gradient-to-b from-[#FFF0F6] to-[#FFFFFF] overflow-hidden shadow-sm"
                  >
                    
                    <div 
                      className="px-6 py-6 md:px-[34px] md:py-[30px] overflow-hidden"
                      style={{ height: `${textHeight}px` }}
                    >
                      <div className="mb-4">
                        <span className="font-snell text-[38px] md:text-[46px] font-bold text-black leading-none">
                          {mod.moduleName} -
                        </span>
                        <h3 className="text-black text-[20px] md:text-[24px] mt-1 leading-tight">
                          {mod.title}
                        </h3>
                      </div>
                      {mod.type && (
                        <p className="font-bold text-[16px] md:text-[18px] mb-4 text-black">
                          {mod.type}
                        </p>
                      )}
                      <ul className="space-y-3">
                        {mod.items.map((item, index) => (
                          <li key={index} className="flex items-start text-[15px] md:text-[17px] text-black leading-snug">
                            <span className="mr-2 mt-[0px] text-[16px]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div 
                      className="w-full shrink-0 border-t border-gray-200"
                      style={{ height: `${photoHeight}px` }}
                    >
                      {mod.image ? (
                        <img src={mod.image} alt={mod.moduleName} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex justify-center items-center bg-gray-100 text-gray-400 text-sm">
                          Фото
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}

            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8 md:mt-12 px-4">
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`p-2 transition-all duration-300 ${
            currentPage === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 text-gray-400 hover:text-black cursor-pointer'
          }`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="flex gap-3 items-center">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`rounded-full transition-all duration-500 ease-in-out ${
                currentPage === idx 
                  ? 'bg-gray-500 w-[14px] h-[14px] md:w-[16px] md:h-[16px]' 
                  : 'bg-[#E0E0E0] w-[12px] h-[12px] md:w-[14px] md:h-[14px] hover:bg-gray-400'
              }`}
              aria-label={`Перейти до сторінки ${idx + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`p-2 transition-all duration-300 ${
            currentPage === totalPages - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100 text-gray-400 hover:text-black cursor-pointer'
          }`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

    </section>
  );
}

export default CourseProgram;

