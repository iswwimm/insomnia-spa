import React from 'react';
import logoImg from '../assets/logo-header.png';

function Header() {
  return (
    <header className="w-full h-[125px] bg-white flex items-center justify-center relative z-50">
      <div className="w-full max-w-[1280px] h-full flex items-center justify-center px-4 md:px-8 relative">
        
        <img
          src={logoImg}
          alt="Insomnia Course Logo"
          className="w-[280px] md:w-[400px] lg:w-[540px] h-auto object-contain"
          fetchpriority="high" 
        />
        
      </div>
      
    </header>
  );
}

export default Header;