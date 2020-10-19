import React from "react";
import Row from "./components/Row";
import Banner from "./components/Banner";
import requests from "./requests";
import Navbar from "./components/Navbar";
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
      <Navbar />
      <Banner />
      <Row title="Trending" fetchUrl={fetchTrending} />
      <Row title="Top Rated" fetchUrl={fetchTopRated} />
      <Row title="Science Fiction Movies" fetchUrl={fetchScienceFicton} />
      <Row title="Documentary Movies" fetchUrl={fetchDocumentary} />
      <Row title="Comedy Movies" fetchUrl={fetchComedy} />
      <Row title="Action Movies" fetchUrl={fetchAction} />
      <Row title="Horror Movies" fetchUrl={fetchHorror} />
      <Row title="Fantasy Movies" fetchUrl={fetchFantasy} />
      <Row title="Family Movies" fetchUrl={fetchFamily} />
      <Row title="Drama Movies" fetchUrl={fetchDrama} />
      <Row title="War Movies" fetchUrl={fetchWar} />
      <Row title="History Movies" fetchUrl={fetchHistory} />
    </div>
  );
}

export default App;
