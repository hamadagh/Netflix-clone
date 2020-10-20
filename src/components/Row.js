import React, { useState, useEffect } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/plaver_parameters
      autoplay: 1,
    },
  };

  if (movies) {
    return (
      <div className="row">
        <h2 className="movie-title">{title}</h2>
        <div className="movies-list">
          {movies.map((movie) => (
            <img
              className="movie-img"
              onClick={() => handleClick(movie)}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              key={movie.id}
            />
          ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
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
