import TestingCard from "./components/TestingCard";
import  ReactDOM from "react-dom";
import Person from "./components/Person";




const App = () =>{
    return(
        <div>
      <TestingCard> 
       <Person 
       name ={"Gurvinder Singh"}/>
    </TestingCard>

        <TestingCard>
        <Person 
       name ={"Harpreet Kaur"}/>
  </TestingCard>

  <TestingCard>
        <Person 
       name ={"Smaira PislukaChu"}/>
  </TestingCard>
        </div>

        
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)