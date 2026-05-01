import React from 'react';
import logoImg from '../assets/logofooter.png'; 

function Footer() {
  return (
    <footer className="w-full bg-[#666666] flex justify-center mt-auto mt-[clamp(40px,5vw,65px)]">
      
      <div className="relative w-full max-w-[1280px] px-[clamp(32px,5vw,100px)] py-[clamp(40px,5vw,76px)] flex justify-between items-center">
        
        <div className="flex-shrink-0">
          <img 
            src={logoImg} 
            alt="Insomnia Course Logo" 
            className="w-[clamp(96px,12vw,165px)] h-auto object-contain"
          />
        </div>

        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-[40px]">
          <SocialIcons />
        </div>

        <div className="flex flex-col items-start gap-[clamp(16px,3vw,24px)]">
          
          <nav aria-label="Stopka" className="flex flex-col gap-[clamp(8px,1vw,12px)] items-start">
            <a 
              href="#regulamin" 
              className="font-helvetica font-medium text-white text-[clamp(14px,1.5vw,24px)] leading-tight hover:text-[#FFD6E8] transition-colors duration-300"
            >
              regulamin
            </a>
            <a 
              href="#polityka" 
              className="font-helvetica font-medium text-white text-[clamp(14px,1.5vw,24px)] leading-tight hover:text-[#FFD6E8] transition-colors duration-300"
            >
              polityka prywatności
            </a>
            <a 
              href="#kontakt" 
              className="font-helvetica font-medium text-white text-[clamp(14px,1.5vw,24px)] leading-tight hover:text-[#FFD6E8] transition-colors duration-300"
            >
              kontakt
            </a>
          </nav>

          <div className="flex md:hidden items-center gap-[17px] mt-2">
            <SocialIcons />
          </div>

        </div>

      </div>
    </footer>
  );
}

function SocialIcons() {
  return (
    <>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Instagram"
        className="text-white hover:text-[#FFD6E8] transition-colors duration-300 transform hover:scale-110"
      >
        <svg className="w-[clamp(18px,2vw,44px)] h-[clamp(18px,2vw,44px)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.98a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
        </svg>
      </a>

      <a 
        href="https://tiktok.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="TikTok"
        className="text-white hover:text-[#FFD6E8] transition-colors duration-300 transform hover:scale-110"
      >
        <svg className="w-[clamp(15px,1.8vw,36px)] h-[clamp(18px,2vw,44px)]" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
        </svg>
      </a>

      <a 
        href="mailto:kontakt@insomnia.pl" 
        aria-label="Wyślij email"
        className="text-white hover:text-[#FFD6E8] transition-colors duration-300 transform hover:scale-110"
      >
        <svg className="w-[clamp(23px,2.5vw,50px)] h-[clamp(18px,2vw,39px)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </a>
    </>
  );
}

export default Footer;