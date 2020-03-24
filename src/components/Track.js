import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
// import Timer from './Timer'




export default class Track extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        // this.getTime = this.getTime.bind(this)
        // this.moveLeft = this.moveLeft.bind(this)
        // this.clearClass = this.clearClass.bind(this)
        // this.sleep = this.sleep.bind(this)
        // this.resetTimer = this.resetTimer.bind(this)
    }

    // getTime() {
    //     let train = document.getElementById('train')
    //     this.clearClass(train)
    //     return "Train Coming!"
    // }
    
    // moveLeft(train) {
    //     train.classList.remove('invisible')
    //     train.classList.add('move')
    // }
    
    // async clearClass(train) {
    //     // alert('Waiting')
    //     await this.moveLeft(train)
    //     this.sleep(2000).then(() => {
    //         // alert('Waiting over')
    //         train.classList.remove('move')
    //         train.classList.add('invisible')
    //     })
    //     this.resetTimer()
    // }
    
    // sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms))
    // }

    // resetTimer() {
    // }

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
