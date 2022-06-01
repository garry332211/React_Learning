import React from 'react'
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";


function NewExpense(props) {

    const gettingFormData = (inputs) =>{
        const newInputs ={
            ...inputs,
            id: Math.trunc(Math.random(1)*100)
        }
        
        props.storedIdOpbject(newInputs)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm inputFormData={gettingFormData}/>
    </div>
  )
}

export default NewExpense