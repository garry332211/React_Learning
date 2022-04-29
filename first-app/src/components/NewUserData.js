import React from 'react'
import Form from './From'

const NewUserData = (props) => {

    const gettingFromData = (input)=> {
        const newInputDetails ={
            ...input,
            id: Math.random().toString(),
        }

        props.onAddUser(newInputDetails);
    }
  return (
    <div>
            <Form fromForm={gettingFromData}/>

    </div>
  )
}

export default NewUserData