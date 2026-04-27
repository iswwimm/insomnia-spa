import React from 'react';

function CourseOutcomes() {
  const outcomes = [
    "wykonać pełną stylizację od przygotowania do topu",
    "pracować na formach górnych bez zalewania skórek",
    "skrócić czas pracy nawet o 1-2 godziny",
    "dobrać materiały pod każdą płytkę",
    "przyjmować pierwsze klientki",
    "ustawić poprawną architekturę paznokcia"
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)] flex justify-center mb-[clamp(40px,5vw,64px)]">
      
      <div 
        className="relative w-full max-w-[1150px] border border-black rounded-[20px] shadow-sm flex flex-col"
        style={{
          background: 'linear-gradient(180deg, #FFE5F3 0%, #EFC4EF 22.6%, #FFEEF7 65.38%, #EFDAED 100%)'
        }}
      >
        <div className="absolute top-[clamp(12px,2vw,20px)] left-[clamp(16px,3vw,37px)] flex items-center">
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

        <div className="w-full pt-[clamp(38px,5vw,62px)] pb-[clamp(13px,2vw,26px)] px-[clamp(10px,2vw,21px)]">
          
          <div 
            className="w-full h-full border border-black rounded-[16px] px-[clamp(26px,5vw,65px)] py-[clamp(24px,4vw,48px)] flex flex-col"
            style={{
              background: 'linear-gradient(180deg, #FEF8FF 0%, #EAEAEA 21%, #EAEAEA 100%)'
            }}
          >
            <h3 className="font-helvetica font-bold text-black text-[clamp(18px,3.5vw,34px)] leading-none mb-[clamp(16px,3vw,24px)]">
              Po kursie będziesz potrafiła:
            </h3>

            <ul className="flex flex-col gap-[clamp(8px,1vw,12px)]">
              {outcomes.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start font-helvetica font-normal text-black text-[clamp(16px,2vw,24px)] leading-[clamp(20px,3.5vw,44px)]"
                >
                  <span className="mr-[clamp(6px,1vw,10px)] mt-[-2px] font-bold text-[clamp(18px,2.5vw,26px)]">
                    ｡
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>

      </div>

    </section>
  );
}

export default CourseOutcomes;