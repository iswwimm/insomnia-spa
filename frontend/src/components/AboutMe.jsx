import React from 'react';
import aboutImg from '../assets/about-me.jpg';

function AboutMe() {
  const repeatSymbols = "･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ ".repeat(5);

  return (
    <section className="w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)] flex flex-col items-center mb-[clamp(25px,3vw,40px)]">
      
      <div className="w-full max-w-[1150px] border border-black rounded-[20px] p-[clamp(16px,3vw,36px)] mb-[clamp(25px,3vw,40px)] flex flex-col md:flex-row gap-[clamp(20px,4vw,64px)] items-center">
        
        <div className="flex-1 flex flex-col w-full">
          
          <h2 className="font-snell italic font-medium text-black text-[clamp(44px,6vw,96px)] leading-none mb-[clamp(16px,3vw,32px)]">
            Kim jestem
          </h2>

          <div className="flex flex-col gap-[clamp(12px,2vw,20px)] font-helvetica font-normal text-[#666666] text-[clamp(16px,2vw,24px)] leading-[clamp(19px,2.5vw,29px)]">
            <p>
              Nazywam się Karina. Od 6 lat pracuję w branży stylizacji paznokci i prowadzę studio Insomnia Nails.
            </p>
            <p>
              Mam doświadczenie w różnych technikach przedłużania paznokci, jednak w pracy wybrałam technikę górnych form. Chcę pokazać wszystkie zalety tej metody oraz podzielić się moją autorską techniką pracy.
            </p>
            <p>
              W tym kursie pokazuję, że stylizacja paznokci może być prosta i zrozumiała nawet dla osób początkujących. Kurs zawiera całe moje doświadczenie, z którego korzystam w codziennej pracy z klientkami.
            </p>
          </div>

        </div>

        <div className="w-full md:w-[clamp(326px,40vw,488px)] shrink-0 flex justify-center">
          <img 
            src={aboutImg} 
            alt="Karina - Instruktor stylizacji paznokci" 
            className="w-full h-auto object-cover rounded-[clamp(10px,1.5vw,13px)] shadow-sm"
            loading="lazy"
          />
        </div>

      </div>

      <div className="w-full overflow-hidden flex justify-center opacity-90">
        <p className="font-helvetica font-medium text-[clamp(19px,2.5vw,36px)] tracking-[0.1em] whitespace-nowrap text-center text-black">
          {repeatSymbols}
        </p>
      </div>

    </section>
  );
}

export default AboutMe;