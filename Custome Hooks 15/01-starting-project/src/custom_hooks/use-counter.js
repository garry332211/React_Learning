import {useState, useEffect} from "react";

//we can pass boolean parsameter to the functin here and set a default boolean 
const useCounter = (backorForward = true) =>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(backorForward) {
            setCounter((prevCounter) => prevCounter + 1);
        }

        else{
            setCounter((prevCounter) => prevCounter - 1);
        }
        
      }, 1000);
  
      return () => clearInterval(interval);
    }, [backorForward]);

    return counter;
}

export default useCounter;