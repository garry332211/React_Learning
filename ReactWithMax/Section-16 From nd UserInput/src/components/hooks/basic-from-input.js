import { useState } from "react";

const useForm = ((values) => {
    const [inputValues, setInputValues] = useState("");
    const [inputIsValid, setInputIsValid] = useState(false)

    const  valuesAreValid = values(inputValues);
    const errorCheck = !valuesAreValid && inputIsValid;

    //all three inputs handler 
    const inputHandler = event =>{
        setInputValues(event.target.value)
    }

    //blue for all three inputs
    const inputValuesBlur = event => {
        setInputIsValid(true)
    }

    const resetInputValues = () =>{
        setInputValues("");
        setInputIsValid(false)
    }

    return {
        value: inputValues, errorCheck,
        checkIsValid: inputIsValid,
        inputHandler, inputValuesBlur, resetInputValues,
    }


})

export default useForm;