import React,{useState} from 'react'

import "../Components/styles.css";
import SearchByFilter from './SearchByFilter';


function Output(props) {

    const [defaultSection, setSection] = useState("name");

    const getDataByFilter =(selectedFilter)=>{
      
       setSection(selectedFilter)
       console.log(selectedFilter)
    }

    //Trying To Sort Input
    const pickData = props.inputDetails.filter(var1 =>{
        return var1.id === defaultSection;
    })
 
    console.log()
  return (
    <div>
         <SearchByFilter 
        defaultFilter={defaultSection}
        onChangeFilter={getDataByFilter}/>
        <table id='customers'>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Number</th>
                </tr>
            </thead>
           
            <tbody>
                
                {pickData.map((details,index) =>
              
                <tr key={index}>
                    <td>{details.id}</td>
                    <td>{details.name}</td>
                    <td>{details.email}</td>
                    <td>{details.number}</td>
                </tr>

        )}
                
            </tbody>
        </table>
    </div>
  )
}

export default Output;