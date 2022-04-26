
import ExpenseData from "./components/Expenses/ExpenseData";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {

  const expense = [

    { title: "Car Insurance", amount: 200.23, date: new Date(2022, 4, 15) },
    { title: "Groceries", amount: 150, date: new Date(2022, 5, 10) },
    { title: "House Rent", amount: 2000, date: new Date(2022, 3, 1) },
    { title: "Mortgage", amount: 550.22, date: new Date(2022, 4, 30) },
  ];

  const addExpneseHandler = (expense) =>{

    console.log("in App.js");
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpneseHandler}/>
      <ExpenseData items={expense} />
     
    
    </div>

    
  );
}
export default App;
