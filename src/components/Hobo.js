import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'
// import Plane from './Plane'
import Clock from './Clock'


export default class Hobo extends Component {
    constructor(props){
        super(props)
        this.state = {
            tracks : this.props.numTracks,
            nextTrain : this.props.nextTrain,
            nextTrainTime : this.props.nextTrain,
        }
        this.nextTrain = this.nextTrain.bind(this)
        this.whereIsNextTrain = this.whereIsNextTrain.bind(this)
    }
    
    nextTrain(tracks){
        return Math.floor(Math.random()*tracks)
    }
    whereIsNextTrain(){
        alert("Next Train is going to be on track " + this.nextTrain(this.state.tracks))
    } 

    render(){
        return (
            <div >
                <div >
                    <Image src={require('../images/hobo2.png')}
                    onClick={()=>this.whereIsNextTrain()}
                    // className='position-absolute'
                />
                </div>
                <div >
                    <Image src={require('../images/paper-plane-3.png')}
                    id='plane' className='invisible' 
                    onClick={()=>this.whereIsNextTrain()}/>
                </div>
            </div>
        )
    }
}
