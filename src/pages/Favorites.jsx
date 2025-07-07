import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../Components/MovieCard";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites">
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No favorite movies yet</h2>
          <p>Start adding movies to your favorites and they will appear here</p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
