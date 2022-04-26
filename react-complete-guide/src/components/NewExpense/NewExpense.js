
import ExpenseForm from "./ExpenseForm";
import './NewExpnese.css';
import React from 'react'

function NewExpense(props) {

  const formInputHandler =  (userInput) =>{
          const newData = {
            id: Math.random().toString(),
            ...userInput,
          };

          props.onAddExpense(newData);
  }
 
  return (
    <div className="new-expense">
        <ExpenseForm getDataFromForm={formInputHandler} />

    </div>
  )
}

export default NewExpense;