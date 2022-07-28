import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./Requests";

function App() {
  return (
    <div className="App">
      <h1> Hi</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
