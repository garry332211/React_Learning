import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
        setError({title: "Inavlid Input",
        message: "Please Enter Valid name and age"})
      return console.log("Enter Both Values");
    }

    if (+userAge < 1) {
        setError({title: "Enter Valid Age",
        message: "Please Enter Age Above 1"})
      return console.log("Enter Age Above 1", userName);
    }
   

    props.sendToApp(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const hideTheErrorCard =()=>{
      setError(null)
  }
  return (
    <div>
     {error && <ErrorModal title={error.title} message={error.message} whenPressOk={hideTheErrorCard}/>}
      <Card className={classes.input}>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameHandler}
            value={userName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={userAgeHandler}
            value={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUserForm;
