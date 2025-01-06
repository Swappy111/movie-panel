import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchMovieDetails, searchMovies } from "../services/api";
// import { popularMoviesMock } from '../services/mockData';

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popular: [],
    topRated: [],
    upcoming: [],
    movieDetails: null,
    searchResults: [],
    loading: false,
    error: null,
    currentPage: 1,
  },

  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setPopularMovies: (state, action) => {
      state.popular = action.payload;
      state.loading = false;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
      state.loading = false;
    },
    setUpcomingMovies: (state, action) => {
      state.upcoming = action.payload;
      state.loading = false;
    },
    setMovieDetails: (state, action) => { 
      state.movieDetails = action.payload; 
      state.loading = false; 
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload; 
      state.loading = false; 
      state.error = null;
    },
    clearError: (state) => {
      state.error = null; // ✅ Clear error state
    },
  },
});

export const {
  setLoading,
  setError,
  setPopularMovies,
  setCurrentPage,
  setTopRatedMovies,
  setUpcomingMovies,
  setMovieDetails,
  setSearchResults,
  clearError
} = moviesSlice.actions;

export const fetchPopularMoviesAsync = (page = 1) => async (dispatch) => {
    dispatch(setLoading());
    //   try {
    //     const response = await fetchPopularMovies();
    //     console.log('API Response:', response.data);
    //     dispatch(setPopularMovies(response.data.results));
    //   } catch (error) {
    //     dispatch(setError(error.message));
    //   }

    try {
      const response = await fetchPopularMovies(page);
      // console.log("OMDb API Response:", response.data.Search); 
      if (response) {
        dispatch(setPopularMovies(response.data.Search)); 
      } else {
        throw new Error("No movies found");
      }
    } catch (error) {
      console.error("Error fetching popular movies:", error.message);
      dispatch(setError(error.message));
    }

    // try {
    //     const response = popularMoviesMock;
    //     dispatch(setPopularMovies(response));
    //   } catch (error) {
    //     dispatch(setError("Failed to fetch mock data"));
    //   }
  };

export const fetchTopRatedMoviesAsync = (page = 1) =>  async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetchTopRatedMovies(page);
      if (response.data && response.data.Search) {
        dispatch(setTopRatedMovies(response.data.Search));
      } else {
        throw new Error("No movies found");
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };



  export const fetchUpcomingMoviesAsync = (page = 1) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetchUpcomingMovies(page);
      if (response.data && response.data.Search) {
        dispatch(setUpcomingMovies(response.data.Search));
      } else {
        throw new Error('No movies found');
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };  



  export const fetchMovieDetailsAsync = (movieID) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetchMovieDetails(movieID);
      if (response.data) {
        dispatch(setMovieDetails(response.data));
      } else {
        throw new Error('Movie details not found');
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };




  export const fetchSearchResultsAsync = (query, page = 1) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await searchMovies(query, page); 
      // console.log("Search API Response:", response.data);
      if (response.data && response.data.Search) {
        dispatch(setSearchResults(response.data.Search)); 
      } else {
        throw new Error('No results found for the query..!');
      }
    } catch (error) {
      console.error('Error fetching search results:', error.message);
      dispatch(setError(error.message));
    }
  };
export default moviesSlice.reducer;
