import { useState, useCallback, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Output from "./Components/Output";

export default function App() {
  //States
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  //asyn await for fetching data
  const fetchHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    //try to and catch to handle errors
    try {
      const response = await fetch("https://swapi.dev/api/films/");

      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();
      const transMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releasedDate: movieData.relase_date,
        };
      });
      setMovies(transMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  //to handle the errors we will store it in a variable
  let msgToShow = <p>No Movies Found</p>;

  if (movies.length > 0) {
    msgToShow = <Output movies={movies} />;
  }

  if (error) {
    msgToShow = <p>{error}</p>;
  }

  if (isLoading) {
    msgToShow = <p>Loading...</p>;
  }
  return (
    <div>
      <Card className="App">
        <h1>Fetching The Data (Sending HTTP Request To A Data Base)</h1>

        <button onClick={fetchHandler}>Show</button>
      </Card>
      {msgToShow}
    </div>
  );
}
