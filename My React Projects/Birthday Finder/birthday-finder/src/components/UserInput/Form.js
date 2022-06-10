import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Form.css";
import ErrorModal from "../UI/ErrorModal";

const Form = (props) => {
  const inputRefName = useRef();
  const inputRefDate = useRef();
  const inputRefMonth = useRef();

  const [error, setError] = useState(); //by default this state is empty 
  const [list, setList] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const name = inputRefName.current.value;
    const bdayDate = inputRefDate.current.value;
    const bdayMonth = inputRefMonth.current.value;

    if (
      name.trim().length === 0 ||
      bdayDate.trim().length === 0 ||
      bdayMonth.trim().length === 0
    ) {

     setError({
       title: "Invalid Input",
       message: "Please Fill In All The Details",
     });
    }

    else if (bdayMonth === bdayMonth.toLowerCase()) {
      setError({
        title: "Invalid Month",
        message: `Enter The Birthday Month With Capital letter to Start With e.g ${bdayMonth.charAt(0).toUpperCase()}${bdayMonth.slice(1)} not ${bdayMonth}` 
      });

    } else {
      props.formInputData(name, bdayDate, bdayMonth); //this Stores The values to the Birthday Displayer
      const data = {name, bdayDate, bdayMonth}//this just to print out the values on the form to confirm 

      setList((output)=>[...output,data]);
      console.log()

      // method below is not recomended
      inputRefName.current.value = "";
      inputRefDate.current.value = "";
      inputRefMonth.current.value = "";
      
    }
  };

  const errorHandler =()=>{
    setError(null);
  }


  return (
    <React.Fragment>
      { error &&<ErrorModal
        modalTitle={error.title}
        cardErrorMessage={error.message}
        whenClickedOk ={errorHandler}
      /> }
      <Card>
        <form onSubmit={formSubmitHandler}>
          <div className="form-content">
            <div className="login-form">
              <div className="title">Enter Your Birthday Details</div>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fa-solid fa-person"></i>
                  <input
                    type="text"
                    placeholder=" Enter Your Full Name"
                    ref={inputRefName}
                  />
                </div>
                <div className="input-box">
                  <i className="fa-solid fa-cake-candles"></i>
                  <input
                    type="text"
                    placeholder=" Enter Your D.O.B"
                    ref={inputRefDate}
                  />
                </div>
                <div className="input-box">
                  <i className="fa-solid fa-calendar"></i>
                  <input
                    type="text"
                    placeholder=" Enter Your Birthday Month"
                    ref={inputRefMonth}
                  />
                </div>
                <div className="button">
                  <Button type="submit">Add Birthday</Button>
                </div>
                {/* <div className="text">By Gurvinder Sran</div>  */}
                <div className="text2"> {list.map((a,keys)=><div key={keys}>
                  Your Birth Date Has Been Added
                  <p>{a.name}</p>
                  <p>{a.bdayDate}</p>
                  <p>{a.bdayMonth}</p>
                </div>
                )} 
                </div>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Form;
