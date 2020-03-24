import React from 'react'
// import ReactDOM from 'react-dom'
import Image from 'react-bootstrap/Image'
import Timer from './Timer'

//Handles timer end
function getTime(mins, secs) {
    let train = document.getElementById('train')
    clearClass(train)
    return "Train Coming!"
}

// Shows train on screen 
function moveLeft(train) {
    train.classList.remove('invisible')
    train.classList.add('move')
}

async function clearClass(train) {
    alert('Waiting')
    await moveLeft(train)
    sleep(2000).then(() => {
        alert('Waiting over')
        train.classList.remove('move')
        train.classList.add('invisible')
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default function Track(props) {
    return (
        <div>
            <div className='row'>
                <div className='col position-relative'>
                        <Image src={require('./../images/user.png')} className='bobbing' fluid />
                </div>
                <Image src={require('./../images/train-cartoon.png')} id='train' className='invisible' fluid />
            </div>
            <Image src={require('./../images/tilted-tracks.png')} className='track' fluid />
            <div className='p-3'>
                <h3 className='text-light font-weight-light'>
                    Track: {props.track}
                </h3>
                <h3 className='text-light font-weight-light' >
                    Next Train in: 
                    <div id='train-timer' className='d-inline-flex px-3'>
                        <Timer minutes={0} seconds={10} checkTime={() => getTime()} />
                    </div>
                </h3>
            </div>
        </div>
    )
}
