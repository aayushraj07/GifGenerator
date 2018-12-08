import React, { Component } from "react";

// const Search = () => {
//   return <input />;
// };

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <input
          onChange={event => this.setState({ term: event.target.value })}
        />
        {/* Value of the input : {this.state.term} */}
      </div>
    );
  }
}

export default Search;
