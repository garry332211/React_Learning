import React, { useState } from "react";
import ExpenseData from "./components/Expenses/ExpenseData";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 200.23,
    date: new Date(2022, 4, 15),
  },
  { id: "e2", title: "Groceries", amount: 150, date: new Date(2022, 5, 10) },
  { id: "e3", title: "House Rent", amount: 2000, date: new Date(2022, 3, 1) },
  { id: "e4", title: "Mortgage", amount: 550.22, date: new Date(2022, 4, 30) },
];

const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpneseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpneseHandler} />
      <ExpenseData items={expenses} />
    </div>
  );
};
export default App;
