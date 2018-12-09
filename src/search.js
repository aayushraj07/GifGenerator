import React, { Component } from "react";
import Display from "./display";
import axios from "axios";

// const Search = () => {
//   return <input />;
// };
/*http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5*/

class Search extends Component {
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

  // loadGif = ;

  render() {
    return (
      <div>
        <input
          value={this.state.keyword}
          onChange={event => {
            this.setState({ keyword: event.target.value });
          }}
        />
        <button onClick={this.loadGif}>Load Gif</button>
        <img src={this.state.gifUrl} alt="gifimage" />
      </div>
    );
  }
}

export default Search;

////var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });
