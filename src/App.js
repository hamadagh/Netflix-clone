import React from "react";
import Row from "./components/Row";
import requests from "./requests";
import "./App.css";

const {
  fetchTrending,
  fetchTopRated,
  fetchScienceFicton,
  fetchDocumentary,
  fetchComedy,
  fetchAction,
  fetchHorror,
  fetchFantasy,
  fetchFamily,
  fetchDrama,
  fetchWar,
  fetchHistory,
} = requests;

function App() {
  return (
    <div className="App">
      <Row title="Trending" fetchUrl={fetchTrending} />
      <Row title="Top Rated" fetchUrl={fetchTrending} />
      <Row title="Science Fiction Movies" fetchUrl={fetchTrending} />
      <Row title="Documentary Movies" fetchUrl={fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={fetchTrending} />
      <Row title="Action Movies" fetchUrl={fetchTrending} />
      <Row title="Horror Movies" fetchUrl={fetchTrending} />
      <Row title="Fantasy Movies" fetchUrl={fetchTrending} />
      <Row title="Family Movies" fetchUrl={fetchTrending} />
      <Row title="Drama Movies" fetchUrl={fetchTrending} />
      <Row title="War Movies" fetchUrl={fetchTrending} />
      <Row title="History Movies" fetchUrl={fetchTrending} />
    </div>
  );
}

export default App;
