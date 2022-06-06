import React, { useState } from "react";
import styles from "./Form.module.css"
function BirthdateForm(props) {
  const [name, setName] = useState("");
  const [bDate, setBdate] = useState("");
  const [month, setMonth] = useState("");

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
    props.formInputData(inputData);

    setBdate("");
    setMonth("");
    setName("");
  };
  return (
    <div className={styles.container}>
        <div className={styles.heading}>Birthday Finder</div>
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
        <button onClick={props.hideForm}>Cancel</button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default BirthdateForm;
