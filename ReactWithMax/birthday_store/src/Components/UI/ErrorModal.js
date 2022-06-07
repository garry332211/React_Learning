import React from 'react'
import Card from './Card'
import classes from "./ErrorModal.module.css"

const ErrorModal = (props) => {
  return (
    <div>
        <div>
          <div className={classes.backdrop} onClick={props.whenPressOk}/>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>

        <footer className={classes.actions}>
            <button onClick={props.whenPressOk}>Okay</button>
        </footer>
    </Card>
    </div>
    </div>
  )
}

export default ErrorModal