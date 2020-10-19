import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./banner.css";

const base_url = "https://image.tmdb.org/t/p/original";
function Banner() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      const randomMovie = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomMovie]);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  if (movie) {
    return (
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
          backgroundPosition: "cover",
        }}
      >
        <div className="banner-decription">
          <h2 className="banner-title">
            {movie?.name || movie?.original_title || movie?.original_name}
          </h2>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">Add to favorites</button>
          </div>
          <p className="banner-description">{movie.overview}</p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Banner;
