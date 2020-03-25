import React, { Component } from "react";
// import ReactDOM from 'react-dom'
import Image from "react-bootstrap/Image";
import Timer from "./Timer";

export default class Track extends Component {
  //export default function Track(props) {
  constructor(props) {
    super(props);
    this.state = {};
    this.getTime = this.getTime.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.clearClass = this.clearClass.bind(this);
    this.sleep = this.sleep.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  getTime() {
    let train = document.getElementById("train");
    this.clearClass(train);
    return "Train Coming!";
  }
  moveLeft(train) {
    train.classList.remove("invisible");
    train.classList.add("move");
  }
  async clearClass(train) {
    // alert('Waiting')
    await this.moveLeft(train);
    this.sleep(2000).then(() => {
      // alert('Waiting over')
      train.classList.remove("move");
      train.classList.add("invisible");
    });
    this.resetTimer();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  resetTimer() {}

  render() {
    return (
      <div>
        <div className="container-fluid row border justify-content-between">
          <div className="col-3 position-relative">
            <Image
              src={require("./../images/user.png")}
              className="bobbing"
              fluid
            />
          </div>
          <div className="col-3 text-right">
            <Image
              src={require("./../images/train-cartoon.png")}
              id="train"
              className="invisible float-right"
              fluid
            />
          </div>
        </div>
        <Image
          src={require("./../images/tilted-tracks.png")}
          className="track"
          fluid
        />
        <div className="p-3">
          <h3 className="text-light font-weight-light">
            Track: {this.state.track}
          </h3>
          <h3 className="text-light font-weight-light">
            Next Train in:
            <div id="train-timer" className="d-inline-flex px-3">
              <Timer
                minutes={0}
                seconds={10}
                checkTime={() => this.getTime()}
                isTrain={true}
              />
            </div>
          </h3>
        </div>
      </div>
    );
  }
}
