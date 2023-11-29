// Article.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
      .then(response => response.json())
      .then(data => {
        setArticle(data);
      })
      .catch(error => {
        console.error('Xatolik: ', error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <p>{article.publishedAt}</p>
    </div>
  );
}

export default Article;
