import React,{useState} from 'react';
import AddUserForm from './components/Users/AddUserForm';
import UserList from './components/Users/UserList';



function App() {

    const [userList, setUserList] = useState(
      [
        {name:"Guri", age: 28, doB: "07/07/1994", email: "gurvindr@gmail.com"},
        {name:"Happu", age: 29, doB: "10/12/1992", email: "harpreet@outlook.com"},
        {name:"Nekki", age: 27, doB: "05/09/1995", email: "gyani@gmail.com"},
        {name:"Jassi", age: 29, doB: "07/07/1992", email: "shaandar@kroad.com"},
      ]
    )

    const userInputHandler =(usName, usAge) =>{
      setUserList((prevData) =>{
      return [...prevData,  {name: usName, age: usAge}]
      })


      console.log(usName, usAge, "Coming From App.js")
    }
  return (
    <div>
      <AddUserForm sendToApp={userInputHandler}/>
      <UserList  userData ={userList}/>
    </div>
  );
}

export default App;
