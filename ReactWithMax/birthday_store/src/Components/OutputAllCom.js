import React, { useState } from "react";

import "./UserInput/Form.css";
import BirthdayDates from "./BirthdayDates";

const OutputAllCom = (props) => {
  const [shwoDates, setDatesShow] = useState(false);

  const addDates = () => {
    setDatesShow(true);
  };

  return (
    <div className="container">
      
      {!shwoDates && (
        <button className="buttonHide" type="button" onClick={addDates}>
          Show Birthdays
        </button>
      )}
      {shwoDates && <BirthdayDates allDates={props.getDataFromApp} />}
    </div>
  );
};

export default OutputAllCom;
