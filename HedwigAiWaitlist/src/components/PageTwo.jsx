import React from 'react';
import VideoSection from './VideoSection';
import Footer from './Footer';

function Page2() {
  return (
    <div className="h-screen flex flex-col">
      <div className="container flex-grow">
        <VideoSection />
      </div>
      <Footer />
    </div>
  );
}

export default Page2;
