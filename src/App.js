import React, { Component } from "react";
import "./App.css";
import Search from "./search";
import Display from "./display";
import axios from "axios";

class App extends Component {
  state = {
    gifUrl: "",
    keyword: "",
    giphyApiKey: "wrSXrhvnmsHgkOlpWT5iE7kJbmxxInFG",
    rating: "G"
  };

  loadGif = () => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${this.state.keyword}&api_key=${
          this.state.giphyApiKey
        }&limit=1`
      )
      .then(response => {
        //To avoid error when keyword is empty.
        if (response.data.data.length > 0) {
          this.setState({
            gifUrl: response.data.data[0].images.downsized.url
          });
        }
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        {" "}
        <h1>Best Gif Genrator</h1>
        <Search
          url={this.state.gifUrl}
          keyword={this.state.keyword}
          clickMethod={this.loadGif}
        />
        }
        <Display gifs={this.state.gifUrl} />
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
