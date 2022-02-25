import '../App.css';
import React, { useState, useEffect } from 'react';
import Article from './ArticleFav';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favPosts') !== null) {

      let favID = localStorage.getItem('favPosts').split(',');

      const promises = favID.map(f => {
        return fetch('https://www.reddit.com/' + f + '.json');
      });

      Promise.all(promises).then(values => {
        const promisesValues = values.map(v => v.json());
        Promise.all(promisesValues).then(items => {
          const mapped = items.map(item => item[0]?.data?.children[0]);
          setArticles(mapped);
        });
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>/favourites</h3>
      </header>
      <div className="articles">
        {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        }
      </div>
    </div>
  );
}

export default App;