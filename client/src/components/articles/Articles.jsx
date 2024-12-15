// components/articles/articles.jsx
import React, { useState } from 'react';
import './articles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import articleImage1 from '../../assets/images/IMG-20240926-WA0004.jpg'
import articleImage2 from '../../assets/images/IMG-20240323-WA0010.jpg'
import articleImage3 from '../../assets/images/IMG-20240412-WA0038.jpg'

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
      <div className="articles-overflow-hide"></div>
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
              <div key={article.id} className="article-card">
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