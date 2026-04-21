import React from 'react';
import heroImg from '../assets/hero-nails.jpg';

function Hero() {
  const symbols = "･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ･ﾟ✩ *:･ﾟ✧  ｡･ﾟ♡ﾟ･｡☆ﾟ.*･｡ﾟ";

  return (
    <section className="relative w-full max-w-[1280px] mx-auto h-[clamp(450px,65vw,870px)] bg-white flex flex-col justify-end items-center overflow-hidden mb-[clamp(40px,5vw,64px)]">
      
      <div className="absolute inset-0 w-full h-full z-0">
        
        <img 
          src={heroImg} 
          alt="Insomnia Nails Detail" 
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-white/25"></div>

        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-white via-white/60 to-transparent"></div>
        
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1200px] xl:max-w-[1400px] px-2">
        
        <h1 className="font-snell font-medium text-black leading-none text-[clamp(85px,22vw,326px)] px-[clamp(16px,5vw,80px)] drop-shadow-sm translate-y-[clamp(0px,6vw,70px)]">
          Insomnia
        </h1>

        <p className="font-helvetica font-medium text-black text-[clamp(16px,2.5vw,36px)] leading-none mt-[clamp(8px,2vw,20px)] mb-[clamp(28px,6vw,94px)] tracking-wide">
          zapisy na szkolenie otwarte
        </p>

        <div className="w-full overflow-hidden flex justify-center opacity-90">
          <p className="font-helvetica font-bold text-[clamp(19px,2.5vw,36px)] tracking-[0.1em] whitespace-nowrap text-center text-black">
            {symbols}
          </p>
        </div>

      </div>

    </section>
  );
}

export default Hero;