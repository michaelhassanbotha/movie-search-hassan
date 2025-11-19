
export default function MovieCard({ movie }) {
  const imgSrc = movie.poster_path || movie.backdrop_path || "https://picsum.photos/500/750";

  return (
    <div
      style={{
        width: "250px",
        background: "#eee",
        borderRadius: "12px",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <img
        src={imgSrc}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "10px", objectFit: "cover", height: "375px" }}
      />

      <h3>{movie.title}</h3>
      <p>Year: {movie.release_date.slice(0, 4)}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>{movie.overview.slice(0, 80)}...</p>
    </div>
  );
}
