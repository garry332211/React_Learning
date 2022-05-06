

import React from "react";

import SearchInput from "./Components/SearchInput";
import axios from "axios";
import ImageList from "./Components/ImageList";
class App extends React.Component{

  constructor(props){
    super(props);

    this.state ={images: []}

  this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(entry){
  
    const response = await axios.get(`https://pixabay.com/api/?key=27219150-23726d1ef8a1ddf67f8bc0b31&q=${entry}&image_type=photo`);
    this.setState({images: response.data.hits})
  }


  render(){

  
  return (

    <div className="ui container" style={{marginTop:'30px' }}>
 
   

      <SearchInput onSearchSubmit={this.onSearchSubmit}/>
      <ImageList  images = {this.state.images}/>
   
    </div>
  );
}
}

export default App;
