import React, { useState } from "react";

const NavbarSearch =(props)=> {

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
      
        }
    

  return (
    <div>

      <form onSubmit={formHandler}>
        <input type="text" placeholder="Search" onChange={input1Handler}
       />
        <input type="text" placeholder="Search" onChange={input2Handler}
       />
        <input type="text" placeholder="Search" onChange={input3Handler}
       />
        <input type="text" placeholder="Search" onChange={input4Handler}
       />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>

 
  )
}


export default NavbarSearch