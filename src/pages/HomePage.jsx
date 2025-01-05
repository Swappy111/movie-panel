import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMoviesAsync } from '../store/moviesSlice';
import MovieCard from '../components/MovieCard'; 
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { popular, loading, error, currentPage } = useSelector((state) => state.movies);

  const handleNextPage = () => {
    dispatch({ type: 'movies/setCurrentPage', payload: currentPage + 1 });
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch({ type: 'movies/setCurrentPage', payload: currentPage - 1 });
    }
  };

  
  useEffect(() => {
    dispatch(fetchPopularMoviesAsync(currentPage));
  }, [dispatch, currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(popular)

  return (
    <div className="home-page">
      <div className="movie-grid">
        {popular.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default HomePage;
