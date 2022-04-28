import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseData(props) {
  const [filterYear, setFilterDropdown] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterDropdown(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChnageFilter={filterChangeHandler}
        />

        {filteredExpense.length === 0 &&  <p>No Expenses Found </p>} 
          {filteredExpense.length > 0 && 
     
        filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
     
        ))}
      </Card>
    </div>
  );
}

export default ExpenseData;
