import React, { Component } from 'react'

export default class Score extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: this.props.value
        }
    }
    
    //allows for this state to be updated upon parent state changing
    componentWillReceiveProps(nextProps) {
        this.setState({ score: nextProps.value });  
    }

    render() {
        return (
            <span className='Score text-monospace'>
                {this.state.score}
            </span>
        )
    }
}
