import React from "react";
import Row from "./components/Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row title="Trending" />
      <Row title="Top Rated" />
      <Row title="Science Fiction Movies" />
      <Row title="Documentary Movies" />
      <Row title="Comedy Movies" />
      <Row title="Action Movies" />
      <Row title="Horror Movies" />
      <Row title="Fantasy Movies" />
      <Row title="Family Movies" />
      <Row title="Drama Movies" />
      <Row title="War Movies" />
      <Row title="History Movies" />
    </div>
  );
}

export default App;
