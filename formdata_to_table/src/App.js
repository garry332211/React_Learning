import React, { useState } from "react";

import NavbarSearch from "./Components/NavbarSearch";
import Output from "./Components/Output";
import "./styles.css";

const formInputs =[
  {
   id: "",
   fname:" ",
   lname:" ", 
   mobile:" ", 
   email:" "}
];

const App = (props) =>{

  const [allInputs, setAllInputs]= useState(formInputs);

  const finalInputHandler =(inputs) =>{
    setAllInputs((prevData) =>{
      return [inputs, ...prevData];

     
    });

    console.log(inputs)
   
  }
  
  
  return (
    <div className="App">
      

      <NavbarSearch onFromSubmit = {finalInputHandler} />
     
     <Output userDetails={allInputs}/>
  
        </div>
  );
}
export default App;
