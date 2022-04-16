
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [

    { title: "Car Insurance", amount: 200.23, date: new Date(2022, 4, 15) },
    { title: "Groceries", amount: 150, date: new Date(2022, 5, 10) },
    { title: "House Rent", amount: 2000, date: new Date(2022, 3, 1) },
    { title: "Mortgage", amount: 550.22, date: new Date(2022, 4, 30) },
  ];

  return (
    <div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />

      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />

<ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />

<ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
      
    
    </div>

    
  );
}
export default App;
