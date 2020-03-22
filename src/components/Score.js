import React, { Component } from 'react'

export default class Score extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
    }

    render() {
        return (
            <div className='Score'>
                <h3 className='font-weight-light'>Score: {this.state.score}</h3>
            </div>
        )
    }
}
