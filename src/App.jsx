const homeimage = "/home.jpeg";
import "./App.css";
export default function Home() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="headerList">
            <a href="#">home</a>
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
      <main>
        <div className="main">
          <div className="btn">
            <h1>Hassan Tv, The Best tv Services</h1>
            <a href="">watch more</a>
          </div>
          <div>
            <img src={homeimage} alt="" />
          </div>
        </div>

        <div className="desc">
            <p>Hassan tv love it and it brings happiness.</p>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}
