import React from 'react'
import Form from './Form'

function Addid(props) {



    const addRandomId = (ids)=>{
        const newData ={

            ...ids,
            id: Math.trunc( Math.random(1)*2000),   
        }
        props.toAppFile(newData);
    }

    

  return (
    <div>

<Form userInputsForm={addRandomId}/>
    </div>
  )
}

export default Addid