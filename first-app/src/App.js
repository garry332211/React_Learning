import { useState } from "react";
import "./App.css";

import NewData from "./components/NewData";
import NewUserData from "./components/NewUserData";

const getInputData = [
  {
    id: "e1",
    firstName: "",
    lastName: " ",
    email: " ",
  },

];

function App() {
  const [inputDetails, setInputDetails] = useState(getInputData);
  const addUserInputs = (input2) => {
    setInputDetails((prevInput) => {
      return [input2, ...prevInput];
    });
  };

  return (
    <div className="App">
      <h1>From Input Tsester</h1>
     

    
      <NewUserData onAddUser={addUserInputs} />
      <NewData userDetails={inputDetails} />
      
    </div>
  );
}

export default App;
