import React, { useState } from "react";
import "./Form.css"
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
      bDate: bDate,
      month: month,
    };
    props.formInputData(inputData);

    setBdate("");
    setMonth("");
    setName("");
  };
  return (
    <div className="container">
        <div className="heading">Birthday Finder</div>
      <form className="" onSubmit={formSubmitHandler}>
        <div className="card-details">
          <div className="card-box">
            
          <span className="details">Name</span>
          <input
            type="text"
            id="inputEmail4"
            onChange={inputName}
            value={name}
          />
        </div>

        <div className="card-box">
          <span className="details">Birth Date</span>
          <input
            type="text"         
            placeholder="07/07/1994"
            onChange={inputBirthday}
            value={bDate}
          />
       </div>

       <div className="card-box"> 
          <span className="details">Birthday Month</span>
          <input
            type="text"      
            placeholder="Month"
            onChange={inputMonth}
            value={month}
          />
        </div>
         <div className="button">
        <input type="submit" />
        </div>
      </div>
      </form>
    </div>
  );
}

export default BirthdateForm;
