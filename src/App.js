import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  async function fetchMoviesHandler() {
    //fetch du lieu
    const res = await fetch("https://swapi.dev/api/films/");
    // chuyen du lieu ve json
    const data = await res.json();
    // chuyen data can dung
    const convertData = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        tittle: movie.tittle,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setMovies(convertData);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
