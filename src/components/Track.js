import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
// import Timer from './Timer'



export default class Track extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <div className='container-fluid justify-content-between'>
                    <div className='col-3 position-relative'>
                            <Image src={require('./../images/user.png')} className='bobbing' fluid />
                    </div>
                </div>
                <Image src={require('./../images/tilted-tracks.png')} className='track' fluid />
                <div>
                    <h3 className='text-light font-weight-light'>
                        Track: {this.props.track}
                    </h3>
                </div>
            </div>
        )
    }
}
