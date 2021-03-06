import React from "react";
import { useState } from "react";





const Form =(props) =>{


    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")
    

    //Full Name Handler 

    const fullNameHandler =(event) =>{
            setName(event.target.value);
             // for testing only
    }
    //Mobile NUMBER INPUT
    const mobileNumHandler =(event)=>{
        setNumber(event.target.value);
        
    }

    //EMAIL INPUT
    const emailHandler =(event) =>{
        setEmail(event.target.value)
        
    }

    //ID Feild Handler

    const positionIDHandler =(event) =>{
        setId(event.target.value)
       
    }

    //Form handler

    const formHandler =(event) =>{
        event.preventDefault();
        
        const InputData ={
            name:name,
            email:email,
            number:number,
            id:id,

        };

        setName("");
        setEmail("");
        setNumber("");
        setId("");

       props.userInputsForm(InputData); //Send it to the App Page

    }

    return(
        
  
    <div className="form">
        <form onSubmit={formHandler}>

            <label>Full Name: </label>
            <input className="input1" type="text" placeholder="J. Smith" onChange={fullNameHandler} value={name}/>
                <br /><br />
            <label>Mobile: </label>
            <input className="input1" type="number" placeholder="0210...." onChange={mobileNumHandler} value={number} />

                <br /> <br />

            <label>Email: </label>
            <input className="input1" type="text" placeholder="gurvinde@gmail.com ..." onChange={emailHandler} value={email}/>

            <label>Position: </label>
            <input className="input1" type="text" placeholder="Manager, Employee, Boss" onChange={positionIDHandler} value={id}/>
                <br /><br />
          <button type="submit">Submit</button>
          <button onClick={props.hideFormArea} type="button">Cancel</button>
        </form>
    </div>

)
}
export default Form;