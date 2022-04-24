import React, { useState } from "react";
import "./ExpenseFrom.css";

function ExpenseFrom() {
    const [enteredTitle, setEnteredTitle] = useState(""); // for Title
    const [enteredAmount, setEnteredAmount] = useState(""); // for Amount
    const [enteredDate, setEnteredDate] = useState(""); // for Date

  

  //For Title
  const titleChangeHandler = (event) => {
   setEnteredTitle(event.target.value);
   
  };

  //For Amount
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  };

  //For Date Chnge
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  };

  //To Submit the Form
   const submitHandler = (event) =>{
       event.preventDefault(); // this prevents the form to refresh when submitted empty !!!!

       const expenseData =  {
           title: enteredTitle,
           amount: enteredAmount,
           date: new Date(enteredDate),
       }

       console.log(expenseData);
   }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseFrom;
