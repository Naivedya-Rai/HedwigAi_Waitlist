import React, { useState } from 'react';
import videoThumbnail from '../assets/videoThumbnail.png';

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative h-screen flex items-center py-16 bg-black">
      {/* First Text Block */}
      <div className="absolute" style={{
        width: '767px',
        height: '270px',
        top: '235px',
        left: '112px',
        background: '#000000', 
        color: '#FFFFFF', 
        opacity: 1
      }}>
        <h2 style={{
          fontFamily: 'Montserrat',
          fontSize: '45px',
          fontWeight: 700,
          lineHeight: '49.5px',
          letterSpacing: '-0.03em',
          textAlign: 'left',
          margin: 0
        }}>
          <span style={{
            textDecoration: 'line-through'
          }}>Not</span> Enough Creatives<br />
          <span style={{
            textDecoration: 'line-through'
          }}>Never</span> On Time
        </h2>
      </div>

      {/* Second Text Block */}
      <div className="absolute" style={{
        width: '465px',
        height: '70px',
        top: '417px',
        left: '112px',
        background: '#000000', 
        color: '#FFFFFF', 
        opacity: 1
      }}>
        <p style={{
          fontFamily: 'Montserrat',
          fontSize: '27px',
          fontWeight: 700,
          lineHeight: '35.1px',
          letterSpacing: '-1px',
          textAlign: 'left',
          margin: 0
        }}>
          Instant Edits Always On Time,<br />Always On Brand “Guaranteed”
        </p>
      </div>

      {/* Join Waitlist Button */}
      <div className="absolute" style={{
        width: '208px',
        height: '42px',
        top: '610px',
        left: '171px',
        padding: '8px 20px',
        borderRadius: '50px',
        background: '#393939', 
        opacity: 1
      }}>
        <button className="w-full h-full bg-[#393939] text-white rounded-full flex items-center justify-center" style={{
          fontFamily: 'Montserrat',
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '36px',
          textAlign: 'center'
        }}>
          Join Waitlist
        </button>
      </div>

      {/* Video or Thumbnail */}
      <div className="absolute" style={{
        width: '654px',
        height: '433px',
        top: '235px',
        left: '672px'
      }}>
        {isPlaying ? (
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            autoPlay
          >
            <source src="path-to-your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={videoThumbnail}
            alt="Video Thumbnail"
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            onClick={handlePlayVideo}
          />
        )}
      </div>
    </section>
  );
}

export default VideoSection;
