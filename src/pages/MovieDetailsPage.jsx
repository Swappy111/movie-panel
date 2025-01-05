import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsAsync } from '../store/moviesSlice';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetailsAsync(movieId));
  }, [dispatch, movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!movieDetails) return <div>No details available</div>;

  return (
    <div className="movie-details-page"  >
      <div className='movie-inbox'>


      <div className="movie-header">


        <div className='img-main'>
            <img  className="img-movie-details" src={movieDetails.Poster} alt={movieDetails.Title} />
        </div>


        <div className="movie-info">
          <h2>{movieDetails.Title}</h2>
          <p className='rating'>IMDb Rating : ⭐ {movieDetails.imdbRating}</p>
          <p > <span className='runtime'> {movieDetails.Runtime} </span> &nbsp;  <strong>Genre :</strong> {movieDetails.Genre}</p>
          <p> <strong>Release Date :</strong> {movieDetails.Released} </p>
          <p><strong>Actors :</strong> {movieDetails.Actors}</p>
          <p><strong>Director  :</strong> {movieDetails.Director}</p>
        </div>
      </div>


      <div className='overview'>
      <p><strong>Overview </strong> </p>
          <p>{movieDetails.Plot}</p>

      </div>
      </div>

    </div>
  );
};

export default MovieDetailsPage;
