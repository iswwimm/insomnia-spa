import React from 'react';
import logoImg from '../assets/logo-header.png';

function Header() {
  return (
    <header className="w-full h-[125px] flex items-center justify-center">
      <div className="container h-full flex items-center justify-center">
        <img
          src={logoImg}
          alt="Insomnia Course Logo"
          className="h-[50px] md:h-[130px] w-auto object-contain"
          fetchpriority="high" 
        />
      </div>
    </header>
  );
}

export default Header;