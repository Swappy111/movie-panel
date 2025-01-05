import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import './SearchResultsPage.css';
import { fetchSearchResultsAsync } from '../store/moviesSlice';

const SearchResultsPage = () => {
  const { query } = useParams(); // Get the query from URL
  const dispatch = useDispatch();
  const { searchResults, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if(query){
      dispatch(fetchSearchResultsAsync(query))
    }
  }, [dispatch, query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
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
