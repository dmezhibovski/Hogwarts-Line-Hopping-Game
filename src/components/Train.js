import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export default class Train extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onTrack: this.props.onTrack,
            depart: new Date()
        }
    }

    componentDidMount() {
        return this.state
    }

    getTrack() {
        return this.props.getTrack(this.state.onTrack)
    }
    
    render() {
        return (
            <div>
                {/* <Image
                    src={require('./../images/train-cartoon.png')}
                    id='train'
                    className='invisible float-right'
                    fluid
                /> */}
                {
                    this.state
                }
            </div>
        )
    }
}
