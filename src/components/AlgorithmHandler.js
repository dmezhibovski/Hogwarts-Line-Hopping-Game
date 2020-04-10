import React, { Component } from "react";
import { TestAlgo, BasicAlgo, SmartAlgo } from "./algorithmStructure";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithms: [],
      nextTimeJump: null,
      tracks: this.props.numTracks,
      nextTrain: this.props.nextTrain,
      nextTrainTime: this.props.trainTime,
      collision: this.props.collision,
      curTrack: this.props.curTrack,
    };
    //this.whereIsNextTrain = this.whereIsNextTrain.bind(this);
    this.sendPlaneInfoToAlgo = this.sendPlaneInfoToAlgo.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);

    //add in the algorithms
    this.state.algorithms.push(new TestAlgo(1, 4));
  } //end of constructor

  componentDidMount() {
    var basicalg = new BasicAlgo(this.props.curTrack, this.props.numTracks);
    this.state.algorithms.push(basicalg);
    var smartalg = new SmartAlgo(this.props.curTrack, this.props.numTracks);
    this.state.algorithms.push(smartalg);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.trainTime == this.state.nextTrainTime) {
      console.log("returning");
      return; //This is because the train prop was not changed therefore no updating is needed
    }

    //check impacts
    this.state.algorithms.forEach((element) => {
      var trackNumOn = element.track;
      if (trackNumOn == this.state.nextTrain) {
        //console.log("CC - you got hit");
        element.receiveHit(trackNumOn);
      }
    });
    //send planes
    this.sendPlaneInfoToAlgo([nextProps.nextTrain, nextProps.trainTime]);
    //update
    this.setState({
      nextTrain: nextProps.nextTrain,
      nextTrainTime: nextProps.trainTime,
    });
  }

  //info should be in array [track number, time]
  sendPlaneInfoToAlgo(info) {
    //the zero index of the array is the algo references
    this.state.algorithms.forEach((element) => {
      if (this.randomNum(10) < 9) {
        element.receivePlane(info);
      } else {
        element.receivePlane(this.generateBadInfo(info));
      }
    });
    //console.log("CC - Sent planes to algos VVV");
    //console.log(info);
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

  //Updates self state on either accurate or non-accurate train info
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
  }
  */

  render() {
    return <div style={{ display: "none" }}></div>;
  }
}
