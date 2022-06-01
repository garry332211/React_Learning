import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";
import "./CSS/Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const filterYearChanger = (selectedYear) => {
    setFilterYear(selectedYear);
  };

     //Handling Filter year so user can see the list by chosen Year

     const pickYear = props.items.filter(new1 => {
       return new1.date.getFullYear().toString() ===filterYear;
     })

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterYear}
          changeYear={filterYearChanger}
        />

        {pickYear.map((expense,index) => (
          <ExpenseItem
          key ={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
