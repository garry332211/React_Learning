import React from 'react'
import"./ErrorModal.moule.css";


import Button from './Button';

const ErrorModal = (props) => {
  return (
    <div>
        <div className="backdrop" onClick={props.whenClickedOk}/>
        <div className="modal">
            <header className="header">
                <h2>{props.modalTitle}<i className="fa-solid fa-circle-exclamation"></i></h2>
            </header>
            <div className="content">
                <p>{props.cardErrorMessage}</p>
            </div>
            <footer className="actions">
                <Button OnClick ={props.whenClickedOk}> Ok</Button>
            </footer>

        </div>
       

    </div>
  )
}

export default ErrorModal;