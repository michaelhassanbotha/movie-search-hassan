import { Link } from "react-router-dom";
import "./App.css";

export default function Home() {
  const homeimage = "/home.jpeg";

  return (
    <div>
      {/* Header moved to App for global navigation */}

      <main>
        <div className="main">
          <div className="btn">
            <h1>Hassan Tv, The Best tv Services</h1>

            <Link to="/movies">watch more</Link>
          </div>

          <div>
            <img src={homeimage} alt="" />
          </div>
        </div>

        <div className="desc">
          <p>Hassan tv love it and it brings happiness.</p>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
