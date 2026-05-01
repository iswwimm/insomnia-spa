import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseIntro from './components/CourseIntro';
import TargetAudience from './components/TargetAudience';
import CourseOutcomes from './components/CourseOutcomes';
import CourseProgram from './components/CourseProgram';
import LearningProcess from './components/LearningProcess';
import Tariffs from './components/Tariffs';
import Reviews from './components/Reviews';
import AboutMe from './components/AboutMe';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-white flex justify-center font-helvetica text-insomnia-dark relative">
      
      <div className="w-full max-w-[1440px] relative bg-white overflow-hidden">
        
        <Header />   
        <Hero /> 
        <CourseIntro />
        <TargetAudience />
        <CourseOutcomes />
        <CourseProgram />
        <LearningProcess />
        <Tariffs /> 
        <Reviews />
        <AboutMe />
        <FAQ />
        <CallToAction onOpenModal={openModal} />
        
        <Footer />  
        
      </div>

      {isModalOpen && (
        <CheckoutModal onClose={closeModal} />
      )}

    </div>
  );
}

export default App;