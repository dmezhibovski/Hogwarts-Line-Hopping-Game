import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));

import Main from "./components/Main";
var trains = [];

for (let i = 1; i < 6; i++) {
  let track = Math.floor(Math.random() * 4);
  let delay = i * 10000;
  trains.push({
    track: track,
    time: new Date(new Date().getTime() + delay),
  });
}

const { track, time } = trains[0];

ReactDOM.render(
  <Main
    tracks={5}
    name={"Guest"}
    trainsToCome={trains}
    nextTrain={time}
    nextTrainTrack={track}
  />,
  document.getElementById("root")
);
