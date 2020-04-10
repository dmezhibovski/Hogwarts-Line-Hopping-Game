import React, { Component } from "react";
import { BasicAlgo, SmartAlgo, BigJumpAlgo } from "./algorithmStructure";

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
      mainCallback: this.props.callback,
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
    var bigJumpAlgo = new BigJumpAlgo(
      this.props.curTrack,
      this.props.numTracks,
      this.algoMakesAMove
    );
    algs.push(bigJumpAlgo);
    this.setState({ algorithms: algs });
    //add in the algorithms
    // this.state.algorithms.push(new TestAlgo(1, 4));
    this.algoMakesAMove(); //call to update the player at the start
  } //end of constructor

  componentWillReceiveProps(nextProps) {
    // console.log("next Props:");
    // console.log(nextProps);
    if (nextProps.trainTime == this.state.nextTrainTime) {
      return; //This is because the train prop was not changed therefore no updating is needed
    }
    this.sendPlaneInfoToAlgo([nextProps.nextTrain, nextProps.trainTime]);

    //check impacts
    this.state.algorithms.forEach((element) => {
      var trackNumOn = element.getCurTrack();
      // console.log("Check hit >>" + trackNumOn + " = " + this.state.nextTrain);
      // console.log(typeof this.state.nextTrain);
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

  algoMakesAMove() {
    let hoboPos = [];
    this.state.algorithms.forEach((element) => {
      hoboPos.push([element.curTrack, element.constructor.name]);
    });
    this.state.mainCallback(hoboPos);
  }

  render() {
    return (
      <div>
        <ul className="list-group-flush rounded-lg p-2 bg-white text-dark">
          <h3>Scoreboard</h3>
          {this.state.algorithms.map((player, index) => {
            return (
              <li className="list-group-item font-weight-bold">
                {player.constructor.name} score: {player.getScore()}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
