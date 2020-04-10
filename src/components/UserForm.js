import React from "react";
import ReactDOM from "react-dom";
import FadeIn from "react-fade-in";
import Main from "./Main";
import Form from "react-bootstrap/Form";

function play() {
  const tracks = document.getElementById("numTracks").value;
  const name = document.getElementById("name").value;
  const gameLength = document.getElementById("length").value;
  var trains = [];

  for (let i = 1; i < 6; i++) {
    let track = Math.floor(Math.random() * 4);
    let delay = i * 7500;
    trains.push({
      track: track,
      time: new Date(new Date().getTime() + delay),
    });
  }

  const { track, time } = trains[0];

  ReactDOM.render(
    <Main
      tracks={tracks}
      name={name}
      trainsToCome={trains}
      nextTrain={time}
      nextTrainTrack={track}
      gameLength={gameLength}
    />,
    document.getElementById("root")
  );
}

export default function UserForm() {
  return (
    <FadeIn>
      <Form
        className="text-left bg-light p-3 m-3 rounded-lg"
        onSubmit={() => play()}
      >
        <Form.Group controlId="numTracks">
          <Form.Label>
            <h5>Number of Tracks on Railway</h5>
          </Form.Label>
          <Form.Control type="number" defaultValue="5" min="2" max="5" required/>
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>
            <h5>Name</h5>
          </Form.Label>
          <Form.Control type="text" defaultValue="Guest" pattern="[A-Za-z]+" required/>
        </Form.Group>
        <Form.Group controlId="length">
          <Form.Label>
            <h5>Game Length (Min.)</h5>
          </Form.Label>
          <Form.Control type="number" defaultValue="2" min="2" max="5" required />
        </Form.Group>
        <button
          className="btn btn-lg rounded-lg btn-warning btn-block"
        >
          Begin!
        </button>
      </Form>
    </FadeIn>
  );
}
