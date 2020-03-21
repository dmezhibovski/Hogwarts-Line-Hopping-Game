import React from 'react'
import ReactDOM from 'react-dom'
import FadeIn from 'react-fade-in'
import Main from './Main'
import Form from 'react-bootstrap/Form'

export default function UserForm() {
    return (
        <FadeIn>
            <Form className='text-left bg-light p-3 rounded-lg' >
                <Form.Group controlId="numTracks">
                    <Form.Label><h5>Number of Tracks on Railway</h5></Form.Label>
                    <Form.Control type="number" defaultValue="3" />
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Label><h5>Name</h5></Form.Label>
                    <Form.Control type="text" placeholder="Rick Sanchez" />
                </Form.Group>
                <button
                    className='btn btn-lg rounded-lg btn-warning btn-block'
                    onClick={() => ReactDOM.render(
                        <Main
                            tracks={document.getElementById('numTracks').value}
                            name={document.getElementById('name').value}
                        />, document.getElementById('root'))}
                >
                    Begin!
                 </button>
            </Form>
        </FadeIn>
    )
}
