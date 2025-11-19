
export default function MovieCard({ movie }) {
  return (
    <div style={{
      width: "250px",
      background: "#eee",
      borderRadius: "12px",
      padding: "15px",
      marginBottom: "20px"
    }}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>{movie.title}</h3>
      <p>Year: {movie.release_date.slice(0, 4)}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>{movie.overview.slice(0, 80)}...</p>
    </div>
  );
}
