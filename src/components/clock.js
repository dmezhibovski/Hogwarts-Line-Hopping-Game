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
        if (this.state.time.toLocaleTimeString() == this.state.nextTrain.toLocaleTimeString()) {
            // console.log("train incoming")
            this.props.sendTrain()
        }
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}
