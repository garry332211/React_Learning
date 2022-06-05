import React from "react";
import BirthdateForm from "./UserInput/BirthdateForm";
import { useState } from "react";

function InputForm(props) {
  const [formShow, setformShow] = useState(false);

  const addForm = () => {
    setformShow(true);
  };

  const hideForm = () => {
    setformShow(false);
  };
  return (
    <div>
           
      {!formShow && (
        <button className="buttonHide" type="button" onClick={addForm}>
          Add New Date
        </button>
      )}
      {formShow && (
        <BirthdateForm
          formInputData={props.formInputs}
          hideForCompletely={hideForm}
        />
      )}
    </div>
  );
}

export default InputForm;
