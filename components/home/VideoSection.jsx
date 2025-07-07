'use client';

import { CiPlay1 } from 'react-icons/ci';
import { CiPause1 } from 'react-icons/ci';
import React, { useRef, useState } from 'react';

const VideoSection = ({
  videoUrl = 'https://cdn.pixabay.com/video/2020/04/24/37088-413229662_large.mp4',
  title = 'Explore the World with Us',
  subtitle = 'Uncover breathtaking journeys and plan your dream escape today',
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="py-12">
      <div className="relative h-[500px] bg-cover bg-center flex items-center justify-center">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
          <div
            className="flex items-center justify-center bg-white/20 backdrop-blur-sm border w-24 h-24 rounded-full mb-6 cursor-pointer transition-transform duration-300 hover:scale-110 "
            onClick={handleTogglePlay}
          >
            {isPlaying ? <CiPause1 size={50} /> : <CiPlay1 size={50} />}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
          <p className="text-xl text-gray-200 max-w-md mx-auto">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
