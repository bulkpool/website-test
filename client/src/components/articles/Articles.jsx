import React from 'react';
import './articles.css';

const Articles = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <img 
              src="/article-image.jpg" 
              alt="Article" 
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-700">Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;