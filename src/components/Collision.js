import React, { Component } from 'react';

export default class Collision extends Component{
    constructor(props){
        super(props)
        this.state={
            curTrack:this.props.curTrack,
            messages:[],
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            messages:messages.push(nextProps.message)
        }) 
        if(nextProps.collision){
            jump()
        }
    }
    upTrack (){
        if(curTrack!=tracks){
            curTrack++
        }
    }
    
    downTrack (){
        if(curTrack!=1){
            curTrack--
        }
    }


    jump(){

    }



    render(){
        return(null)
    }
}