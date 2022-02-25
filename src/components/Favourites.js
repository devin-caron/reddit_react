import '../App.css';
import React, { useState, useEffect } from 'react';
import Article from './ArticleFav';

function App() {
  const [articles, setArticles] = useState([]);
  let favData;
  // show favourites
  // console.log(favID[0]);
  // console.log(favReddit[0]);

  useEffect(() => {
    setArticles();
    if (localStorage.getItem('favPosts') !== null) {
      let favID = localStorage.getItem('favPosts').split(',');
      for (var i = 0; i < favID.length; i++) {
        fetch("https://www.reddit.com/" + favID[i] + ".json").then(res => {
          if (res.status !== 200) {
            console.log("ERROR");
            return;
          }

          res.json().then(data => {
            if (data !== null) {
              setArticles(data[0].data.children);
              // console.log(data[0].data.children[0].data.subreddit);
            }
          });
        })
      }
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