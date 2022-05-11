import React, { useState } from "react";
import "../styles.css"

const NavbarSearch =(props)=> {
    //initialising useStates to stor user inputs
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")
    const [input4, setInput4] = useState("")

 
    const input1Handler=(event)=> {
        setInput1(event.target.value);
        
    }

    const input2Handler=(event)=> {
        setInput2(event.target.value);
     }


     const input3Handler=(event)=> {
        setInput3(event.target.value);
     }

     const input4Handler=(event)=> {
        setInput4(event.target.value);
     }


   const formHandler=(event)=>{
        event.preventDefault();

        const inputValues ={
          fname: input1,
          lname: input2,
          mobile: input3,
          email: input4,
          id: Math.trunc(Math.random(1)*100), 
        }
          props.onFromSubmit(inputValues);
          //ADD TWO-WAY BINDING to clear th search inputs upon submission 
          setInput1("");
          setInput2("");
          setInput3("");
          setInput4("");
        }
    

  return (
    <div className="form_data">
      <h1>User Input Handler Form</h1>
      <form onSubmit={formHandler}>
        <input type="text" placeholder="First Name"
         onChange={input1Handler}
         value={input1}
       />
        <input type="text" placeholder="Last Name"
         onChange={input2Handler}
         value={input2}
       />
        <input type="text" placeholder="Mobile"
         onChange={input3Handler}
         value={input3}
       />
        <input type="email" placeholder="Email"
         onChange={input4Handler}
         value={input4}
       />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>

 
  )
}


export default NavbarSearch