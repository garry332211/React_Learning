import "./Form.css";
import React, { useState } from "react";

const Form = (props) => {
  //Using State to get User Input

  const [enteredFirstName, setFirstName] = useState("");
  const [enteredLastName, setLastName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  //First Name Input

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  //Last Name Input

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  //Email Input
  const emailHandler =(event) =>{
      setEmail(event.target.value);
      
  }

  //On Form Submission
  const submitButonHandler = (event) => {
    //preventDefault Submitting
    event.preventDefault();

    const inputData = {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,

    }
    

    props.fromForm(inputData);
    console.log(inputData);

    //Now lets clear the Form input fileds once form is submitted 
            setFirstName("");
            setLastName("");
            setEmail("");
  };

  return (
    <div>
      <form onSubmit={submitButonHandler}>
        <label for="fname">First Name</label>
        <input
          type="text"
          placeholder="Your name.."
          onChange={firstNameHandler}
          value={enteredFirstName}
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          placeholder="Your last name.."
          onChange={lastNameHandler}
          value={enteredLastName}
        />

        <label for="country">Email</label>
        <input type="Email" placeholder="something@gmail.com" onChange={emailHandler} value={enteredEmail}/>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
