import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import gif from "giphy-api";

// const API_KEY = "wrSXrhvnmsHgkOlpWT5iE7kJbmxxInFG";

// gif({ key: API_KEY, term: "rainbow" }, function(data) {
//   console.log(data);
// });

// const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=wrSXrhvnmsHgkOlpWT5iE7kJbmxxInFG`;
// request.get(url, function(err, res) {
//   console.log(res.body.data[0]);
// });

ReactDOM.render(<App />, document.getElementById("root"));
