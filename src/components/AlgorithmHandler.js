import React, { Component } from "react";
import SmartAlg from "./SmartAlg";
import Collision from "./Collision";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithms: [], //Will contain lists of [algo ref,trackOn,nextJump,time of jump]
      nextTimeJump: null,
      tracks: this.props.numTracks,
      nextTrain: this.props.nextTrain,
      nextTrainTime: this.props.trainTime,
      message: "Test message(you can delete this Daniel)",
    };
    //this.sendPlaneInfoToAlgo = this.sendPlaneInfoToAlgo.bind(this);
  } //end of constructor

  componentWillReceiveProps(nextProps) {
    this.setState({
      nextTrain: nextProps.nextTrain,
      nextTrainTime: nextProps.trainTime,
    });
  }

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
    constructor(props) {
        super(props);
        this.state = {
            algorithms : [],//Will contain lists of [algo ref,trackOn,nextJump,time of jump]
            nextTimeJump : null,
            tracks: this.props.numTracks,
            nextTrain: this.props.nextTrain,
            nextTrainTime: this.props.trainTime,
            message: "Test message(you can delete this Daniel)",
        }
        this.whereIsNextTrain = this.whereIsNextTrain.bind(this);
    }*/

  //Updates self state on either accurate or non-accurate train info
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
  }

  //Generates lie about train location
  generateBadInfo() {
    let currentTime = new Date();
    var falseTrack = this.randomNum(this.state.tracks) + 1;
    var falseTime = new Date(this.randomNum(20000) + currentTime.getTime());
    // }
    return (
      "Next Train is going to be on track " +
      falseTrack +
      " at " +
      falseTime.toLocaleTimeString()
    );
  }

  render() {
    let algo;
    algo = null;
    return <div style={{ display: "none" }}>{algo}</div>;
  }
}
