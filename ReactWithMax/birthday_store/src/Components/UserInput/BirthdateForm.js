import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import styles from "./Form.module.css"
function BirthdateForm(props) {
  const [name, setName] = useState("");
  const [bDate, setBdate] = useState("");
  const [month, setMonth] = useState("");

  
  const [error, setError] = useState();
  

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputBirthday = (event) => {
    setBdate(event.target.value);
  };

  const inputMonth = (event) => {
    setMonth(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    const inputData = {
      name: name,
      birthdayDate: bDate,
      bdayMonth: month,
    };

    if(inputData.name.trim().length === 0 ||inputData.birthdayDate.trim().length === 0 || inputData.bdayMonth.trim().length === 0){
      setError({title: "Invalid Inputs",
      message: "Make Sure To Fill All The Fields"})
   
    }

    if(inputData.bdayMonth ===inputData.bdayMonth.toLocaleLowerCase()){
      setError({title: "Invalid Inputs",
      message: "Enter The Birthday Month Starting With an Uppercase Letter (e.g January not january"})

    
    }
    props.formInputData(inputData);

    setBdate("");
    setMonth("");
    setName("");
  };


  const hideTheErrorCard =()=>{
    setError(null)
}
  return (
    <div className={styles.container}>
       <div className={styles.heading}>Birthday Finder</div>
       {error &&  <ErrorModal title={error.title} message={error.message} whenPressOk={hideTheErrorCard} />}
      <form  onSubmit={formSubmitHandler}>
        <div className={styles['card-details']}>
          <div className={styles['card-box']}>
            
          <span className={styles.details}>Name</span>
          <input
            type="text"
            onChange={inputName}
            value={name}
          />
        </div>

        <div className={styles['card-box']}>
          <span className={styles.details}>Birth Date</span>
          <input
            type="text"         
            placeholder="07/07/1994"
            onChange={inputBirthday}
            value={bDate}
          />
       </div>

       <div className={styles['card-box']}> 
          <span className={styles.details}>Birthday Month</span>
          <input
            type="text"      
            placeholder="Month"
            onChange={inputMonth}
            value={month}
          />
        </div>
         <div className={styles.button}>
        <button type="submit">Submit</button>
        </div>
         <div className={styles.button}>
        <button type="button" onClick={props.cancelForm}>Hide</button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default BirthdateForm;
