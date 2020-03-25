import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Track(props) {
    return (
        <div>
            {/* Harry Potter Avatar */}
            <div className='position-relative'>
                <Image src={require('./../images/user.png')} className='bobbing' fluid />
            </div>
            {/* Train Tracks */}
            <Image src={require('./../images/tilted-tracks.png')} className='track' fluid />
            {/* Current Track */}
            <h3 className='text-light font-weight-light p-3'>
                Track: {props.track}
            </h3>
        </div>
    )
}