import { useState } from "react";

const useInput = (validateValue) =>{
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(inputValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setInputValue(event.target.value);
      };

      const inputBlurHandler = (event) => {
        setIsTouched(true);
      };
      const reset = () => {
        setInputValue("");
        setIsTouched(false);
      }
    return {
        value: inputValue, hasError,
        isValid: valueIsValid,
        valueChangeHandler, inputBlurHandler,
        reset,
    }
}

export default useInput;