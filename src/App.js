import React, { Component } from "react";
import "./App.css";
import Search from "./search";
import Display from "./display";
import axios from "axios";

const GIPHYAPIKEY = "wrSXrhvnmsHgkOlpWT5iE7kJbmxxInFG";
// const RATING = "G";

class App extends Component {
  state = {
    gifUrl: "",
    keyword: ""
  };

  loadGif = () => {
    console.log(this.state.keyword);
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${
          this.state.keyword
        }&api_key=${GIPHYAPIKEY}&limit=1`
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

  setKeyword = keyword => {
    this.setState({ keyword }, () => this.loadGif());
    // console.log(this.state.keyword);
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <h1>Best Gif Genrator</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Search
              // url={this.state.gifUrl}
              // keyword={this.state.keyword}
              onClickMethod={this.setKeyword}
            />
          </div>
        </div>
        <div className="row">
          <Display url={this.state.gifUrl} />
        </div>
      </div>
    );
  }
}

export default App;
