import React from "react";

class SearchInput extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {entry: ""};
    this.inputHandler = this.inputHandler.bind(this);
    this.formHandler = this.formHandler.bind(this);
  }
  
  //input Handling 
  inputHandler(event){
    this.setState({entry: event.target.value})
   
  }
  //handle the form on submission 
  formHandler(event){
  event.preventDefault();
  this.props.onSearchSubmit(this.state.entry);
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.formHandler}>
          <div className="field">
            <div className="ui massive icon input">
              <input type="text" placeholder="search..." onChange={this.inputHandler}
             />
            
              <i type="submit" className="search icon"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
