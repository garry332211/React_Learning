import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseData(props) {
  const [filterYear, setFilterDropdown] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilterDropdown(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChnageFilter={filterChangeHandler}
        />

      

        {props.items.map((expense) => (
          <ExpenseItem
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
