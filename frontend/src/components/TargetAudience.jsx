import React from 'react';
import cardImg from '../assets/nails-card.jpg'; 

function TargetAudience() {
  return (
    <section className="w-full max-w-[1280px] mx-auto bg-white pb-8 md:pb-16 pt-8 md:pt-16">
      <div className="container px-4 md:px-16">
        
        <div className="w-full border border-gray-300 rounded-[24px] md:rounded-[40px] px-6 py-8 md:px-9 md:py-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-8 leading-[1.2]">
              Ten kurs jest dla ciebie, jeśli...
            </h2>

            <ul className="space-y-4 md:space-y-5 text-[18px] md:text-[22px] text-black tracking-wide mb-10">
              <li>• robisz paznokcie bardzo długo</li>
              <li>• boisz się pracy z formą górną</li>
              <li>• paznokcie odpadają lub pękają</li>
              <li>• nie wiesz jak dobrać materiały</li>
              <li>• chcesz mieć stabilny zarobek</li>
              <li>• chcesz podnieść ceny usług</li>
              <li>• masz dość długiego piłowania</li>
              <li>• chcesz pracować szybciej i wygodniej</li>
            </ul>

            <p className="font-bold text-[18px] md:text-[22px] text-black leading-[1.4]">
              I pamiętaj! Nie potrzebujesz talentu —<br className="hidden md:block" />
              potrzebujesz systemu ₊·° ♡ °·₊
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <img 
              src={cardImg} 
              alt="Stylizacja paznokci" 
              className="w-full h-auto object-cover rounded-[16px] md:rounded-[24px] shadow-sm"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default TargetAudience;