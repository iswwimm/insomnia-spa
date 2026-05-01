import React from 'react';
import ipadImg from '../assets/learning-ipad.jpg'; 

function LearningProcess() {
  const listItems = [
    {
      text: "nagrane lekcje video",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 10.5V7C17 6.44772 16.5523 6 16 6H4C3.44772 6 3 6.44772 3 7V17C3 17.5523 3.44772 18 4 18H16C16.5523 18 17 17.5523 17 17V13.5L21 17.5V6.5L17 10.5Z" />
        </svg>
      )
    },
    {
      text: "dostęp natychmiast po zakupie",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
        </svg>
      )
    },
    {
      text: "uczysz się w swoim tempie",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
        </svg>
      )
    },
    {
      text: "dostęp 24/7",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" />
        </svg>
      )
    },
    {
      text: "lista materiałów",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" />
        </svg>
      )
    },
    {
      text: "zamknięta grupa uczennic",
      icon: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 15C14 16.1 13.1 17 12 17ZM15 8H9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8Z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto bg-white py-16 lg:py-[60px] flex justify-center px-4 md:px-8">
      
      <div className="w-full max-w-[1150px] flex flex-col md:flex-row bg-[#FFE5F3] rounded-[20px] overflow-hidden shadow-sm h-auto lg:h-[390px]">
        
        <div className="w-full md:flex-1 lg:flex-none lg:w-[515px] shrink-0 pt-[21px] px-[16px] pb-8 md:p-[32px] lg:p-[40px] flex flex-col justify-center">
          
          <h2 className="font-helvetica font-bold text-[24px] md:text-[28px] lg:text-[36px] text-black leading-none mb-[13px] md:mb-[24px] lg:mb-[32px]">
            Jak wygląda nauka?
          </h2>

          <ul className="flex flex-col gap-3 md:gap-[12px]">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start md:items-center gap-[9px]">
                <div className="shrink-0 flex items-center justify-center w-[20px] h-[20px] md:w-[24px] md:h-[24px] mt-[2px] md:mt-0">
                  {item.icon}
                </div>
                <span className="font-helvetica font-normal text-[18px] md:text-[20px] lg:text-[24px] text-[#666666] leading-snug md:leading-none">
                  {item.text}
                </span>

              </li>
            ))}
          </ul>

        </div>
        <div className="w-full md:flex-1 lg:flex-none lg:w-[635px] shrink-0 h-[250px] md:h-full relative">
          <img 
            src={ipadImg} 
            alt="Proces nauki na iPadzie" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

      </div>

    </section>
  );
}

export default LearningProcess;