// import React, { useRef } from "react";
import  "./Form.css";
const Form = () => {
  return (
    <div className="container">
      <form>
          <div className="form-content">
        <div className="login-form">
          <div className="title">Enter Your Birthday Details</div>
          <div className="input-boxes">
            <div className="input-box">
              <i class="fa-solid fa-person"></i>
              <input type="text" placeholder=" Enter Your Full Name" />
            </div>
            <div className="input-box">
              <i class="fa-solid fa-cake-candles"></i>
              <input type="text" placeholder=" Enter Your D.O.B" />
            </div>
            <div className="input-box">
              <i class="fa-solid fa-calendar"></i>
              <input type="text" placeholder=" Enter Your Birthday Month" />
            </div>
            <div className="button">
                <input type="button" value="Submit" />
            </div>
          </div>
        </div>
    </div>
      </form>
    </div>
  );
};

export default Form;
