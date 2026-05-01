import React from 'react';
import nailsBannerImg from '../assets/calltoaction.jpg'; 

function CallToAction({onOpenModal}) {
  return (
    <section className="relative w-full max-w-[1280px] mx-auto bg-white flex flex-col items-center mb-[clamp(40px,5vw,65px)] overflow-hidden">
      
      <div className="relative w-full h-[clamp(364px,50vw,555px)] flex-shrink-0">
        
        <img 
          src={nailsBannerImg} 
          alt="Stylizacja paznokci" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-white opacity-20"></div>
        
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent via-white/80 to-white"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center px-[clamp(16px,4vw,64px)] pb-[clamp(20px,3vw,40px)] -mt-[clamp(60px,12vw,140px)]">
        
        <h2 className="font-helvetica font-medium text-black text-center leading-[1.2] tracking-tight max-w-[1074px] text-[clamp(18px,3.5vw,48px)] mb-[clamp(24px,4vw,50px)]">
          Możesz dalej oglądać filmy na Tik Tok, albo w końcu nauczyć się zawodu
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[clamp(12px,2vw,24px)] w-full">
          
          <button 
            className="group relative flex justify-center items-center bg-[#FFE3F8] rounded-[12px] px-[clamp(32px,5vw,68px)] py-[clamp(14px,2vw,22px)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 shadow-sm"
            onClick={onOpenModal}
            aria-haspopup="dialog"
          >
            <div className="absolute inset-0 w-full h-full bg-white/40 translate-x-[-100%] group-hover:animate-shimmer skew-x-[-20deg]"></div>
            
            <span className="relative z-10 font-helvetica font-bold text-black uppercase whitespace-nowrap text-[clamp(20px,2.5vw,32px)] leading-none tracking-wide">
              Dołącz do szkolenia
            </span>
          </button>

          <p className="font-helvetica italic font-medium text-black uppercase text-center md:text-left text-[clamp(12px,1.5vw,24px)] leading-tight max-w-[326px] md:max-w-none opacity-80 pt-2 md:pt-0">
            Dostęp otrzymasz od razu po płatności
          </p>

        </div>

      </div>

    </section>
  );
}

export default CallToAction;