import React from 'react'
import ReactDOM from 'react-dom'
import Fadein from 'react-fade-in'
import UserForm from './UserForm'
import Image from 'react-bootstrap/Image'
import './../style/StartMenu.css'


function handleClick(buttonName) {
    if (buttonName === 'start') {
        // If user clicked the start button, render the form to get details
        ReactDOM.render(<UserForm />, document.getElementById('choice-box'))
    } else {
        // if they clicked any other button just alert them of the button they clicked
        alert(`${buttonName} clicked`)
    }
}

export default function StartMenu() {
    return (
        <div className='StartMenu vh-100 bg-dark d-flex flex-column align-items-center justify-content-center text-center'>
            <Fadein delay="0">
                {/* Logo */}
                <div className='position-relative p-0 mx-0 my-5'>
                    <Image src={require('./../images/user.png')} className='bobbing' />
                </div>
                {/* Title */}
                <h1 className='text-light font-italic font-weight-light'>Hogwarts Line Hopping Game</h1>
                {/* Menu */}
                <div className='container-sm my-3 px-5 py-2'>
                    <Fadein delay='400'>
                        <button
                            className='btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-2 my-1'
                            onClick={() => handleClick('start')}
                        >
                            Start
                        </button>
                        <button
                            className='btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-2 my-1'
                            onClick={() => handleClick('rules')}
                        >
                            Rules
                        </button>
                        <button
                            className='btn btn-lg btn-light btn-block text-dark font-weight-bold px-5 py-2 my-1'
                            onClick={() => handleClick('devs')}
                        >
                            Devs
                        </button>
                    </Fadein>
                </div>
                {/* Developers Team */}
                <footer className='fixed-bottom'>
                    <p className='font-italic text-light font-weight-light'>
                        Created by: Alex Khrulev, Anthony Greco, Calvin Mo, Daniel Mezh, and McKenzie Day
                    </p>
                </footer>
            </Fadein>
            {/* User Form Area */}
            <div id='choice-box' className='container-sm'>
            </div>
        </div>
    )
}