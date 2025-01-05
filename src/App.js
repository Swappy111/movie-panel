import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route />
          <Route path="/" element={<HomePage/>} />
          <Route path="/top-rated" element={<TopRatedPage/>} />
          <Route path="/upcoming" element={<UpcomingMoviesPage/>} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage/>} />
          <Route path="/search/:query" element={<SearchResultsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
