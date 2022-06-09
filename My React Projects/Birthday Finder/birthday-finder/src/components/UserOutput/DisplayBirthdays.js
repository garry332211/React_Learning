import React, { useState } from 'react'
import Card from '../UI/Card'
import Dropdown from '../UI/Dropwdown/Dropdown';



import classes from "./Output.module.css";

const DisplayBirthdays = (props) => {

    const [filterSet, setFilterSet] = useState("July");
    
    

    const filterHandler =(selectedMonth)=>{
        setFilterSet(selectedMonth)
        console.log(selectedMonth)
    }

    const pickMonth = props.user.filter(var1 =>{
        return var1.bdayMonth ===filterSet;
    })
 



  return (
      <>
       
     
    <Card className={classes.users}>
        <Dropdown selectedFilter={filterSet}
        whenFilterChange ={filterHandler}
        />
     
        <div className={classes.title}>
            All Birthdays
        </div>
        
<ul>
    {pickMonth.map((details,index) =>(
        <li key={index}>
            {details.name} {details.bdayDate} {details.bdayMonth}
        </li>
    ))}
</ul>
    </Card>
    </> )
}

export default DisplayBirthdays