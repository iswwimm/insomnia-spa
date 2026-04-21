import React from 'react';

function CourseIntro() {
  return (
    <section className="w-full max-w-[1280px] mx-auto bg-gradient-to-b from-[#FFE5F3] to-[#FFFFFF] mb-[clamp(40px,5vw,64px)] py-[clamp(32px,5vw,52px)] flex justify-center">
      
      <div className="w-full px-[clamp(32px,6vw,100px)] flex flex-col gap-[clamp(24px,4vw,48px)]">
        
        <div className="flex flex-col gap-[clamp(12px,2.5vw,24px)]">
          
          <h2 className="font-helvetica font-bold text-[clamp(18px,3vw,36px)] leading-[clamp(24px,3.5vw,40px)] text-black">
            Nauczę cię robić paznokcie salonowe szybko, czysto i bez stresu!
          </h2>

          <p className="font-helvetica font-normal text-[clamp(16px,2.5vw,32px)] leading-[clamp(24px,3.5vw,40px)] text-black">
            kursy dla <span className="font-bold italic">początkujących</span> i stylistek, które chcą <span className="font-bold italic">przyspieszyć pracę</span> i zacząć zyskać na klientkach
          </p>

          <ul className="flex flex-col gap-[clamp(4px,1vw,8px)] font-helvetica font-normal text-[clamp(12px,2vw,26px)] leading-[clamp(24px,3.5vw,40px)] text-black mt-[clamp(4px,1vw,8px)]">
            <li>• ponad 6 lat w branży stylizacji kreatywnych paznokci</li>
            <li>• uczennice w całej Polsce i Europie</li>
            <li>• nauka krok po kroku</li>
          </ul>

        </div>

        <a 
          href="#course-program"
          className="w-full max-w-[354px] h-[clamp(52px,6vw,69px)] bg-[#FFE3F8] hover:bg-[#F8D6E8] transition-colors duration-300 rounded-[clamp(12px,1.5vw,16px)] flex items-center justify-center font-helvetica font-bold text-[clamp(16px,2vw,24px)] text-black uppercase tracking-wide shadow-sm"
        >
          ZOBACZ PROGRAM
        </a>

      </div>

    </section>
  );
}

export default CourseIntro;