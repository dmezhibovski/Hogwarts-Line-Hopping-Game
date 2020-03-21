import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Health extends Component {
    constructor(props) {
        super(props)
        this.state = {
            health: 100
        }
    }
    render() {
        return (
            <h3>
                <ProgressBar now={this.state.health} label={`${this.state.health}%`} variant='success' />
            </h3>
        )
    }
}
