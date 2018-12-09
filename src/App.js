import React, { Component } from "react";
import "./App.css";
import Search from "./search";
import Display from "./display";

class App extends Component {
  render() {
    return (
      <div>
        {" "}
        <h1>Best MemeGenrator</h1>
        <Search />
        <Display />
      </div>
    );
  }
}

export default App;

//Watch video after 14. APi installed. in youtube app video

// constructor(props) {
//   super(props);
//   this.state = {
//     items: [],
//     isLoaded: false
//   };
// }

// componentDidMount() {
//   fetch("http://api.giphy.com/v1/gifs/search")
//     .then(res => res.json())
//     .then(json => {
//       this.setState({
//         isLoaded: true,
//         items: json
//       });
//     });
// }

// render() {
//   var { isLoaded, items } = this.state;

//   if (isLoaded) {
//     return <div>Loading.....</div>;
//   } else {
//     return (
//       <div>
//         <ul />
//       </div>
//     );
