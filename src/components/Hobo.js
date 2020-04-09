import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Plane from "./Plane";
import Clock from "./clock";

export default class Hobo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: this.props.numTracks,
      nextTrain: this.props.nextTrain,
      nextTrainTime: this.props.trainTime,
      message: "Test message(you can delete this Daniel)",
    };
    this.whereIsNextTrain = this.whereIsNextTrain.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      nextTrain: nextProps.nextTrain,
      nextTrainTime: nextProps.trainTime,
    });
  }

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

  randomNum(range) {
    return Math.floor(Math.random() * range);
  }
  //Generates lie about train location
  generateBadInfo() {
    let currentTime = new Date();
    // if(this.randomNum(10)<9){
    //     falseTrack=this.state.nextTrain
    //     falseTime=
    // }
    // else{
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
    return (
      <div>
        <div>
          <Image
            src={require("../images/hobo2.png")}
            onClick={() => this.whereIsNextTrain()}
            // className='position-absolute'
          />
          <Plane id="paper_plane" message={this.state.message} />
        </div>
      </div>
    );
  }
}
