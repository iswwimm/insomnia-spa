import React from 'react';
import heroImg from '../assets/hero-nails.jpg';

function Hero() {
  const symbols = "･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ";

  return (
    <section className="relative w-full h-[650px] lg:h-[900px] bg-white flex flex-col justify-start items-center">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={heroImg} 
          alt="Insomnia Nails Detail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1040px] max-h-[360] pt-[550px]">
        <h1 className="font-snell text-[130px] md:text-[220px] lg:text-[286px] leading-[0.55] text-black">
          Insomnia
        </h1>

        <p className="font-helvetica font-medium text-[20px] md:text-[36px] text-black mt-[20px] md:mt-[32px] tracking-wide">
          zapisy na szkolenie otwarte
        </p>
      </div>

      <div className="relative z-10 w-full pb-16 flex justify-center">
        <div className="max-w-[1440px] px-4 overflow-hidden flex justify-center">
          <p className="font-helvetica font-medium text-[22px] md:text-[36px] tracking-[0.1em] whitespace-nowrap text-center">
            {symbols}
          </p>
        </div>
      </div>

    </section>
  );
}

export default Hero;