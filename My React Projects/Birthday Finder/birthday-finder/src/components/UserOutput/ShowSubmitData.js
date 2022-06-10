import React from 'react'

import Card from '../UI/Card'
import Form from '../UserInput/Form'
import DisplayBirthdays from './DisplayBirthdays'


const ShowSubmitData = (props) => {






  return (
    <div>

        <Form formInputData ={props.showOutputData}/>
        <DisplayBirthdays user={props.sendToApp} />

        
    </div>
  )
}

export default ShowSubmitData