import React, { Component } from "react";

// const Display = props => {
//   return (
//     <div>
//       <ul>{this.props.gifs}</ul>
//     </div>
//   );
// };

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
// export default Display;

///First make index and app.js in one file

////then do the props!!
