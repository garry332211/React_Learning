
import ExpenseForm from "./ExpenseForm";
import './NewExpnese.css';
import React from 'react'

function NewExpense(props) {

  const gettingInputHandler = (input) =>{
          const newData ={
            ...input,
            id:  Math.random().toString(),
            
          }

         props.onAddExpense(newData);

  }
 
 
  return (
    <div className="new-expense">
        <ExpenseForm  inputDataForm ={gettingInputHandler}/>

    </div>
  )
}

export default NewExpense;