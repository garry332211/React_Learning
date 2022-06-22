
import "./App.css";
import { useState } from "react";
import Output from "./Components/Output";


export default function App() {
  const [movies, setMovies] = useState([]);

  function fetchHandler() {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releasedDate: movieData.relase_date
          };
        });
        setMovies(transMovies);
        console.log("clickin");
      });
  }

  return (
    <div className="App">
      <h1>Fetching The Data (Sending HTTP Request To A Data Base)</h1>
      <Output movies ={movies} />
      <button onClick={fetchHandler}>Show</button>
    </div>
  );
}
