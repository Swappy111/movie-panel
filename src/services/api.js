import axios from 'axios';

// const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
// const BASE_URL = 'https://api.themoviedb.org/3';

// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
let apikey = process.env.REACT_APP_API_KEY;
let baseUrl = process.env.REACT_APP_BASE_URL;
console.log(apikey, baseUrl)
export const fetchPopularMovies = (page = 1) =>
//   axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
      axios.get(`${baseUrl}/?apikey=${apikey}&s=popular&type=movie&page=${page}`);

export const fetchTopRatedMovies = (page = 1) =>
  // axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
      axios.get(`${baseUrl}/?apikey=${apikey}&s=top&type=movie&page=${page}`);


export const fetchUpcomingMovies = (page = 1) =>
  // axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
      axios.get(`${baseUrl}/?apikey=${apikey}&s=upcoming&type=movie&page=${page}`);

export const fetchMovieDetails = (movieId) =>
//   axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
      axios.get(`${baseUrl}/?apikey=${apikey}&i=${movieId}&plot=full`);

export const fetchMovieCast = (movieId) =>
  axios.get(`${baseUrl}/movie/${movieId}/credits?api_key=${apikey}&language=en-US`);

export const searchMovies = (query, page = 1) =>
//   axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
      axios.get(`${baseUrl}/?apikey=${apikey}&s=${query}&type=movie`);
    
// export const IMAGE_PATH = IMAGE_BASE_URL;
