import React from "react";

const Dropwdown = (props) => {

   
const selectMonth =(event) =>{
    props.onChangeMonth(event.target.value)
}
 

  return (
    <div className="container">
        <select onChange={selectMonth} value={props.selected}>
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>
        </select>
      </div>
   
  );
};

export default Dropwdown;

