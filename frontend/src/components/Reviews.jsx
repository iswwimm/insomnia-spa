import React, { useState, useEffect, useRef } from 'react';
import review1Img from '../assets/review-1.jpg';
import review2Img from '../assets/review-2.jpg';
import review3Img from '../assets/review-3.jpg';

const reviewsData = [
  { id: 1, image: review1Img, alt: "Recenzja 1" },
  { id: 2, image: review2Img, alt: "Praca uczennicy 2" },
  { id: 3, image: review3Img, alt: "Recenzja 3" },
];

function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleItems(1);
      } else if (width < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
      setCurrentPage(0); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxPage = Math.max(0, reviewsData.length - visibleItems);

  const nextPage = () => {
    if (currentPage < maxPage) setCurrentPage(prev => prev + 1);
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

  const gapSize = 31;

  return (
    <section className="w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)] mb-[clamp(40px,5vw,64px)] flex justify-center">
      
      <div 
        className="relative w-full max-w-[1150px] border border-black rounded-[20px] shadow-sm flex flex-col mt-[1px]"
        style={{
          background: 'linear-gradient(180deg, #FFE5F3 0%, #FFE1FF 22.6%, #FFEEF7 65.38%, #EFDAED 100%)'
        }}
      >
        <div className="absolute top-[clamp(12px,2vw,20px)] left-[clamp(16px,3vw,53px)] flex items-center">
          <span className="font-helvetica font-normal text-black text-[clamp(15px,2vw,24px)] leading-none">
            untitled - Paint
          </span>
        </div>

        <div className="absolute top-[-1px] right-[clamp(16px,4vw,37px)] flex h-[clamp(24px,3.5vw,40px)] bg-white border border-black rounded-b-[clamp(3px,0.5vw,5px)] overflow-hidden z-10">
          <div 
            className="w-[clamp(35px,4.5vw,55px)] h-full border-r border-black flex justify-center items-end pb-[clamp(4px,1vw,9px)]"
            style={{ background: 'linear-gradient(180deg, #F5E9F3 19.23%, #D2BAD0 41.83%, #D8C5E1 100%)' }}
          >
            <div 
              className="w-[clamp(17px,2.5vw,28px)] h-[clamp(4px,0.8vw,7px)] border border-black"
              style={{ background: 'linear-gradient(180deg, #F5E9F3 0%, #C6B5C7 100%)' }}
            ></div>
          </div>
          <div 
            className="w-[clamp(34px,4.5vw,54px)] h-full border-r border-black flex justify-center items-center"
            style={{ background: 'linear-gradient(180deg, #F5E9F3 19.23%, #D2BAD0 41.83%, #D8C5E1 100%)' }}
          >
            <div 
              className="w-[clamp(13px,2vw,21px)] h-[clamp(13px,2vw,21px)] border border-black flex justify-center items-center"
              style={{ background: 'linear-gradient(180deg, #FFF8FF 0%, #D2BDD0 100%)' }}
            >
              <div 
                className="w-[clamp(7px,1vw,11px)] h-[clamp(7px,1vw,11px)] border border-black"
                style={{ background: 'linear-gradient(180deg, #D6BFD4 0%, #D4BED6 100%)' }}
              ></div>
            </div>
          </div>
          <div 
            className="w-[clamp(48px,6vw,76px)] h-full flex justify-center items-center"
            style={{ background: 'linear-gradient(180deg, #DABBB9 19.23%, #BE4E42 41.83%, #E58F89 100%)' }}
          >
            <span 
              className="font-black text-[clamp(20px,2.5vw,32px)] leading-none pb-[1px]"
              style={{
                fontFamily: 'Heebo, sans-serif',
                background: 'linear-gradient(180deg, #F5E9F3 20.35%, #D7C3DF 73.84%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '1px black'
              }}
            >
              X
            </span>
          </div>
        </div>

        <div className="w-full pt-[clamp(48px,6vw,68px)] pb-[clamp(16px,3vw,24px)] px-[clamp(10px,2vw,24px)]">
          
          <div 
            className="w-full h-full border border-black rounded-[16px] px-[clamp(16px,3vw,42px)] pt-[clamp(24px,4vw,32px)] pb-[clamp(16px,3vw,24px)] flex flex-col"
            style={{
              background: 'linear-gradient(180deg, #FEF8FF 0%, #EAEAEA 21%, #EAEAEA 100%)'
            }}
          >
            
            <h2 className="font-helvetica font-bold text-black text-[clamp(16px,3vw,32px)] leading-[1.2] text-left md:text-left mb-[clamp(24px,4vw,32px)] px-2">
              Recenzje i prace uczennic z poprzednich edycji
            </h2>


            <div 
              className="w-full overflow-hidden touch-pan-y flex-1"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ 
                  transform: `translateX(calc(-${currentPage * (100 / visibleItems)}% - ${currentPage * (gapSize / visibleItems)}px))` 
                }}
              >
                {reviewsData.map((review) => (
                  <div 
                    key={review.id} 
                    className="shrink-0 flex justify-center items-center"
                    style={{ 
                      width: `calc((100% - ${(visibleItems - 1) * gapSize}px) / ${visibleItems})`,
                      marginRight: `${gapSize}px` 
                    }}
                  >
                    <img 
                      src={review.image} 
                      alt={review.alt} 
                      className="w-full h-full max-h-[366px] object-contain md:object-cover rounded-[8px] drop-shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
            {maxPage > 0 && (
              <div className="flex justify-center items-center gap-[20px] mt-[clamp(24px,4vw,32px)]">

                <button 
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  aria-label="Previous reviews"
                  className={`p-1 transition-all duration-300 ${
                    currentPage === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100 cursor-pointer hover:-translate-x-1'
                  }`}
                >
                  <svg width="clamp(14px,2vw,20px)" height="clamp(22px,3vw,30px)" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M2 2L9 9L2 16" stroke="#777777" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <div className="flex gap-[8px] items-center">
                  {Array.from({ length: maxPage + 1 }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx)}
                      aria-label={`Go to review group ${idx + 1}`}
                      className={`rounded-full transition-all duration-300 ease-in-out ${
                        currentPage === idx 
                          ? 'bg-[#4B4B4B] w-[clamp(14px,2vw,22px)] h-[clamp(14px,2vw,22px)]' 
                          : 'bg-[#A3A3A3] w-[clamp(14px,2vw,22px)] h-[clamp(14px,2vw,22px)] hover:bg-[#777777]'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextPage}
                  disabled={currentPage === maxPage}
                  aria-label="Next reviews"
                  className={`p-1 transition-all duration-300 ${
                    currentPage === maxPage ? 'opacity-30 pointer-events-none' : 'opacity-100 cursor-pointer hover:translate-x-1'
                  }`}
                >
                  <svg width="clamp(14px,2vw,20px)" height="clamp(22px,3vw,30px)" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L9 9L2 16" stroke="#777777" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Reviews;