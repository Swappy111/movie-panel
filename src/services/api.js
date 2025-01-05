import axios from 'axios';

// const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
// const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f93c5613';
const BASE_URL = 'http://www.omdbapi.com';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


export const fetchPopularMovies = (page = 1) =>
//   axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
      axios.get(`${BASE_URL}/?apikey=${API_KEY}&s=popular&type=movie&page=${page}`);

export const fetchTopRatedMovies = (page = 1) =>
  // axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
      axios.get(`${BASE_URL}/?apikey=${API_KEY}&s=top&type=movie&page=${page}`);


export const fetchUpcomingMovies = (page = 1) =>
  // axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
      axios.get(`${BASE_URL}/?apikey=${API_KEY}&s=upcoming&type=movie&page=${page}`);

export const fetchMovieDetails = (movieId) =>
//   axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
      axios.get(`${BASE_URL}/?apikey=${API_KEY}&i=${movieId}&plot=full`);

export const fetchMovieCast = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);

export const searchMovies = (query, page = 1) =>
//   axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
      axios.get(`${BASE_URL}/?apikey=${API_KEY}&s=${query}&type=movie`);
    
export const IMAGE_PATH = IMAGE_BASE_URL;
