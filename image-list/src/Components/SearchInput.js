import React, { useState } from "react";

function SearchInput (props){

  
  const [input, setInput] = useState(" ");
  


    //input Handler
    const inputHandler = (event)=>{
      setInput(event.target.value)

    }

    //formHandler
    const formHandler =(event) =>{
      event.preventDefault();
      
      props.onSearchSubmit(input)

    }
 
  
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={formHandler}>
          <div className="field">
            <div className="ui massive icon input">
              <input type="text" placeholder="search..." onChange={inputHandler}
             />
            
              <i type="submit" className="search icon"/>
            </div>
          </div>
        </form>
      </div>
    )
  
}

export default SearchInput;