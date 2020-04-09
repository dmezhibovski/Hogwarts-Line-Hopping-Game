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

    upTrack(){
        if(curTrack!=tracks){
            curTrack++
        }
    }
    
    downTrack(){
        if(curTrack!=1){
            curTrack--
        }
    }
    render(){
        return(
            <div style={{display: "none"}}>
                <Collision
                    nextTrain={this.state.nextTrain}
                    nextTrainTime={this.state.nextTrainTime}
                    moveUp={this.upTrack}
                    moveDown={this.downTrack}
                />
                <SmartAlg
                    nextTrain={this.state.nextTrain}
                    nextTrainTime={this.state.nextTrainTime}
                />
            </div>
        )
    }



}
