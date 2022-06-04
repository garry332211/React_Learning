import React, { useState } from "react";

function BirthdateForm(props) {

  const [name, setName] = useState("")
  const [bDate, setBdate] = useState("")
  const [month, setMonth] = useState("")


  const inputName =(event) =>{
    setName(event.target.value)
  }

  const inputBirthday =(event) =>{
    setBdate(event.target.value)
  }

  const inputMonth =(event) =>{
    setMonth(event.target.value)
  }

  const formSubmitHandler =(event) =>{
    event.preventDefault()
    const inputData ={
      name: name,
      bDate: bDate,
      month:month,
    }
    props.formInputData(inputData);

    setBdate("");
    setMonth("");
    setName("");
  }
  return (
    <div>
     <form className="" onSubmit={formSubmitHandler}>

  <div className="">
    <label>Name</label>
    <input type="text" className="input1" id="inputEmail4"
    onChange={inputName}
    value={name}/>
  </div>

  <div className="">
    <label>Birth Date</label>
    <input type="text" className="input2" placeholder="07/07/1994"
    onChange={inputBirthday}
    value={bDate}/>
  </div>

  <div className="">
    <label>Birthday Month</label>
    <input type="text" className="input3" placeholder="Month"
    onChange={inputMonth}
    value={month}/>
  </div>

    <input type="submit"/>
 
</form>
    </div>
  );
}

export default BirthdateForm;
