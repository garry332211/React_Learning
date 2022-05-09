import React from "react";
import HemisphereDisplay from "./HemisphereDisplay";
//Lets CREATE A CLASS based Component
class App extends React.Component {
  //Constructor function from js.

  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // componentDidUpdate(){
  //   console.log("component did Update")
  //     }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div><HemisphereDisplay latitude={this.state.latitude}/></div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

export default App;
