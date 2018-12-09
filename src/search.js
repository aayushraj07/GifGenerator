import React, { Component } from "react";
import Display from "./display";
import axios from "axios";

// const Search = () => {
//   return <input />;
// };

class Search extends Component {
  state = {
    gifUrl: "",
    keyword: "pokemon",
    giphyApiKey: "wrSXrhvnmsHgkOlpWT5iE7kJbmxxInFG",
    rating: "G"
  };
  componentDidMount() {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${
          this.state.keyword
        }&api_key=wrSXrhvnmsHgkOlpWT5iE7kJbmxxInFG`
      )
      .then((response: { data: { data: { image_url: string } } }) => {
        // console.log(response);
        this.setState({ gifUrl: response.data.data.image_url });
      });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.keyword}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default Search;
