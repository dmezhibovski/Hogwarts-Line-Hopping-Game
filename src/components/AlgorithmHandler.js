import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithms: [], //Will contain lists of [algo ref,trackOn,nextJump,time of jump]
      nextTimeJump: null,
    };
    //this.sendPlaneInfoToAlgo = this.sendPlaneInfoToAlgo.bind(this);
  } //end of constructor

  //info should be in array [track number, time]
  sendPlaneInfoToAlgo(info) {
    this.state.algorithms.array.forEach((element) => {
      if (this.randomNum(10) < 9) {
        element[0].receivePlane(info);
      } else {
        element[0].receivePlane(this.generateBadInfo(info));
      }
    });
    console.log("Send planes to algos");
  }

  randomNum(range) {
    return Math.floor(Math.random() * range);
  }

  generateBadInfo(info) {
    let currentTime = new Date();
    var falseTrack = this.randomNum(info[0]) + 1;
    var falseTime = new Date(this.randomNum(20000) + currentTime.getTime());
    return [falseTrack, falseTime];
  }
  /*
  whereIsNextTrain() {
    var mess;
    if (this.randomNum(10) < 9) {
      mess =
        "Next Train is going to be on track " +
        this.state.nextTrain +
        " at " +
        this.state.nextTrainTime;
    } else {
      mess = this.generateBadInfo() + " FALSE";
    }

    this.setState({ message: mess });
    alert(mess);
  }*/
}
