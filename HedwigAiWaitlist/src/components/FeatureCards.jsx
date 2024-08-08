import React from 'react';
import '../index.css'; 

// Helper function to format text with bold quoted parts
const formatText = (text) => {
  const parts = text.split(/(".*?")/); // Split text at quotes
  return parts.map((part, index) =>
    index % 2 === 0 ? part : <b key={index}>{part}</b> // Bold quoted parts
  );
};

function FeatureCard({ title, description }) {
  return (
    <div className="feature-box">
      <h3 
        className="text-left mb-4" 
        style={{
          fontFamily: 'Montserrat',
          fontSize: '24px',
          fontWeight: 900,
          lineHeight: '32px',
          textAlign: 'left',
        }}
      >
        {title}
      </h3>
      <p 
        className="text-left"
        style={{
          fontFamily: 'Montserrat',
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '32px',
          textAlign: 'left',
        }}
      >
        {formatText(description)}
      </p>
    </div>
  );
}

function FeatureCards() {
  const features = [
    { title: "Speed", description: 'Unlimited Instant, Quick Edits to "Beat Your Deadlines"' },
    { title: "Quality", description: 'Premium Creatives That Are "Always On Brand"' },
    { title: "Cost", description: 'Spend Less On Great Designs To "Stay On Budget"' },
  ];

  return (
    <div 
      className="flex gap-6 flex-wrap"
      style={{
        marginTop: '20px', 
        marginBottom: '40px' 
      }}
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index} 
          {...feature} 
          style={{ 
            width: '400px', 
            height: '200px', 
            borderRadius: '16px',
            marginBottom: '24px' 
          }} 
        />
      ))}
    </div>
  );
}


export default FeatureCards;
