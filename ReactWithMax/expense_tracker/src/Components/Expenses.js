import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";
import "./CSS/Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].expenseDate}
        title={props.items[0].expenseTitle}
        amount={props.items[0].expensePrice}
      />

      <ExpenseItem
        date={props.items[1].expenseDate}
        title={props.items[1].expenseTitle}
        amount={props.items[1].expensePrice}
      />

      <ExpenseItem
        date={props.items[2].expenseDate}
        title={props.items[2].expenseTitle}
        amount={props.items[2].expensePrice}
      />
    </Card>
  );
};

export default Expenses;