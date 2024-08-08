import React from 'react';
import owl from '../assets/owl.png';

function HeroSection() {
  return (
    <section className="flex justify-between items-center py-16">
      <div className="max-w-[717px]">
        <h2 
          className="text-[#FFFFFF] font-bold mb-14" 
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '60px', 
            lineHeight: '62px', 
            letterSpacing: '-3%',
            color: '#FFFFFF',
          }}
        >
          The Fastest Designer For Your Brand
        </h2>
        <p 
          className="italic mb-14" 
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '27px', 
            lineHeight: '32px', 
            letterSpacing: '-1px',
            width: '736px',
            height: '70px',
            color: '#FFFFFF'
          }}
        >
          Upload. Prompt. Edit.<br />
          Don’t Let Time Steal Your Brand’s Edge.
        </p>
        <button 
          className="bg-[#393939] text-white px-8 py-3 rounded-full text-lg font-semibold"
          style={{ width: 'auto', height: 'auto' }} 
        >
          Book Demo
        </button>
      </div>
      <img src={owl} alt="HedwigAI Owl" className="w-64" />
    </section>
  );
}

export default HeroSection;
