import React from "react";

const Display = props => {
  if (props.url !== "") {
    return (
      <div>
        <img src={props.url} alt="gifimg" />
      </div>
    );
  }
  return <p>GIF coming here!</p>;
};

export default Display;
