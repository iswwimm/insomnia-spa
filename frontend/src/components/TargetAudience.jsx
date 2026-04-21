import React from 'react';
import cardImg from '../assets/nails-card.jpg'; 

function TargetAudience() {
  return (
    <section className="w-full max-w-[1280px] mx-auto bg-white mb-[clamp(40px,5vw,64px)] px-[clamp(16px,4vw,64px)] flex justify-center">
      
      <div className="w-full max-w-[1150px] border border-[#2D2D2D] rounded-[20px] px-[clamp(16px,4vw,36px)] py-[clamp(18px,4vw,42px)] flex flex-col md:flex-row items-center md:items-stretch gap-[clamp(24px,4vw,54px)]">
        
        <div className="flex-1 flex flex-col justify-between w-full">
          
          <div>
            <h2 className="font-helvetica font-bold text-[clamp(18px,3vw,36px)] leading-none text-black mb-[clamp(20px,4vw,45px)]">
              Ten kurs jest dla ciebie, jeśli...
            </h2>

            <ul className="flex flex-col gap-[clamp(8px,1.5vw,16px)] font-helvetica font-normal text-[clamp(16px,2vw,26px)] leading-[clamp(18px,3vw,36px)] text-black mb-[clamp(24px,4vw,40px)]">
              <li>• robisz paznokcie bardzo długo</li>
              <li>• boisz się pracy z formą górną</li>
              <li>• paznokcie odpadają lub pękają</li>
              <li>• nie wiesz jak dobrać materiały</li>
              <li>• chcesz mieć stabilny zarobek</li>
              <li>• chcesz podnieść ceny usług</li>
              <li>• masz dość długiego piłowania</li>
              <li>• chcesz pracować szybciej i wygodniej</li>
            </ul>
          </div>

          <p className="text-black leading-[clamp(24px,3vw,36px)] mt-auto">
            <span className="font-helvetica font-bold text-[clamp(16px,2.5vw,28px)]">
              I pamiętaj! Nie potrzebujesz talentu —{' '}
            <br className="hidden md:block" />
              potrzebujesz systemu!
            </span>
          </p>
        </div>

        <div className="w-full md:w-[clamp(220px,35vw,485px)] shrink-0">
          <img 
            src={cardImg} 
            alt="Stylizacja paznokci" 
            className="w-full h-full object-cover rounded-[19px]"
          />
        </div>

      </div>

    </section>
  );
}

export default TargetAudience;