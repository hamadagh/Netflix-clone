import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  if (movies) {
    return (
      <div className="row">
        <h2 className="movie-title">{title}</h2>
        <div className="movies-list">
          {movies.map((movie) => (
            <img
              className="movie-img"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <h2>{title}</h2>
      </div>
    );
  }
}

export default Row;
