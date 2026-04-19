import React from 'react';

function CourseIntro() {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFF0F6] to-white pt-10 pb-10 md:pt-12 md:pb-12">
      
      <div className="container">
        
        <div className="max-w-[1080px] px-6 md:px-24">
          
          <h2 className="text-[24px] md:text-[36px] font-bold leading-[1.2] mb-3 md:mb-6 text-black tracking-tight">
            Nauczę cię robić paznokcie salonowe szybko, czysto i bez stresu!
          </h2>

          <p className="text-[20px] md:text-[32px] leading-[1.4] mb-3 md:mb-6 text-black">
            kursy dla <span className="font-bold italic">początkujących</span> i stylistek, które chcą <span className="font-bold italic">przyspieszyć pracę</span> i zacząć zyskać na klientkach
          </p>

          <ul className="space-y-3 text-[18px] md:text-[26px] mb-6 md:mb-12 text-black tracking-wide">
            <li>• ponad 6 lat w branży stylizacji kreatywnych paznokci</li>
            <li>• uczennice w całej Polsce i Europie</li>
            <li>• nauka krok po kroku</li>
          </ul>

          <button className="bg-[#FFE5F1] text-black font-bold uppercase text-[16px] md:text-[18px] tracking-wide px-12 py-5 rounded-[20px] hover:bg-[#F8D6E8] transition-colors shadow-sm">
            Zobacz program
          </button>

        </div>
      </div>
    </section>
  );
}

export default CourseIntro;