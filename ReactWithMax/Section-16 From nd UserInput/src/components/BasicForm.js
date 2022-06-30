import useForm from "./hooks/basic-from-input";
const BasicForm = (props) => {
  //my custom HOOK

    const notEmpty =value => value.trim() !== "";
    const notEmpailEmpty =value => value.includes("@");
  const {
    value: inputFirstName,
    checkIsValid: firstNameIsValid,
    errorCheck: firstNameError,
    inputHandler: firstNameHandler,
    inputValuesBlur: nameBlurHandler,
    resetInputValues,
  } = useForm(notEmpty);

  const {
    value: inpuLastName,
    checkIsValid: lastNameIsValid2,
    errorCheck: lastNameError,
    inputHandler: lastNameHandler,
    inputValuesBlur: lastNameBlurHandler,
    resetInputValues: lastNameReset,
  } = useForm((value) => value.trim() !== "");

  const {
    value: inpuEmail,
    checkIsValid: emailIsValid2,
    errorCheck: emailError,
    inputHandler: emailHandler,
    inputValuesBlur: emailBlurHandler,
    resetInputValues: emailReset,
  } = useForm(notEmpailEmpty );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (firstNameIsValid && lastNameIsValid2 && emailIsValid2 && inpuEmail.includes('@')) {
      resetInputValues("");
      lastNameReset("");
      emailReset("");
      console.log(inputFirstName, inpuLastName, inpuEmail);
    } else {
      console.log("Entrer A value");
    }
  };

  const nameChangeError = firstNameError
    ? "form-control invalid"
    : "form-control";
  const nameChangeErrorLn = lastNameError
    ? "form-control invalid"
    : "form-control";
  const emailChangeError = emailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameChangeError}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameHandler}
            value={inputFirstName}
            onBlur={nameBlurHandler}
          />

          {firstNameError && (
            <p className = "error-text">Please Enter First Name</p>
          )}
        </div>

        <div className={nameChangeErrorLn}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameHandler}
            value={inpuLastName}
            onBlur={lastNameBlurHandler}
          />

          {lastNameError && (
            <p className = "error-text">Please Enter First Name</p>
          )}
        </div>
      </div>

      <div className={emailChangeError}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailHandler}
          value={inpuEmail}
          onBlur={emailBlurHandler}
        />

        {emailError && (
          <p className = "error-text"> Email Address <span style={{fontWeight:"bold", fontSize:"25px"}}>{inpuEmail} </span>must have @somemail.com</p>
        )}
      </div>


      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
