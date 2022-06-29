
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  //Custom HOOK

  
  const {
    value: inputValue,
    isValid: inputValueIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: inputEmail,
    isValid: inputEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("a"));

 
  //FORM SUBMIT HANDLER
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (inputValueIsValid && inputEmailIsValid) {
     
    
   
    resetNameInput();
    resetEmailInput();

    console.log(inputValue, inputEmail);
  }
  else{
    console.log("Enter both feilds please")
  }
  };

  //CSS changes based on the conditions
  const classChangeOnError = nameInputError
    ? "form-control invalid"
    : "form-control";

  const emailClassChanger = emailInputError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={classChangeOnError}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={inputValue}
        />

        {nameInputError && <p style={{ color: "red" }}>Please Enter A Name</p>}
      </div>

      <div className={emailClassChanger}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={inputEmail}
        />

        {emailInputError && (
          <p style={{ color: "red" }}>Please Enter Your Email</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
