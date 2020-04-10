import React, { Component } from "react";
// import ReactDOM from 'react-dom'
// import Timer from './Timer'
import Health from "./Health";
import Score from "./Score";
import Track from "./Track";
import Clock from "./Clock";
import Hobo from "./Hobo";
import AlgorithmHandler from "./AlgorithmHandler";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.name,
      tracks: this.props.tracks,
      score: 0,
      curTrack: Math.round(this.props.tracks / 2),
      // trainTrack: -1,
      // nextTrain: -1,
      health: 100,
      // minsLeft: 5,
      // secsLeft: 0,
      trainsToCome: this.props.trainsToCome,
      nextTrain: this.props.nextTrain,
      nextTrainTrack: this.props.nextTrainTrack,
      trainsPassed: [],
      collision: false,
    };

    this.updateScore = this.updateScore.bind(this);
    this.updateHealth = this.updateHealth.bind(this);
    this.sendTrain = this.sendTrain.bind(this);

    // this.gameOver = this.gameOver.bind(this)
    // this.sendTrain = this.sendTrain.bind(this)
  }

  //arg: int points
  //increase score by points
  updateScore(points) {
    console.log(`Current Score: ${this.state.score}`);
    this.setState((prevState) => ({
      score: prevState.score + points,
    }));
    console.log(`New Score: ${this.state.score}`);
  }

  //arg: int damage
  //decrease health by damage
  updateHealth(damage) {
    console.log(`Current Health: ${this.state.health}`);
    this.setState((prevState) => ({
      health: prevState.health - damage,
    }));
    console.log(`New Health: ${this.state.health}`);
  }

  sendTrain() {
    //grab current trains list
    let trainList = this.state.trainsToCome;
    //pop incoming train out
    let incoming = trainList.shift();
    //destructure to grab necessary info
    var { track, time } = incoming;
    //check if user is on same track
    console.log(`Ur Track: ${this.state.curTrack}\nTrain: ${track}`);
    if (track === this.state.curTrack) {
      console.log("Ouch!");
      this.updateHealth(10);
      this.setState({ collision: true });
    } else {
      console.log("Close one!");
      this.updateScore(100);
      this.setState({ collision: false });
    }
    //push new train onto list
    trainList.push({
      track: Math.floor(Math.random() * (this.state.tracks-1)+1),
      time: new Date(new Date().getTime() + 8000),
    });
    //next train to come
    let nextTrain = trainList[0];
    //destructure to grab time
    var { track, time } = nextTrain;
    // console.log(`${track} : ${time.toLocaleTimeString()}`)
    //grab passed trains list
    let passedTrains = this.state.trainsPassed;
    //append incoming train
    passedTrains.push(incoming);

    this.setState((prevState) => ({
      trainsToCome: trainList,
      nextTrainTrack: track,
      nextTrain: time,
      trainsPassed: passedTrains,
    }));
  }

  //plane messages
  /*
  sendPlane() {
    var loopPlaneLamdaFunction = function (ele) {
      var passInfo = [];
      passInfo.push(ele.track);
      passInfo.push(ele.time);
      this.state.algoHandler.snedPlaneInfoToAlgo(passInfo);
    };
    this.state.trainsToCome.array.forEach(loopPlaneLamdaFunction);
    this.state.algoHandler.snedPlaneInfoToAlgo([
      this.state.nextTrain.track,
      this.state.nextTrain.time,
    ]);
    this.state.trainsToCome.array.forEach(loopPlaneLamdaFunction);
  }*/

  // //upon end of game timer, cleanup DOM and render game results
  // gameOver() {
  //     return "Game over"
  // }

    render() {
        return (
            <div className='Main bg-dark text-light vh-100 p-0 m-0 container-fluid d-flex flex-column flex-nowrap justify-content-between' id='game-area'>
                {/* user info such as name, score, and current time */}
                <div className='p-3 m-0 border d-flex flex-row justify-content-around'>
                    {/* User Name */}
                    {/* {this.state.user} */}
                    {/* User Score */}
                    {/* <Score value={this.state.score} /> */}
                    {/* Current Time */}
                            <Clock nextTrain={this.state.nextTrain} sendTrain={this.sendTrain} />
                    {/* Track User is on */}
                    {/* {this.state.userTrack} */}
                    {/* Next Time of Train */}
                    Next traing at: 
                    {this.state.nextTrain.toLocaleTimeString()}
                    <AlgorithmHandler
                      collision={this.state.collision}
                      curTrack={this.state.curTrack}
                      tracks={this.state.tracks}
                      nextTrain=''
                      trainTime={this.state.nextTrain.toLocaleTimeString()}
                      numTracks={this.props.tracks}
                    />
                    {/* <Hobo nextTrain='' trainTime={this.state.nextTrain.toLocaleTimeString()} numTracks={this.props.tracks}/> */}
                </div>
                {/* The playing area, has the track, user avatar, track user is on, time of next train coming */}
                <div className='p-0 m-0'>
                    {/* Track User is on*/}
                    <Track track={this.state.curTrack} />
                </div>
                {/* Health bar and time left in game? */}
                <div className='p-0 m-0'>
                    <div className='container-sm'>
                        <Health className='float-left' value={this.state.health} />
                    </div>
                </div>
      </div>
    );
  }
}
