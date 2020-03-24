import React from 'react'
import Image from 'react-bootstrap/Image'
// import Plane from './Plane'
import Timer from './Timer'


function nextTrain(tracks){
    return Math.floor(Math.random()*tracks)
}
function whereIsNextTrain(){
    alert("Next Train is going to be on track " + nextTrain(5))
}

export default function Hobo() {
    return (
        <div className='row'>
            <div>
                <Image src={require('../images/hobo2.png')} onClick={()=>nextTrain(5)} />
            </div>
            <div>
                <Image src={require('../images/paper-plane-3.png')}
                 id='plane' className='invisible' 
                 onClick={()=>whereIsNextTrain()}/>
            </div>
        </div>
    )
}
