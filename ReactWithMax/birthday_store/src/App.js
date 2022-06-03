
import './App.css';
import BirthdayDates from './Components/BirthdayDates';


function App() {
  const allDates =[
    {name:"Jovan", birthdayDate: "23/01/2020", bdayMonth: "January"},
    {name:"Tejas", birthdayDate: "24/01/2020", bdayMonth: "January"},
    {name:"Dad", birthdayDate: "27/02/1965", bdayMonth: "February"},
    {name:"Jassa", birthdayDate: "4/03/1994", bdayMonth: "March"},
    {name:"Simmi", birthdayDate: "13/03/2001", bdayMonth: "March"},
    {name:"Happy", birthdayDate: "23/04/1993", bdayMonth: "April"},
    {name:"Hargun", birthdayDate: "12/05/2021", bdayMonth: "May"},
    {name:"Gogo", birthdayDate: "12/05/1996", bdayMonth: "May"},
    {name:"Mom", birthdayDate: "14/05/1970", bdayMonth: "May"},
    {name:"Piplu", birthdayDate: "02/06/2001", bdayMonth: "June"},
    {name:"Karan", birthdayDate: "07/06/1995", bdayMonth: "June"},
    {name:"Ekam", birthdayDate: "27/06/1995", bdayMonth: "June"},
    {name:"Bunty", birthdayDate: "06/07/1982", bdayMonth: "July"},
    {name:"Guri(Myself)", birthdayDate: "07/07/1994", bdayMonth: "July"},
    {name:"Daman", birthdayDate: "13/07/2003", bdayMonth: "July"},
    {name:"Nonu", birthdayDate: "15/07/1992", bdayMonth: "July"},
    {name:"Mani ", birthdayDate: "02/08/1990", bdayMonth: "August"},
    {name:"Rani ", birthdayDate: "02/08/1989", bdayMonth: "August"},
    {name:"Harinder", birthdayDate: "22/10/1990", bdayMonth: "October"},
    {name:"Jindu", birthdayDate: "09/11/1992", bdayMonth: "November"},
    {name:"Happu", birthdayDate: "10/12/1992", bdayMonth: "December"},
    {name:"Gaggu", birthdayDate: "14/12/1992", bdayMonth: "December"},
    {name:"Mummy", birthdayDate: "16/12/1965", bdayMonth: "December"},
        //More Will Be Added IN the future    
]
  return (
    <div className="App">
     <BirthdayDates allDates={allDates} />
    </div>
  );
}

export default App;