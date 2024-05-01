import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
const API_KEY = "3af54481";
const API_URL = "https://www.omdbapi.com?apikey=" + API_KEY;
const movie1 = {
  Title: "Destiny Undefined",
  Year: "2009",
  imdbID: "tt9343638",
  Type: "movie",
  Poster: "N/A",
};
export default function App(params) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("superman");
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("superman")
  }, []);
  return (
    <div className="app">
      <h1>Movie land</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={() => {
            searchMovies(search);
          }}
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg>
      </div>
      <div className="container">
        {movies.map((movie, i) => (
          <MovieCard movie1={movie} key={i} />
        ))}
      </div>
    </div>
  );
}
