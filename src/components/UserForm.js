import React from 'react'
import ReactDOM from 'react-dom'
import FadeIn from 'react-fade-in'
import Main from './Main'
import Form from 'react-bootstrap/Form'

function play() {
    // gets the value in the number of tracks input
    const tracks = document.getElementById('numTracks').value
    // get the value in the name input
    const name = document.getElementById('name').value
    // list to hold the train objects
    var trains = []

    // load the trains objects into the train list
    for (let i = 1; i < 6; i++) {
        let track = Math.floor(Math.random() * (tracks - 1)) + 1
        let delay = i * 10000
        trains.push({
            //track the train is on
            track: track,
            //time the train is set to leave
            time: new Date(new Date().getTime() + delay),
            timeOnTrack: 5000
        })
    }

    // track is not needed, but time is needed to set nextTrain
    const { track, time } = trains[0]

    //generate occupied tracks
    let occupied = {}
    for (let i = 1; i <= tracks; i++) {
        occupied[`${i}`] = false
    }

    // render main to root, pass tracks, name, list of trains, and next train coming
    ReactDOM.render(
        <Main
            tracks={tracks}
            name={name}
            trainsToCome={trains}
            nextTrain={time}
            occupied={occupied}
        />,
        document.getElementById('root'))
}

export default function UserForm() {
    return (
        <FadeIn>
            <Form className='text-left bg-light p-3 rounded-lg' onSubmit={() => play()}>
                <Form.Group controlId="numTracks">
                    <Form.Label><h5>Number of Tracks on Railway</h5></Form.Label>
                    <Form.Control type="number" defaultValue="5" />
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Label><h5>Name</h5></Form.Label>
                    <Form.Control type="text" defaultValue="User" />
                </Form.Group>
                <button
                    className='btn btn-lg rounded-lg btn-warning btn-block'
                    type='submit' >
                    Begin!
                 </button>
            </Form>
        </FadeIn>
    )
}
