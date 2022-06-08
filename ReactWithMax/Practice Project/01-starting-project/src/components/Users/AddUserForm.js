import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUserForm = (props) => {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  //Using ref module 10 lecure 106
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const userNameHandler = (event) => {
  //   setUserName(event.target.value);
  // };
  // const userAgeHandler = (event) => {
  //   setUserAge(event.target.value);
  // };
  const onFormSubmit = (event) => {
    event.preventDefault();
    const userName = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;
 
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Inavlid Input",
        message: "Please Enter Valid name and age,",
      });

      return;
    }

    if (+userAge < 1) {
      setError({
        title: "Enter Valid Age",
        message: "Please Enter Age Above 1",
      });

      return;
    }

    props.sendToApp(userName, userAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  //Error Modal Handling
  const hideTheErrorCard = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          whenPressOk={hideTheErrorCard}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={userNameHandler}
            // // value={userName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={userAgeHandler}
            // // value={userAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUserForm;
