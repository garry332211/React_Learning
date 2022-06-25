import React from "react";
import "./Output.css";


const Output = (props) => {
  
  return (
  
    <div className="outputMain">
      {props.movies.map((list, key) => (
        <div className="list" key={key}>
          <h1>{list.title}</h1>
          <p>{list.releaseDate} </p>
          <p> {list.openingText}</p>
        </div>
      ))}
    </div>
    
  );
};

export default Output;
