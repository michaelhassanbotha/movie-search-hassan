import { moviesData } from "./data/moviesData";
import MovieCard from "./components/MovieCard";

export default function MoviesPage() {
  return (
    <div style={{
      width: "1000px",
      margin: "40px auto",
      display: "flex",
      gap: "20px",
      flexWrap: "wrap"
    }}>
      {moviesData.results.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
