import '../App.css';
import React, { useState, useEffect } from 'react';
import Article from './ArticleFav';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('favPosts') !== null && localStorage.getItem('favPosts') !== "") {

      let favID = localStorage.getItem('favPosts').split(',');

      const promises = favID.map(i => {
        return fetch('https://www.reddit.com/' + i + '.json');
      });

      Promise.all(promises).then(data => {
        const promisesValues = data.map(v => v.json());
        Promise.all(promisesValues).then(items => {const storedData = items.map(item => item[0]?.data?.children[0]);
          setArticles(storedData);
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