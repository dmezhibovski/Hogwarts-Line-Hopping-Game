import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minutes: this.props.minutes,
            seconds: this.props.seconds
        }

        this.baseState = this.state
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    // reset() {
    //     this.props.checkTime()
    //     return this.state.isTrain ? this.setState(this.baseState) : "Game Over!"
    // }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className='d-inline-flex'>
                { 
                    minutes === 0 && seconds === 0
                    ? <h3 className='font-weight-light'>{ this.props.timerEnd() }</h3>
                    : <h3 className='font-weight-light text-monospace'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3>
                }
            </div>
        )
    }
}
