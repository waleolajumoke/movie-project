// src/pages/Detail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../utils/api';
import SimilarMovies from '../components/SimilarMovies';
import React, { useState, useEffect } from 'react';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setError('Failed to load movie details.');
      } finally {
        setLoading(false);
      }
    };
    loadMovie();
  }, [id]);

  if (loading) return <p className="loading">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9999 2.04938L11 4.06188C7.05371 4.55396 4 7.92036 4 12C4 16.4183 7.58172 20 12 20C13.8487 20 15.5509 19.3729 16.9055 18.3199L18.3289 19.7428C16.605 21.1536 14.4014 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81468 5.94662 2.55115 10.9999 2.04938ZM21.9506 13.0001C21.7509 15.0111 20.9555 16.8468 19.7433 18.3283L18.3199 16.9055C19.1801 15.799 19.756 14.4606 19.9381 12.9999L21.9506 13.0001ZM13.0011 2.04948C17.725 2.51902 21.4815 6.27589 21.9506 10.9999L19.9381 11C19.4869 7.38162 16.6192 4.51364 13.001 4.062L13.0011 2.04948Z"></path></svg>
  </p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const trailerKey = movie.videos?.results.find(
    (video) => video.type === 'Trailer'
  )?.key;

  return (
    <div className="container">
      <button
        onClick={() => navigate(-1)}
        className="back-button"
      >
        Back
      </button>
      <div className="movie-detail">
        <div className="movie-poster-container">
        <img
          src={ movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}`:'https://www.movienewz.com/wp-content/uploads/2014/07/poster-holder.jpg'}
          alt={movie.title}
          className="movie-poster"
        />
         {(movie.vote_average) ?
          <span className="movie-rating">{parseFloat(movie.vote_average).toFixed(1)}</span> :''
        
        }
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <div className="movie-rating-tags">
           
            <div className="movie-tags">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="tag">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <p className="movie-overview">{movie.overview}</p>
          {trailerKey && (
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Trailer"
              className="movie-trailer"
            ></iframe>
          )}
        </div>
      </div>
      <SimilarMovies movieId={id} />
    </div>
  );
};

export default Detail;