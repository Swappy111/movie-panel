import React, { useEffect, useState } from 'react';
import { IMAGE_PATH } from '../services/api';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const placeholderImage = 'https://i.pinimg.com/736x/ff/30/4f/ff304f9ba5f1a80cc4a6ac4b537e2ede.jpg';

  const [imdbRating, setImdbRating] = useState('N/A');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=f93c5613&i=${movie.imdbID}`);
        const data = await response.json();
        if (data && data.imdbRating) {
          setImdbRating(data.imdbRating);
        }
      } catch (error) {
        console.error('Error fetching IMDb Rating:', error);
      }
    };

    fetchMovieDetails();
  }, [movie.imdbID]);
  return (<>

    <Link style={{textDecoration:'none'}} to={`/movie/${movie.imdbID}`}>  
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : placeholderImage}
        alt={movie.Title}
        className="movie-poster" 
      />
      <h3 className="movie-title">{movie.Title}</h3>
      <p className="movie-rating">⭐Rating : {imdbRating}</p>
    </div>
    </Link>
    </>
  );
};

export default MovieCard;
