import React, { useState } from "react";

import NavbarSearch from "./Components/NavbarSearch";
import Output from "./Components/Output";

const dummy_data = [
  {entry:""}
]

const App = () =>{

  const[userEntry, setEntry] = useState(dummy_data);

  const finalHandler=(input)=>{
    setEntry((prevEntry)=>{
        return[input, ...prevEntry]
    });
   
    }
  
  return (
    <div className="App">
      

      <NavbarSearch goToApp={finalHandler}/>
     
      <Output entries = {userEntry}/>
  
        </div>
  );
}
export default App;
