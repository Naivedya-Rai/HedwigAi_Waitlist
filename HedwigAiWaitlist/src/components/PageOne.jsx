import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';

function Page1() {
  return (
    <div className="h-screen flex flex-col">
      <div className="max-w-[1440px] mx-auto px-8 flex-grow">
        <Header />
        <HeroSection />
        <FeatureCards />
      </div>
    </div>
  );
}

export default Page1;