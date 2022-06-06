import React from "react";
import BirthdayDisplayer from "./BirthdayDisplayer";
import Dropwdown from "./Dropdown";
import { useState } from "react";
import styles from "./BirthdayDate.module.css"

function BirthdayDates(props) {
  const [selectedMonth, setSelectedMonth] = useState("September"); // state is used to give it a default year

  const monthChangerHandler = (pickMonth) => {
    console.log(pickMonth);
    setSelectedMonth(pickMonth);
  };

  const pickMonth = props.allDates.filter((newVar) => {
    return newVar.bdayMonth === selectedMonth;
  });

  return (
    <ul  className ={styles.bDayList} >
      <br />
      <Dropwdown onChangeMonth={monthChangerHandler} selected={selectedMonth} />
      <br />

      {pickMonth.map((dates, indexKey) => (
        <BirthdayDisplayer
       
          key={indexKey}
          name={dates.name}
          birthdayDate={dates.birthdayDate}
          bdayMonth={dates.bdayMonth}
        />
      ))}
    </ul>
  );
}

export default BirthdayDates;
