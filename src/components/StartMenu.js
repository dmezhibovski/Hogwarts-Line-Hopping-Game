import React from "react";
import ReactDOM from "react-dom";
import Fadein from "react-fade-in";
import UserForm from "./UserForm";
import Image from "react-bootstrap/Image";
import "./../style/StartMenu.css";
// import Main from 'Main'

function handleClick(buttonName) {
  if (buttonName === "start") {
    // // ReactDOM.render(<Main />, document.getElementById('root'))
    ReactDOM.render(<UserForm />, document.getElementById("choice-box"));
  }
  // else if (buttonName === 'rules') {
  //     // ReactDOM.render(<Rules />, document.getElementById('root'))
  // } else {
  //     // ReactDOM.render(<Devs />, document.getElementById('root'))
  // }
}

export default function StartMenu() {
  return (
    <div className="StartMenu bg-dark d-flex flex-column align-items-center justify-content-center text-center">
      <Fadein delay="0">
        <div className="position-relative p-0 mx-0 my-5">
          <Image src={require("./../images/user.png")} className="bobbing" />
        </div>
        <h1 className="text-light font-italic font-weight-light">
          Hogwarts Line Hopping Game
        </h1>
        <div className="container-sm my-3 px-5 py-2">
          <Fadein delay="400">
            <button
              className="btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-4 my-3"
              onClick={() => handleClick("start")}
            >
              Start
            </button>
            {/* <button
              className="btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-2 my-1"
              onClick={() => handleClick("rules")}
            >
              Rules
            </button>
            <button
              className="btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-2 my-1"
              onClick={() => handleClick("devs")}
            >
              Devs
            </button> */}
          </Fadein>
        </div>
        <footer>
          <p className="font-italic text-light font-weight-light">
            Created by: Alex Khrulev, Anthony Greco, Calvin Mozola, Daniel Mezhibovski,
            and McKenzie Day
          </p>
        </footer>
      </Fadein>
      <div id="choice-box" className="container-sm"></div>
    </div>
  );
}
