import React from 'react';
import Hero from '../components/hero/Hero';
import StatsCard from '../components/stats/statsCard';
import Video from '../components/video/Video';
import Articles from '../components/articles/articles';
import Partners from '../components/partners/partners';

const Home = () => {
  return (
    <main>
      <Hero />
      <StatsCard />
      <Video />
      <Articles />
      <Partners />
    </main>
  );
};

export default Home;