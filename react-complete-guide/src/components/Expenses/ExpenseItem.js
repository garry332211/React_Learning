import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, {useState} from "react";


function ExpenseItem(props) {
  

  const [title, setTitle] = useState(props.title);
  

  const btnHandler = () => {

    setTitle("Trip To Australia");
 
  
  }


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>

      <div className="expense-item__price">${props.amount}</div>

      <button onClick={btnHandler}> Clcikc Me</button>
    
    </Card>
  );
}

export default ExpenseItem;
