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
  // {
  //   id: "e2",
  //   firstName: "Samules",
  //   lastName: "Jakcson",
  //   email: "sam@gmail.com}",
  // },
  // {
  //   id: "e3",
  //   firstName: "Harpreet",
  //   lastName: "Kaur",
  //   email: "happyguri2211@outlook.com",
  // },
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
