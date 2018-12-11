import React, { Component } from "react";

class Display extends Component {
  state = {
    URL: this.props.gifs
  };

  render() {
    return (
      <div>
        <img src="{this.state.URL}" alt="gifimg" />
      </div>
    );
  }
}

export default Display;
