import './App.css';
import { BrowserRouter as Router, Route , Routes, Link} from "react-router-dom";


import Home from "./components/MainPage"
import Favourites from "./components/Favourites"



function App() {
  return (
    <div className="App">
      <Router>
      <nav>
            <h3 className='logo'>React Reddit</h3>
            <ul className="nav-links">
                <Link to="/reddit_react/">
                    <li>Search</li>
                </Link>
                <Link to="/reddit_react/favourites">
                    <li>Favourites</li>
                </Link>
            </ul>
        </nav>
        <Routes>
          <Route exact path="/reddit_react/" element={<Home/>} />
          <Route exact path="/reddit_react/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
