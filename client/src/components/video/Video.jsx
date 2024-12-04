import React from 'react';
import './video.css';

const Video = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <video controls className="w-full h-full object-cover">
            <source src="/video-presentation.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="text-gray-700">
            Sakura MedTech aims to change this status quo by improving the patient experience and increasing efficiency in gynecological procedures through innovative solutions in clinics and hospitals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;