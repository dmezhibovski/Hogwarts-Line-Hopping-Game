import React, { Component } from "react";
import { TestAlgo, BasicAlgo, SmartAlgo } from "./algorithmStructure";

export default class AlgorithmHandler extends Component {
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
    this.algoMakesAMove = this.algoMakesAMove.bind(this);
    let algs = this.state.algorithms;
    var basicalg = new BasicAlgo(
      this.props.curTrack,
      this.props.numTracks,
      this.algoMakesAMove
    );
    algs.push(basicalg);
    var smartalg = new SmartAlgo(
      this.props.curTrack,
      this.props.numTracks,
      this.algoMakesAMove
    );
    algs.push(smartalg);
    this.setState({ algorithms: algs });
    //add in the algorithms
    // this.state.algorithms.push(new TestAlgo(1, 4));
  } //end of constructor

  componentWillReceiveProps(nextProps) {
    if (nextProps.trainTime == this.state.nextTrainTime) {
      return; //This is because the train prop was not changed therefore no updating is needed
    }
    this.sendPlaneInfoToAlgo([nextProps.nextTrain, nextProps.trainTime]);
    
    //check impacts
    this.state.algorithms.forEach((element) => {
      var trackNumOn = element.getCurTrack();
      if (trackNumOn == this.state.nextTrain) {
        element.receiveHit(trackNumOn);
      }
    });
    //send planes
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
  algoMakesAMove() {
    console.log("ALGO IS MAKING A MOVE");
  }

  render() {
    return <div >
        <p>
   CURRENT TRACK IS {this.state.algorithms[0].getCurTrack()}    NEXT TRACK IS {this.state.nextTrain}   Score: {this.state.algorithms[0].getScore()}

        </p>
        <p>
   CURRENT TRACK IS {this.state.algorithms[1].getCurTrack()}    NEXT TRACK IS {this.state.nextTrain}     Score: {this.state.algorithms[1].getScore()}

        </p>


    </div>
  }
}
