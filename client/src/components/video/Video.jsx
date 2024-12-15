import React from 'react';
import './video.css';

const Video = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-left">
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/Z-cAyCqVxDM?autoplay=1&mute=1&loop=1&playlist=dlJ3__dUpss&controls=1&start=0"
              title="Sakura MedTech Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-right">
          <h2>Our Mission</h2>
          <p>Sakura MedTech aims to change this status quo by improving the patient experience and increasing efficiency in gynecological examinations. We are developing innovative solutions in clinics and hospitals.</p>
        </div>
      </div>
    </section>
  );
};

export default Video;