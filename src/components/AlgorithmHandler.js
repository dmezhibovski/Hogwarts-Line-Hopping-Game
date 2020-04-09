import React, { Component } from "react";
import SmartAlg from "./SmartAlg";
import Collision from "./Collision";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            algorithms : [],//Will contain lists of [algo ref,trackOn,nextJump,time of jump]
            nextTimeJump : null,
            tracks: this.props.numTracks,
            nextTrain: this.props.nextTrain,
            nextTrainTime: this.props.trainTime,
            collision:this.props.collision,
            curTrack:this.props.curTrack,
        }
        this.whereIsNextTrain = this.whereIsNextTrain.bind(this);
        this.sendPlaneInfoToAlgo = this.sendPlaneInfoToAlgo.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  
    }   //end of constructor

  componentWillReceiveProps(nextProps) {
    if (nextProps.trainTime == this.state.trainTime) {
      return; //This is because the train prop was not changed therefore no updating is needed
    }

    //check impacts
    this.state.algorithms.forEach((element) => {
      var trackNumOn = element[1];
      if (trackNumOn == this.state.nextTrain) {
        console.log("CC - you got hit");
        element[0].receiveHit(trackNumOn);
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
        element[0].receivePlane(info);
      } else {
        element[0].receivePlane(this.generateBadInfo(info));
      }
    });
    console.log("Sent planes to algos");
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

 
    render(){
        return(
            <div style={{display: "none"}}>
                <Collision
                    nextTrain={this.state.nextTrain}
                    nextTrainTime={this.state.nextTrainTime}
                />
                <SmartAlg
                    nextTrain={this.state.nextTrain}
                    nextTrainTime={this.state.nextTrainTime}
                />
            </div>
        )
    }

}
