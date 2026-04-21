import React from 'react';
import logoImg from '../assets/logo-header.png';

function Header() {
  return (
    <header className="w-full h-[clamp(65px,7vw+38px,125px)] bg-white flex items-center justify-center z-50">
      
      <div className="w-full max-w-[1280px] mx-auto h-full flex items-center justify-center px-4 md:px-8 relative">
        
        <img
          src={logoImg}
          alt="Insomnia Course Logo"
          className="w-[clamp(225px,35vw+88px,536px)] h-auto object-contain"
          fetchpriority="high" 
        />
        
      </div>
      
    </header>
  );
}

export default Header;