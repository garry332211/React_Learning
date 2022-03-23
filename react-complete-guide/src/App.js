import ExpensItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      title: "Car Insurance",
      amount: 125.5,
      date: new Date(2021, 11, 13),
    },
    {
      title: "Pc Case",
      amount: 101.99,
      date: new Date(2022, 2, 21),
    },
    {
      title: "Blue Light Filtered Glasses",
      amount: 38.85,
      date: new Date(2022, 2, 23),
    },

    {
      title: "Car Mufflers",
      amount: 250,
      date: new Date(2021, 5, 23),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpensItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpensItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />

<ExpensItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
