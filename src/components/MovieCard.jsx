// src/components/MovieCard.jsx
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg';

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={posterUrl} alt={movie.title}  />
        {(movie.vote_average) ?
          <span className="movie-rating">{parseFloat(movie.vote_average).toFixed(1)}</span> :''
        
        }
      </Link>
      {/* <p>{movie.title}</p> */}
    </div>
  );
};

export default MovieCard;