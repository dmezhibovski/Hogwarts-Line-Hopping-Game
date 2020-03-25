import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
            nextTrain: this.props.nextTrain
        }
        this.tick = this.tick.bind(this)
    }

    //allows for this state to be updated upon parent state changing
    componentWillReceiveProps(nextProps) {
        this.setState({ nextTrain: nextProps.nextTrain });  
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // if time is that of train departure, handle accordingly
        if (this.state.time.toLocaleTimeString() === this.state.nextTrain.toLocaleTimeString()) {
            console.log("train incoming")
            this.props.sendTrain()
        }
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <span className='text-monospace'>
                {this.state.time.toLocaleTimeString()}
            </span>
        )
    }
}
