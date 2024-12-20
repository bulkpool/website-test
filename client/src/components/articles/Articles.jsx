// components/articles/articles.jsx
import React, { useState, useEffect, useCallback } from 'react';
import './articles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import articleImage1 from '../../assets/images/IMG-20240926-WA0004.jpg'
import articleImage2 from '../../assets/images/IMG-20240323-WA0010.jpg'
import articleImage3 from '../../assets/images/IMG-20240412-WA0038.jpg'
import articleImage4 from '../../assets/images/IMG_4231.JPG'
import articleImage5 from '../../assets/images/Sakura Med Tech with check - 1.jpg'
import articleImage6 from '../../assets/images/_DSC4250.JPG'
import articleImage7 from '../../assets/images/_DSC0181.JPG'
import articleImage8 from '../../assets/images/IMG-20240210-WA0006.jpg'

const Articles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const articles = [
    {
      id: 1,
      title: "iVenture welcomes 40 student entrepreneurs for ninth cohort",
      content: "Sakura MedTech offers a superior, patient-centric imaging device for cervical cancer screening to reduce patient discomfort and improve medical efficiency for gynecologists.",
      image: articleImage1,
      url: "https://giesbusiness.illinois.edu/news/2023/06/22/iventure-welcomes-40-student-entrepreneurs-for-ninth-cohort",
    },
    {
      id: 2,
      title: "2024 Baylor New Venture Competition Top 10 Teams",
      content: "Sakura MedTech, Inc from the Univeristy of Illinois at Urbana-Champaign is selected as a finalist for Baylor University's global startup competition.",
      image: articleImage2,
      url: "https://sites.baylor.edu/newventurecompetition/page/2/",
    },
    {
      id: 3,
      title: "Twelve Student Startups Competing for $100,000 at Heartland Challenge",
      content: "Designed to simulate the process of raising venture capital for a high-growth enterprise, the Heartland Challenge is a global, graduate student startup competition with a prize pool of more than $100,000.",
      image: articleImage3,
      url: "https://news.uark.edu/articles/69847/twelve-student-startups-competing-for-100-000-at-heartland-challenge",
    },
    {
      id: 4,
      title: "Revolutionizing Cervical Cancer Screening with Minimally Invasive Device",
      content: "Sakura Medtech Empowers Women’s Health: Harnessing Cutting-Edge Medical Imaging Technology and Fostering Destigmatization of Women’s Healthcare for Greater Accessibility to Diagnostic Solutions",
      image: articleImage4,
      url: "https://bioengineering.illinois.edu/news/Sakura-Medtech",
    },
    {
      id: 5,
      title: "7 Teams Set To Compete For Record Funding In The Cozad New Venture Challenge 2023",
      content: "This year, the campus-wide competition kicked off in early February with over 100 competing teams representing 10 colleges.",
      image: articleImage5,
      url: "https://tec.illinois.edu/news/55036",
    },
    {
      id: 6,
      title: "UIUC Student Startups Win Big at College New Venture Challenge!",
      content: "The College New Venture Challenge (CNVC) is the dedicated track of the University of Chicago's Polsky Center’s nationally-ranked New Venture Challenge program",
      image: articleImage6,
      url: "https://tec.illinois.edu/news/53808",
    },
    {
      id: 7,
      title: " 7 Startups Vie for Investment at the 2023 College New Venture Challenge - Polsky Center for Entrepreneurship and Innovation",
      content: "The Polsky Center for Entrepreneurship and Innovation and The University of Illinois’ Grainger College of Engineering are pleased to announce the seven finalists selected to compete in the College New […]",
      image: articleImage7,
      url: "https://polsky.uchicago.edu/2023/02/23/7-startups-vie-for-investment-at-the-2023-college-new-venture-challenge/",
    },
    {
      id: 8,
      title: "27 ventures announced as 2024 ASUio finalists",
      content: "Twenty-seven student-led ventures have emerged as finalists for the 2024 ASU Innovation Open. ASUio is a unique opportunity for top collegiate entrepreneurs to take their ventures to the next level.",
      image: articleImage8,
      url: "https://asu.io/2023/12/student-ventures-announced-as-2024-asuio-semifinalists/",
    },

  ];

  const nextArticle = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % articles.length);
  }, [articles.length]);

  const prevArticle = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  }, [articles.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextArticle();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextArticle, activeIndex]); // Reset interval when activeIndex changes

  const handleManualClick = (direction) => {
    if (direction === 'next') {
      nextArticle();
    } else {
      prevArticle();
    }
  };


  return (
    <section className="articles-section">
      <div className='articles-overflow-hide'></div>
      <div className="articles-container">
        <div className="articles-left">
          <h2>Featured Articles</h2>
          <div className="article-nav">
          <button onClick={() => handleManualClick('prev')}><FaChevronLeft /></button>
          <button onClick={() => handleManualClick('next')}><FaChevronRight /></button>
          </div>
        </div>
        <div className="articles-right">
          <div className="articles-slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {articles.map((article, index) => (
              <div 
              key={article.id}
              className={`article-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => window.open(article.url, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;