// components/articles/articles.jsx
import React, { useState } from 'react';
import './articles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import articleImage1 from '../../assets/images/IMG-20240926-WA0004.jpg'
import articleImage2 from '../../assets/images/IMG-20240323-WA0010.jpg'
import articleImage3 from '../../assets/images/IMG-20240412-WA0038.jpg'
import articleImage4 from '../../assets/images/IMG_4231.JPG'
import articleImage5 from '../../assets/images/Sakura networking.JPG'
import articleImage6 from '../../assets/images/_DSC4250.JPG'
import articleImage7 from '../../assets/images/IMG-20240412-WA0038.jpg'
import articleImage8 from '../../assets/images/IMG-20240412-WA0038.jpg'

const Articles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const articles = [
    {
      id: 1,
      title: "iVenture welcomes 40 student entrepreneurs for ninth cohort",
      content: "Sakura MedTech offers a superior, patient-centric imaging device for cervical cancer screening to reduce patient discomfort and improve medical efficiency for gynecologists.",
      image: articleImage1
    },
    {
      id: 2,
      title: "2024 Baylor New Venture Competition Top 10 Teams",
      content: "Sakura MedTedch, Inc from the Univeristy of Illinois at Urbana-Champaign becomes a part of the top 10 teams",
      image: articleImage2
    },
    {
      id: 3,
      title: " Twelve Student Startups Competing for $100,000 at Heartland Challenge",
      content: "Designed to simulate the process of raising venture capital for a high-growth enterprise, the Heartland Challenge is a global, graduate student startup competition with a prize pool of more than $100,000.",
      image: articleImage3
    },
    {
      id: 4,
      title: " Revolutionizing Cervical Cancer Screening with Minimally Invasive Device",
      content: "Sakura Medtech Empowers Women’s Health: Harnessing Cutting-Edge Medical Imaging Technology and Fostering Destigmatization of Women’s Healthcare for Greater Accessibility to Diagnostic Solutions",
      image: articleImage4
    },
    {
      id: 5,
      title: " Twelve Student Startups Competing for $100,000 at Heartland Challenge",
      content: "7 Teams Set To Compete For Record Funding In The Cozad New Venture Challenge 2023",
      image: articleImage5
    },
    {
      id: 6,
      title: " Twelve Student Startups Competing for $100,000 at Heartland Challenge",
      content: "UIUC Student Startups Win Big at College New Venture Challenge!",
      image: articleImage6
    },
    {
      id: 7,
      title: " Twelve Student Startups Competing for $100,000 at Heartland Challenge",
      content: "The Polsky Center for Entrepreneurship and Innovation and The University of Illinois’ Grainger College of Engineering are pleased to announce the seven finalists selected to compete in the...",
      image: articleImage7
    },
    {
      id: 8,
      title: " Twelve Student Startups Competing for $100,000 at Heartland Challenge",
      content: "Designed to simulate the process of raising venture capital for a high-growth enterprise, the Heartland Challenge is a global, graduate student startup competition with a prize pool of more than $100,000.",
      image: articleImage8
    }

  ];

  const nextArticle = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevArticle = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <section className="articles-section">
      <div className='articles-overflow-hide'></div>
      <div className="articles-container">
        <div className="articles-left">
          <h2>Featured Articles</h2>
          <div className="article-nav">
            <button onClick={prevArticle}><FaChevronLeft /></button>
            <button onClick={nextArticle}><FaChevronRight /></button>
          </div>
        </div>
        <div className="articles-right">
          <div className="articles-slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {articles.map((article, index) => (
              <div 
                key={article.id} 
                className={`article-card ${index === activeIndex ? 'active' : ''}`}
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