import React from "react";
import BirthdayDisplayer from "./BirthdayDisplayer";
import Dropwdown from "./Dropdown";
import { useState } from "react";
import styles from "./BirthdayDate.module.css"

function BirthdayDates(props) {
  const [selectedMonth, setSelectedMonth] = useState("January"); // state is used to give it a default year
  const [hideAllBday, setAllBday]  = useState(false)

  const monthChangerHandler = (pickMonth) => {
    console.log(pickMonth);
    setSelectedMonth(pickMonth);
  };

  const pickMonth = props.allDates.filter((newVar) => {
    return newVar.bdayMonth === selectedMonth;
  });

  const showBday =() =>{
    setAllBday(true);
  }
  const hideAll =() =>{
    setAllBday(false);
  }

  return (
    <ul  className ={styles.bDayList} >
      <br />

      {!hideAllBday && <button type="button" onClick={showBday}>
          Show All BirthDays
        </button>}
      {hideAllBday && <Dropwdown onChangeMonth={monthChangerHandler} selected={selectedMonth} />}
      <br />
     
      {hideAllBday && pickMonth.map((dates, indexKey) => (
         <BirthdayDisplayer
       
          key={indexKey}
          name={dates.name}
          birthdayDate={dates.birthdayDate}
          bdayMonth={dates.bdayMonth}
        />
        
      ))}
       {hideAllBday && <button type="button" onClick={hideAll}>
          Hide All Birthdays
        </button>}
    </ul>
  );
}

export default BirthdayDates;
