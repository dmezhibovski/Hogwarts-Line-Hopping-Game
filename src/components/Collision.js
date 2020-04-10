import React, { Component } from 'react';

export default class Collision extends Component{
    constructor(props){
        super(props)
        this.state={
            curTrack:this.props.curTrack,
            messages:[],
            tracks:this.props.tracks
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            messages:this.state.messages.push(nextProps.message)
        }) 
        if(nextProps.collision){
            this.jump()
        }
    }
    upTrack (){
        if(this.state.curTrack!=this.state.tracks){
            this.setState({curTrack:this.state.curTrack++})
        }
    }
    
    downTrack (){
        if(this.state.curTrack!=1){
            this.setState({curTrack:this.state.curTrack--})

        }
    }


    jump(){

    }



    render(){
        return(null)
    }
}