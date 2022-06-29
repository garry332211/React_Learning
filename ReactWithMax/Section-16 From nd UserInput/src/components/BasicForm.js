import useForm from "./hooks/basic-from-input";
const BasicForm = (props) => {
  //my custom HOOK

  const {
    value: inputFirstName,
    checkIsValid: inputIsValid,
    errorCheck:firstNameError,
    inputHandler,
    inputValuesBlur: nameBlurHandler,
    resetInputValues,
  } = useForm((value) => value.trim() !== "" );
    


  const formSubmitHandler = event => {
    event.preventDefault();
    if(inputIsValid){
    resetInputValues("")
      console.log(inputFirstName);
  }

  else{

  console.log("Entrer A value");
  }
  }

  const nameChangeError = firstNameError ? "form-control invalid"
  : "form-control";
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameChangeError}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' 
          onChange={inputHandler}
          value={inputFirstName}
          onBlur={nameBlurHandler}
          />
        </div>


        {/* <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' 
          onChange={inputHandler}
          value={inputFirstName}
          onBlur={nameBlurHandler}
          />
        </div> */}
      </div>

      {/* <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' 
        onChange={inputHandler}
        value={inputFirstName}
        onBlur={nameBlurHandler}
        />
      </div> */}
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
