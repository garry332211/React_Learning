
import { useState } from 'react';
import './App.css';


import Form from './components/UserInput/Form';
import DisplayBirthdays from './components/UserOutput/DisplayBirthdays';
const App =(props)=> {

  const [inputs, setInputs] = useState([
    {name: "Gurvinder Singh", bdayDate: "07/07/1994", bdayMonth: "July"},
    {name: "Sukhjeet Singh", bdayDate: "12/05/1996", bdayMonth: "May"},
    {name: "Harpreet Kaur", bdayDate: "10/10/1992", bdayMonth: "December"},
    {name: "Omkar Sran", bdayDate: "07/07/1994", bdayMonth: "July"},
    {name: "Mandeep Kaur", bdayDate: "12/05/1996", bdayMonth: "May"},
    {name: "Charanjeet Kairon", bdayDate: "29/05/1991", bdayMonth: "September"},
  ]);


  const finalHandler =(newName, newDate, newMonth) =>{
    setInputs((prevData) =>{
      return [...prevData, {name:newName, bdayDate:newDate, bdayMonth:newMonth}]
    })
  }
  return (
    <>
      <Form formInputData ={finalHandler}/>
      <DisplayBirthdays user={inputs} />
    
    </>
  );
}

export default App;
