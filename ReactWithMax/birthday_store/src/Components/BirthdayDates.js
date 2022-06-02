import React from 'react'
import BirthdayDisplayer from './BirthdayDisplayer'
import Dropwdown from './Dropdown'
import { useState } from 'react'
function BirthdayDates(props) {

    const [selectedMonth, setSelectedMonth] = useState("July") // state is used to give it a default year
    const monthChangerHandler =(pickMonth)=>{
        console.log(pickMonth);
        setSelectedMonth(pickMonth);
    }

    const pickMonth = props.allDates.filter(newVar =>{
        return newVar.bdayMonth === selectedMonth;
    })
  return (
    <div>

        <Dropwdown onChangeMonth={monthChangerHandler}
        selected={selectedMonth}/>
        <br/>
        {pickMonth.map((dates, indexKey) => 

       <BirthdayDisplayer 
       key={indexKey}
       name={dates.name}
       birthdayDate={dates.birthdayDate}
       bdayMonth={dates.bdayMonth}/>)}

</div>
  )
}

export default BirthdayDates