import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then(response => response.json())
      .then(data => {
        setArticles(data);
      })
      .catch(error => {
        console.error('Xatolik: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Maqolalar</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesList;
