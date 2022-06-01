
import { useState } from 'react';
import './App.css';

import  Expenses  from './Components/Expenses';
import NewExpense from './Components/UserInput/NewExpense';

const dummy = [
  { id: "", date : new Date(2022,4,15),title :"Car Gas Fill Up",amount : 24.20,},
  { id: "", date : new Date(2021,6,25),title :"Rent",amount : 2200,},
  { id: "", date : new Date(2019,2,5),title :"Food",amount : 120,},
 
]

function App() {

    const [expenses, setExpenses] = useState(dummy);

    const finalExpenseHandler = (desi)=>{
      setExpenses((prevData) =>{
            return  [desi, ...prevData];
      });

      console.log(desi)

    };
  return (
    <div className="App">
      
    <NewExpense storedIdOpbject ={finalExpenseHandler}/>
    <Expenses items ={expenses}/>
   
    </div>
  );
}

export default App;
