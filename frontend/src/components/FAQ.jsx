import React, { useState } from 'react';
import illustrationImg from '../assets/barashka.png'; 

const faqData = [
  {
    question: "czy kurs jest dla początkujących?",
    answer: "Tak. Kurs jest odpowiedni zarówno dla osób początkujących, jak i dla stylistek, które już pracują w zawodzie i chcą nauczyć się szybkiej oraz wygodnej techniki górnych form. Wszystko tłumaczę krok po kroku – od przygotowania płytki aż do gotowej architektury paznokcia."
  },
  {
    question: "czy dostanę certyfikat?",
    answer: "Tak, po ukończeniu kursu otrzymasz imienny certyfikat potwierdzający zdobyte umiejętności."
  },
  {
    question: "ile mam czasu dostępu?",
    answer: "Dostęp do kursu otrzymujesz na określony czas (zazwyczaj 6-12 miesięcy w zależności od wybranego pakietu), w trakcie którego możesz wracać do materiałów wielokrotnie."
  },
  {
    question: "czy potrzebuję modeli?",
    answer: "Na początkowym etapie możesz ćwiczyć na własnych dłoniach lub wzornikach, ale do pełnego opanowania techniki zalecana jest praca na modelkach."
  },
  {
    question: "jakie materiały kupić?",
    answer: "W Module 0 znajdziesz kompletną listę polecanych produktów wraz z linkami do sklepów, więc nie musisz kupować niczego w ciemno przed startem."
  },
  {
    question: "czy mogę płacić w ratach?",
    answer: "Tak, oferujemy płatności ratalne przez zaufanych operatorów płatności dostępnych w koszyku podczas finalizacji zamówienia."
  },
  {
    question: "czy kurs jest po polsku?",
    answer: "Tak, cały kurs, materiały wideo oraz skrypty są w 100% w języku polskim."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-[clamp(16px,4vw,64px)] mb-[clamp(40px,5vw,65px)] flex justify-center">
      
      <div className="relative w-full max-w-[1280px] bg-[#FFE5F3] rounded-[20px] px-[clamp(24px,5vw,104px)] py-[clamp(36px,5vw,64px)] flex flex-col md:flex-row justify-between items-center md:items-start overflow-hidden md:overflow-visible">
        
        <div className="relative z-10 w-full md:w-[537px] flex flex-col">
          
          <h2 className="font-snell italic font-bold text-black text-[clamp(44px,6vw,96px)] leading-none mb-[clamp(24px,4vw,40px)] pt-2 md:pt-0">
            F&Q
          </h2>

          <div className="flex flex-col gap-[clamp(16px,2vw,24px)]">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-answer-${index}`;

              return (
                <div key={index} className="flex flex-col w-full">
                  
                  <button 
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex flex-row items-center justify-start gap-[clamp(10px,1.5vw,16px)] w-full text-left focus:outline-none group"
                  >
                    <span className="font-helvetica font-medium text-black text-[clamp(16px,2.5vw,26px)] leading-tight">
                      {item.question}
                    </span>

                    <div className="shrink-0 flex items-center justify-center mt-1">
                      <svg 
                        style={{ width: 'clamp(12px, 1.5vw, 18px)', height: 'clamp(8px, 1vw, 11px)' }}
                        viewBox="0 0 18 11" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      >
                        <path d="M2 2L9 9L16 2" stroke="#666666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>

                  <div 
                    id={contentId}
                    role="region"
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-[clamp(8px,1.5vw,12px)]' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-helvetica font-normal text-[#444444] text-[clamp(15px,1.5vw,24px)] leading-[clamp(20px,2vw,29px)] pr-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        <div 
          className="absolute z-0 pointer-events-none"
          aria-hidden="true"
          style={{
            width: 'clamp(311px, 45vw, 644px)',
            height: 'clamp(389px, 56vw, 805px)',
            right: 'clamp(-110px, 14vw - 160px, 20px)',
            top: 'clamp(-60px, -11vw + 80px, 40px)'
          }}
        >
          <img 
            src={illustrationImg} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

      </div>

    </section>
  );
}

export default FAQ;