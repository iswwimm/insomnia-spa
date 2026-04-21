import React from 'react';
import bowImg from '../assets/tariff-bow.png'; 
import wingsImg from '../assets/tariff-wings.png';

function Tariffs() {
  const symbolsLeft = "｡･ﾟ*･｡ﾟ･ﾟ✩ *:･ﾟ✧  ｡";
  const symbolsRight = "･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡";

  return (
    <section className="w-full max-w-[1280px] mx-auto bg-white py-[clamp(64px,6vw,80px)] flex flex-col items-center overflow-hidden">
        <div className="w-full flex items-center justify-center mb-[clamp(40px,4vw,50px)] overflow-hidden px-4 md:px-8">
            
            <div className="flex-1 flex justify-end overflow-hidden whitespace-nowrap opacity-60">
            <span className="font-helvetica tracking-[0.1em] text-black text-[clamp(18px,2.5vw,36px)] pr-3 lg:pr-6">
                {symbolsLeft.repeat(3)}
            </span>
            </div>

            <span className="font-snell text-[clamp(60px,7vw,96px)] text-black leading-none pb-2 shrink-0">
            Taryfy
            </span>
            <div className="flex-1 flex justify-start overflow-hidden whitespace-nowrap opacity-60">
            <span className="font-helvetica tracking-[0.1em] text-black text-[clamp(18px,2.5vw,36px)] pl-3 lg:pl-6">
                {symbolsRight.repeat(3)}
            </span>
            </div>
            
        </div>
    
      <div className="w-full max-w-[1150px] px-5 md:px-8 lg:px-[36px] flex flex-col md:flex-row justify-center lg:justify-between items-center md:items-stretch gap-6 md:gap-[clamp(24px,4vw,56px)] mx-auto">

        <div className="relative w-full max-w-[358px] md:max-w-none md:flex-1 lg:max-w-[511px] min-h-[390px] lg:min-h-[545px] bg-[#C6C6C6] rounded-[20px] overflow-hidden flex flex-col z-0 shadow-sm">
          
          <div className="absolute top-0 left-0 w-full h-[200px] lg:h-[270px] z-0">
            <img 
              src={bowImg} 
              alt="Standart Bow" 
              className="w-[90%] mx-auto h-full object-contain object-top pt-2 lg:pt-4 opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C6C6C6] from-50% to-[85%]"></div>
          </div>

          <div className="relative z-10 pt-[clamp(190px,20vw,240px)] px-[clamp(16px,4vw,43px)] pb-6 lg:pb-10 flex-1 flex flex-col">
            
            <h3 className="font-snell font-bold text-[clamp(44px,5vw,64px)] text-black leading-none mb-[clamp(12px,1.5vw,16px)]">
              Standart
            </h3>
            
            <ul className="flex flex-col gap-[clamp(6px,1vw,8px)]">
              {[
                "dostęp do wszystkich lekcji",
                "linki na materiały do pobrania",
                "lista produktów",
                "wspólny czat z innymi uczestniczkami",
                "certyfikat pdf"
              ].map((item, index) => (
                <li key={index} className="flex items-start font-helvetica text-black text-[clamp(16px,2vw,24px)] leading-[1.1] lg:leading-none mt-[2px] lg:mt-0">
                  <span className="mr-[8px] mt-[-2px]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
          </div>
        </div>

        <div className="relative w-full max-w-[358px] md:max-w-none md:flex-1 lg:max-w-[511px] min-h-[422px] lg:min-h-[545px] bg-[#FFE5F3] border-[2px] lg:border-[3px] border-[#6F3359] rounded-[20px] overflow-hidden flex flex-col z-0 shadow-sm">
          
          <div className="absolute top-0 left-0 w-full h-[200px] lg:h-[270px] z-0">
            <img 
              src={wingsImg} 
              alt="Premium Wings" 
              className="w-[88%] mx-auto h-full object-contain object-top pt-2 lg:pt-4 opacity-90" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFE5F3] from-50% to-[85%]"></div>
          </div>

          <div className="relative z-10 pt-[clamp(190px,20vw,240px)] px-[clamp(16px,4vw,43px)] pb-5 lg:pb-[24px] flex-1 flex flex-col">
            
            <h3 className="font-snell font-bold text-[clamp(44px,5vw,64px)] text-black leading-none mb-[clamp(12px,1.5vw,16px)]">
              Premium
            </h3>
            
            <ul className="flex flex-col gap-[clamp(6px,1vw,8px)] mb-[clamp(20px,2vw,24px)]">
              {[
                "wszystko ze standard",
                "sprawdzanie prac",
                "konsultacje",
                "kontakt ze mną",
                "ograniczona liczba miejsc"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start font-helvetica text-[#666666] text-[clamp(16px,2vw,24px)] leading-[1.1] lg:leading-none mt-[2px] lg:mt-0 ${index === 0 ? 'font-medium' : 'font-normal'}`}
                >
                  <span className="mr-[8px] mt-[-2px] text-[#666666]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-auto font-helvetica italic font-medium text-[clamp(14px,2vw,24px)] text-[#666666] leading-none">
              *premium tylko 10 miejsc w edycji
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Tariffs;