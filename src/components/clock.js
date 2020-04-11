import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
            nextTrain: this.props.nextTrain,
            timeLimit:this.props.timeLimit,
            timer:0,
            gameover:false,
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
            time: new Date(),
            timer:this.state.timer+1
        });
        if(this.state.timer === this.state.timeLimit){
            this.setState({gameover:true})
            this.render()
        }

    }

    render() {
        let out
        !this.state.gameover ? out=this.state.time.toLocaleTimeString() : out="GAME OVER"
        return (
            <div>
                {out}
            </div>
        )
    }
}
