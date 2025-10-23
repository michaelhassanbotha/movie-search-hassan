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
    </div>
  );
}
