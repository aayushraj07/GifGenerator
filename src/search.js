import React, { Component } from "react";

class Search extends Component {
  state = {
    inputValue: ""
  };

  returnKeyword = () => {
    this.props.onClickMethod(this.state.inputValue);
  };

  render() {
    return (
      <div className="search">
        <input
          value={this.state.inputValue}
          onChange={event => {
            this.setState({ inputValue: event.target.value });
          }}
        />
        <button className="btn btn-primary" onClick={this.returnKeyword}>
          Load Gif
        </button>
      </div>
    );
  }
}

export default Search;

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

////var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function (data) { console.log("success got data", data); });
