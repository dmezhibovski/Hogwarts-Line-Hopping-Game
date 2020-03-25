import React, { Component } from 'react'
import Health from './Health'
import Score from './Score'
import Track from './Track'
import Clock from './Clock'

export default class Main extends Component {
    constructor(props) {
        super(props)
        // keep state of game
        this.state = {
            user: this.props.name,
            tracks: this.props.tracks,
            score: 0,
            curTrack: Math.round(this.props.tracks/2),
            health: 0,
            trainsToCome: this.props.trainsToCome,
            nextTrain: this.props.nextTrain,
            trainsPassed: [],
            occupied: this.props.occupied
        }

        // bind functions to this component
        this.updateScore = this.updateScore.bind(this)
        this.updateHealth = this.updateHealth.bind(this)
        this.sendTrain = this.sendTrain.bind(this)
    }

    //arg: int points
    //increase score by points
    updateScore(points) {
        console.log(`Current Score: ${this.state.score}`)
        this.setState(prevState => ({
            score: prevState.score + points
        }))
        console.log(`New Score: ${this.state.score}`)
    }

    //arg: int damage
    //decrease health by damage 
    updateHealth(damage) {
        console.log(`Current Health: ${this.state.health}`)
        this.setState(prevState => ({
            health: prevState.health + damage
        }))
        console.log(`New Health: ${this.state.health}`)
    }
        
    // no arg
    // upon time of train departure send a train
    sendTrain() {
        //grab state of current trains list
        let trainList = this.state.trainsToCome

        //pop incoming train out
        let incoming = trainList.shift()
        
        //grab track train is on and time of departure
        var { track, time } = incoming
        
        //check if user is on the same track as the train
        console.log(`Ur Track: ${this.state.curTrack}\nTrain: ${track}`)
        if (track === this.state.curTrack) {
            console.log('Ouch!')
            this.updateHealth(10)
        } else {
            console.log('Close one!')
            this.updateScore(100)
        }
        
        //create and add new train to train list to make up for departed one
        trainList.push({
            track: Math.floor(Math.random() * (this.state.tracks - 1)) + 1,
            time: new Date(new Date().getTime() + 50000),
            timeOnTrack: 5000
        })
        
        //store next train to come in nextTrain
        let nextTrain = trainList[0]
        
        //track is not needed, but time is needed to set time of next coming train
        var { track, time } = nextTrain
        
        //get the list of trains that have departed already
        let passedTrains = this.state.trainsPassed
        
        //add the departed train to the list of departed trains
        passedTrains.push(incoming)

        // update state to reflect above changes
        this.setState(prevState => ({
            trainsToCome: trainList,
            nextTrain: time,
            trainsPassed: passedTrains
        }))
    }

    render() {
        return (
            <div className='Main bg-dark text-light vh-100 p-0 m-0 container-fluid d-flex flex-column flex-nowrap justify-content-between' id='game-area'>
                {/* user info such as name, score, and current time */}
                <div className='p-3 m-0'>
                    <h3 className='font-weight-light'>
                        {/* User Name */}
                        {this.state.user}
                        <br />
                        {/* User Score */}
                        Score: <Score value={this.state.score} />
                    </h3>
                    {/* Current Time */}
                    <div className='text-center container-fluid mt-5'>
                        <h1 className='text-monospace' style={{ fontSize: 150 }}>
                            <Clock nextTrain={this.state.nextTrain} sendTrain={this.sendTrain} />
                        </h1>
                    </div>
                </div>
                {/* The playing area, has the track, user avatar, track user is on, time of next train coming */}
                <div className='p-0 m-0'>
                    {/* Track User is on*/}
                    <Track track={this.state.curTrack} />
                    {/* Time of Next Train */}
                    <h3 className='px-3 text-light font-weight-light' >
                        Next Train at: <span className='text-monospace'>{this.state.nextTrain.toLocaleTimeString()}</span>
                    </h3>
                </div>
                {/* Health bar */}
                <div className='p-3 m-0'>
                    <div className='container-sm'>
                        <Health className='float-left' value={this.state.health} />
                    </div>
                </div>
            </div>
        )
    }
}