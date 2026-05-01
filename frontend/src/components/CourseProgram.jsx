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
    sections: [
      {
        type: null,
        items: [
          "prawidłowe przygotowanie stanowiska dla efektywnej pracy",
          "nazwy i linki do niezbędnych materiałów"
        ]
      }
    ],
    image: mod0Img,
  },
  {
    id: 1,
    moduleName: "Moduł 1.1",
    title: "przygotowanie płytki",
    sections: [
      {
        type: "Część teoretyczna",
        items: [
          "budowa paznokcia",
          "bazy i ich właściwości",
          "lista najczęściej spotykanych zapowietrzeń pod bazą"
        ]
      }
    ],
    image: mod1_1Img,
  },
  {
    id: 2,
    moduleName: "Moduł 1.2",
    title: "przygotowanie płytki",
    sections: [
      {
        type: "Część praktyczna",
        items: [
          "mechaniczne przygotowanie płytki",
          "schemat opracowania skórek",
          "chemiczne przygotowanie płytki"
        ]
      }
    ],
    image: mod1_2Img,
  },
  {
    id: 3,
    moduleName: "Moduł 2",
    title: "dobranie formy",
    sections: [
      {
        type: "Część teoretyczna",
        items: [
          "kryteria postawienia formy",
          "dobieranie prawidłowego rozmiaru pod każdy typ paznokci"
        ]
      },
      {
        type: "Część praktyczna",
        items: [
          "dobieranie górnej formy na paznokieć"
        ]
      }
    ],
    image: mod2Img,
  },
  {
    id: 4,
    moduleName: "Moduł 3",
    title: "tworzenie szkieletu od 0",
    sections: [
      {
        type: null,
        items: [
          "praktyczna demonstracja przedłużenia szkieletu - schemat",
          "prawidłowe ułożenie żelu na formie",
          "piłowanie kształtów — równy kwadrat i szpic"
        ]
      }
    ],
    image: mod3Img,
  },
  {
    id: 5,
    moduleName: "Moduł 4",
    title: "budowa żelem",
    sections: [
      {
        type: null,
        items: [
          "nauka metody bez opiłowania",
          "schemat — efektowne i szybkie nałożenie żelu",
          "opracowanie gotowego paznokcia"
        ]
      }
    ],
    image: mod4Img,
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
  const gapSize = isMobile ? 16 : 57;

  return (
    <section id="course-program" className="w-full max-w-[1280px] mx-auto bg-white mb-[clamp(40px,5vw,64px)] flex flex-col items-center overflow-hidden">
      
      <div className="w-full flex items-center justify-center mb-[clamp(32px,5vw,56px)] overflow-hidden px-4 md:px-8">
        <div className="flex-1 flex justify-start overflow-hidden whitespace-nowrap opacity-70">
          <span className="font-helvetica font-medium text-black text-[clamp(20px,3vw,36px)] leading-none tracking-normal pl-2 md:pl-6">
            {repeatSymbols}
          </span>
        </div>
        <h2 className="px-[clamp(8px,2vw,24px)] font-snell font-medium text-[clamp(44px,6vw,96px)] text-black leading-none tracking-[-0.01em] text-center pb-2 shrink-0">
          Program szkolenia
        </h2>
        <div className="flex-1 flex justify-start overflow-hidden whitespace-nowrap opacity-70">
          <span className="font-helvetica font-medium text-black text-[clamp(20px,3vw,36px)] leading-none tracking-normal pl-2 md:pl-6">
            {repeatSymbols}
          </span>
        </div>
      </div>

      <div 
        className="w-[clamp(343px,90vw,1079px)] overflow-hidden mx-auto relative touch-pan-y"
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
              className="w-full shrink-0 flex justify-center"
              style={{ gap: `${gapSize}px`, marginRight: pageIndex === totalPages - 1 ? '0' : `${gapSize}px` }}
            >
              
              {page.map((mod) => (
                <article 
                  key={mod.id} 
                  className="flex-1 max-w-[511px] h-[clamp(371px,50vw,485px)] flex flex-col border border-black rounded-[20px] bg-gradient-to-b from-[#FFE5F3] to-white overflow-hidden shadow-sm"
                >
                  
                  <div className="w-full shrink-0 px-[clamp(16px,3vw,24px)] pt-[clamp(18px,3vw,24px)] pb-4 flex flex-col">
                    
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-[clamp(8px,2vw,16px)]">
                      <span className="font-snell italic font-bold text-[clamp(24px,3vw,38px)] text-black leading-none">
                        {mod.moduleName}
                      </span>
                      <h3 className="font-helvetica font-normal text-black text-[clamp(16px,2vw,24px)] leading-none">
                        — {mod.title}
                      </h3>
                    </div>

                    <div className="flex flex-col gap-[clamp(12px,2vw,20px)]">
                      {mod.sections.map((section, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          {section.type && (
                            <p className="font-helvetica font-medium text-[clamp(16px,2vw,24px)] mb-[clamp(6px,1.5vw,12px)] text-black leading-none">
                              {section.type}
                            </p>
                          )}
                          
                          <ul className="flex flex-col gap-[clamp(4px,1vw,8px)]">
                            {section.items.map((item, index) => (
                              <li key={index} className="flex items-start font-helvetica font-normal text-[clamp(16px,2vw,24px)] text-black leading-[clamp(20px,3vw,29px)]">
                                <span className="mr-[clamp(6px,1vw,8px)] mt-[-1px] text-[clamp(16px,2vw,24px)]">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="w-full flex-1 min-h-0">
                    {mod.image ? (
                      <img src={mod.image} alt={mod.moduleName} className="w-full h-full object-cover object-top" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex justify-center items-center bg-gray-50 text-gray-400 text-sm">
                        Brak obrazu
                      </div>
                    )}
                  </div>

                </article>
              ))}

            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-[clamp(12px,2vw,20px)] mt-[clamp(24px,4vw,40px)] px-4">
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          aria-label="Попередня сторінка"
          className={`p-2 transition-all duration-300 ${
            currentPage === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100 text-[#777777] hover:text-black cursor-pointer'
          }`}
        >
          <svg width="clamp(16px,3vw,24px)" height="clamp(16px,3vw,24px)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="flex gap-[clamp(5px,1vw,8px)] items-center">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              aria-label={`Перейти до сторінки ${idx + 1}`}
              className={`rounded-full transition-all duration-500 ease-in-out ${
                currentPage === idx 
                  ? 'bg-[#777777] w-[clamp(14px,2vw,22px)] h-[clamp(14px,2vw,22px)]' 
                  : 'bg-[#D9D9D9] w-[clamp(14px,2vw,22px)] h-[clamp(14px,2vw,22px)] hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          aria-label="Наступна сторінка"
          className={`p-2 transition-all duration-300 ${
            currentPage === totalPages - 1 ? 'opacity-30 pointer-events-none' : 'opacity-100 text-[#777777] hover:text-black cursor-pointer'
          }`}
        >
          <svg width="clamp(16px,3vw,24px)" height="clamp(16px,3vw,24px)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

    </section>
  );
}

export default CourseProgram;