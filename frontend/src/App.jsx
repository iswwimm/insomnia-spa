import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseIntro from './components/CourseIntro';
import TargetAudience from './components/TargetAudience';
import CourseOutcomes from './components/CourseOutcomes';
import CourseProgram from './components/CourseProgram';
import LearningProcess from './components/LearningProcess';
import Tariffs from './components/Tariffs';

function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center font-helvetica text-insomnia-dark">
      
      <div className="w-full max-w-[1440px] relative bg-white overflow-hidden">
        
        <Header />
        <Hero />
        <CourseIntro />
        <TargetAudience />
        <CourseOutcomes />
        <CourseProgram />
        <LearningProcess />
        <Tariffs />
        
      </div>

    </div>
  );
}

export default App;