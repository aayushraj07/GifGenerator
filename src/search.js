import React, { Component } from "react";

class Search extends Component {
  state = {
    URL: this.props.url,
    keyword: this.props.keyword,
    forButton: this.props.clickMethod
  };

  render() {
    return (
      <div>
        <input
          value={this.state.keyword}
          onChange={event => {
            this.setState({ keyword: event.target.keyword });
          }}
        />
        <button onClick={this.forButton}>Load Gif</button>
      </div>
    );
  }
}
// const Search = props => {
//   return (
//     <div>
//       <input
//         value={props.gif}
//         onChange={event => {
//           this.setState({ value: event.target.value });
//         }}
//       />
//       <button onClick={this.loadGif}>Load Gif</button>
//       <img src={props.gifUrl} alt="gifimage" />
//     </div>
//   );
// };

export default Search;

////var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });
