import React from 'react'
import Form from './Components/Form';
import { useState } from 'react';
import Output from './Components/Output';
import HeaderMenu from './Components/HeaderMenu';


const data = [
  {fullName: "", mobileNum: "", emailAddress:"", id: "",}
]
 const App = () => {

  const [allInputs, setAllInputs] = useState(data);

  //Final Handler
    const finalHandler = (inputs) =>{
     
      setAllInputs((prevData) =>{
        
          return [inputs, ...prevData]
      })
      console.log(inputs)
    }
  return (
    <div>

    <HeaderMenu/> <br/>

    <h1>Getting User Input And Outputing Into Table</h1>

    <Form userInputsForm={finalHandler}/>

    <h1>Results</h1>
    <Output inputDetails ={allInputs}/>
    </div>
  )
}
export default App;
