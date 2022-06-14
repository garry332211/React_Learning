import React, { useState,useEffect } from "react";



const AutContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
});

 export const AutContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(() => {
        const onLogginEffect = localStorage.getItem("LoggedIn")
        
          if(onLogginEffect ==='1'){
            setIsLoggedIn(true)
            
          }
    
      }, [])

    const logoutHandler = () =>{
        localStorage.removeItem("LoggedIn")
        setIsLoggedIn(false)
    }

    const loginHandler = () =>{
        localStorage.setItem("LoggedIn", "1")
        setIsLoggedIn(true);
    }

    return(
            <AutContext.Provider
            value = {{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }} >




                {props.children}
            </AutContext.Provider>



    ) 

 }



export default AutContext;