import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import MoviesPage from "./MoviesPage.jsx";
import "./App.css";

export default function App() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="headerList">
            <Link to="/">home</Link>
            <a href="#">about</a>
          </div>

          <div className="downloads">
            <a href="#">Downloads</a>
          </div>

          <div className="log">
            <a href="#">Login</a>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>

      <footer></footer>
    </div>
  );
}
