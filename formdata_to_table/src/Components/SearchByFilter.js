import React from 'react'
import "./styles.css";

function SearchByFilter(props) {

    

    const setSectionHandler =(event) =>{
        props.onChangeFilter(event.target.value);
        
    }
  return (
    <div className='expenses-filter'>
    <div className='expenses-filter__control'>
      <label>Filter by Position</label>
      <select 
       value={props.defaultFilter}

      onChange={setSectionHandler}>
        <option value='name'>All</option>
        <option value='Boss'>Boss</option>
        <option value='Manager'>Managers</option>
        <option value='Employee'>Employees</option>
       
      </select>
    </div>
  </div>
);
};


export default SearchByFilter