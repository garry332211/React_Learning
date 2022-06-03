import React from 'react'
import { useState } from 'react';
import Output from './Components/Output';
import HeaderMenu from './Components/HeaderMenu';
import Form from "./Components/Form"



const data = [
  {name: "Guri", number: "018473994", email:"guri@dnf.com", id: "Boss"},
  {name: "Happu", number: "34453453", email:"happu@kaur.com", id: "Manager"},
  {name: "Patil", number: "345387533", email:"happu@kaur.com", id: "Manager"},
  {name: "Harpreet", number: "209473453", email:"harpreet@singh.com", id: "Manager"},
  {name: "Gogo", number: "038483932", email:"gogo@ch.com", id: "Employee"},
  {name: "Jassa", number: "0698493", email:"jassasingh@ch.com", id: "Employee"},
  {name: "Verma", number: "090903423", email:"verma@kostub.com", id: "Employee"},
]
 const App = () => {

  const [allInputs, setAllInputs] = useState(data);
  const [showForm, setShowForm] = useState(false);

  //Final Handler
    const finalHandler = (inputs) =>{
     
      setAllInputs((prevData) =>{
        
          return [inputs, ...prevData]
      })
      console.log(inputs)
      setShowForm(false)
    }

    const formHideHandler =()=>{
      setShowForm(true);
        }

      const hideForm =()=>{
        setShowForm(false);
      }
  return (
    <div>

    <HeaderMenu/> <br/>

    <h1>Getting User Input And Outputing Into Table</h1>

    {/* <Form userInputsForm={finalHandler}/> */}
    {!showForm &&<button  onClick={formHideHandler}>Add Data</button>}
{showForm &&<Form userInputsForm={finalHandler} hideFormArea={hideForm}/>}

    <h1>Results</h1>
  
    <Output inputDetails ={allInputs}/>
    </div>
  )
}
export default App;
