import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMoviesAsync } from '../store/moviesSlice';
import MovieCard from '../components/MovieCard';
import './UpcomingMoviesPage.css';

const UpcomingMoviesPage = () => {
  const dispatch = useDispatch();
  const { upcoming, loading, error, currentPage } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchUpcomingMoviesAsync(currentPage));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    dispatch({ type: 'movies/setCurrentPage', payload: currentPage + 1 });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch({ type: 'movies/setCurrentPage', payload: currentPage - 1 });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="upcoming-movies-page">
      <div className="movie-grid">
        {upcoming.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === 1}>Next</button>
      </div>
    </div>
  );
};

export default UpcomingMoviesPage;
