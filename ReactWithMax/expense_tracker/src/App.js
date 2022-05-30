
import './App.css';
import  Expenses  from './Components/Expenses';

function App() {

  const expenses = [
    {  expenseDate : new Date(2022, 4, 30),expenseTitle :"Car Gas Fill Up",expensePrice : 24.20,},
    {  expenseDate : new Date(2022, 4, 10),expenseTitle :"House Rent",expensePrice : 80.00,},
    {  expenseDate : new Date(2022, 4, 22),expenseTitle :"Electiricity Bill",expensePrice : 180.00,}
  ]
  return (
    <div className="App">
      
     
    <Expenses items ={expenses}/>
   
    </div>
  );
}

export default App;
