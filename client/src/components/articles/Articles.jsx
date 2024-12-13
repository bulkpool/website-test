import React from 'react';
import './articles.css';

// In articles/articles.jsx
const featuredArticles = [
  {
    id: 1,
    image: "/src/assets/images/article1.jpg",
    title: "Latest News About AI Care",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. It is important to implement it in corporate and your plan."
  },
  {
    id: 2,
    image: "/src/assets/images/article2.jpg",
    title: "Healthcare Innovation",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  },
  {
    id: 3,
    image: "/src/assets/images/article3.jpg",
    title: "Medical Technology",
    content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

// components/articles/articles.jsx
const Articles = () => {
  const articles = [
    {
      id: 1,
      image: '/src/assets/images/article1.jpg',
      title: 'Latest News About AI Care',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      image: '/src/assets/images/article2.jpg',
      title: 'Healthcare Innovation',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 3,
      image: '/src/assets/images/article3.jpg',
      title: 'Medical Technology',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.content}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-3 h-3 rounded-full bg-[#FF1654]"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
          <button className="w-3 h-3 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </section>
  );
};

export default Articles;