import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import './SearchResultsPage.css';
import { fetchSearchResultsAsync, clearError } from '../store/moviesSlice';

const SearchResultsPage = () => {
  const { query } = useParams(); 
  const dispatch = useDispatch();
  const { searchResults, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if(query){
      dispatch(fetchSearchResultsAsync(query))
    }

    return () => {
      dispatch(clearError()); 
    };
  }, [dispatch, query]);

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div className="error-container">
      <h2>Error: {error}</h2>
      <button className='goback' onClick={() => window.location.replace('/')}>Go Back to Home</button>
    </div>
  );
  if (!searchResults || searchResults.length === 0) return <div>No Results Found</div>;

  return (
    <div className="search-results-page">
      <h2>  Results for: "{query}"</h2>
    
      <div className="movie-grid">
        {searchResults.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
