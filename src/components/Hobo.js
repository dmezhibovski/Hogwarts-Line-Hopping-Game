import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'
import Plane from './Plane'
import Clock from './Clock'


export default class Hobo extends Component {
    constructor(props){
        super(props)
        this.state = {
            tracks : this.props.numTracks,
            nextTrain : this.props.nextTrain,
            nextTrainTime : this.props.trainTime,
            message: '',
        }
        this.whereIsNextTrain = this.whereIsNextTrain.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ 
            nextTrain : nextProps.nextTrain,
            nextTrainTime: nextProps.trainTime })
    }

    whereIsNextTrain(){
        let mess="Next Train is going to be on track " + this.state.nextTrain + " at " +this.state.nextTrainTime
        this.setState({message :mess })
        alert(mess)
    } 

    render(){
        return (
            <div >
                <div >
                    <Image src={require('../images/hobo2.png')}
                    onClick={()=>this.whereIsNextTrain()}
                    // className='position-absolute'
                    />
                    <Plane id='paper_plane' info={this.state.message}/>
                </div>
            </div>
        )
    }
}
