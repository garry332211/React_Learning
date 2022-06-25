import { useState } from "react";
import "./App.css";
import Fetching from "./Components/Fetching";
import Output from "./Components/Output";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(true);

  const showBtn = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h1>Fetching The Data (Sending HTTP Request To A Data Base)</h1>

      <button onClick={showBtn}>Show</button>
      <Fetching sendToOut={setMovies} />
      {!show && <Output movies={movies} />}
    </div>
  );
}
