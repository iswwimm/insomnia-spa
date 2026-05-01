import React, { useState } from 'react';

function CheckoutModal({ onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Podaj poprawne imię i nazwisko';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Podaj poprawny adres e-mail';
    }

    const phoneRegex = /^[+0-9\s-]{9,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Podaj poprawny numer telefonu';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Data ready for submission:", formData);
    setIsSubmitted(true); 
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-[clamp(16px,4vw,32px)] bg-black/20 backdrop-blur-[8px] transition-opacity"
      onClick={onClose}
    >
      <div 
        className={`relative bg-[#FFE5F3]/60 backdrop-blur-[10px] border border-black rounded-[20px] w-full max-w-[1006px] flex items-center justify-center p-[clamp(24px,4vw,64px)] shadow-2xl overflow-hidden transition-all duration-300 ${isSubmitted ? 'min-h-[136px] md:min-h-[495px]' : 'min-h-[351px] md:min-h-[495px]'}`}
        onClick={handleModalClick}
      >
        
        <button 
          onClick={onClose}
          className="absolute top-[clamp(16px,2vw,24px)] right-[clamp(16px,2vw,24px)] text-black hover:text-gray-600 transition-colors z-10"
          aria-label="Zamknij okno"
        >
          <svg className="w-[clamp(24px,3vw,32px)] h-[clamp(24px,3vw,32px)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center md:items-stretch justify-center w-full max-w-[850px] gap-y-[clamp(32px,5vw,48px)] animate-fadeIn"
          >

            <div className="flex flex-col justify-center gap-[clamp(9px,2vw,20px)] w-full max-w-[425px]">
              <InputField 
                type="text" 
                name="name"
                placeholder="Imię Nazwisko" 
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField 
                type="email" 
                name="email"
                placeholder="E-mail" 
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField 
                type="tel" 
                name="phone"
                placeholder="Nr telefonu" 
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
            </div>

            <div className="hidden md:flex items-center mx-[clamp(20px,4vw,60px)]">
              <div className="w-[1px] h-[calc(100%-20px)] bg-black opacity-30"></div>
            </div>

            <div className="flex flex-col justify-center gap-[clamp(20px,3vw,32px)] w-full max-w-[357px]">
              <p className="font-helvetica italic font-medium text-black text-center md:text-left text-[clamp(16px,1.8vw,20px)] leading-[1.2]">
                Kurs będzie prowadzony na platformie Telegram
              </p>
              <button 
                type="submit"
                className="w-full bg-white border border-black rounded-[8px] h-[clamp(48px,5vw,70px)] flex justify-center items-center hover:bg-[#FFF0F8] hover:-translate-y-1 transition-all duration-300 active:translate-y-0"
              >
                <span className="font-helvetica italic font-medium text-black uppercase text-[clamp(16px,1.8vw,20px)] tracking-wide">
                  Przejdź do opłaty
                </span>
              </button>
            </div>
          </form>

        ) : (
          
          <div className="flex flex-col items-center justify-center text-center w-full max-w-[770px] animate-fadeIn gap-[clamp(16px,3vw,30px)]">
            <h3 className="font-snell italic font-bold text-black text-[clamp(26px,5vw,64px)] leading-tight">
              Dziękujemy za płatność!
            </h3>
            <div className="hidden md:block w-[759px] h-[1px] bg-black my-2 opacity-50"></div>
            <p className="font-helvetica font-normal text-black text-[clamp(16px,2.5vw,36px)] leading-tight">
              Wszystkie informacje znajdziesz w Telegramie
            </p>
          </div>
          
        )}

      </div>
    </div>
  );
}

function InputField({ type, name, placeholder, value, onChange, error }) {
  return (
    <div className="w-full flex flex-col">
      <div className={`relative w-full h-[clamp(48px,5vw,70px)] bg-white rounded-[clamp(8px,1vw,12px)] overflow-hidden group border transition-colors duration-300 shadow-sm ${error ? 'border-red-500' : 'border-transparent focus-within:border-black/30'}`}>
        <input 
          type={type} 
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-full bg-transparent outline-none px-[clamp(15px,2vw,23px)] pt-[4px] pb-[16px] font-helvetica font-medium text-black text-[clamp(16px,1.8vw,24px)] placeholder:text-[#C8C8C8]"
        />
        <div className={`absolute bottom-[clamp(10px,1.5vw,16px)] left-[clamp(15px,2vw,23px)] right-[clamp(15px,2vw,23px)] h-[1px] transition-colors duration-300 ${error ? 'bg-red-500' : 'bg-[#C8C8C8] group-focus-within:bg-black'}`}></div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${error ? 'max-h-[30px] opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'}`}>
        <p className="text-red-500 text-[11px] md:text-sm font-helvetica pl-[clamp(15px,2vw,23px)]">
          {error}
        </p>
      </div>
    </div>
  );
}

export default CheckoutModal;