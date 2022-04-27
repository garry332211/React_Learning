import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  //Lets Handle the From Inputs now
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  //Title Input
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  //Amount Input
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  //Date Input
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  //Form Submit Handling
  const formInputHandler = (event) => {
    //lets prevent the from by submitting when there are no values inserted
    event.preventDefault();

    const getInputData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

   

    //nowtoClear The INPUTS one form submitted

    props.inputDataForm(getInputData);

    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={formInputHandler}>
        {/* Title */}
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>

          {/* Amount */}
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>

          {/* Date */}
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>

          {/* Submit Button */}
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
