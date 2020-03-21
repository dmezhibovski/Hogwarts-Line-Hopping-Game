import React from 'react'
import Timer from './Timer'
import Health from './Health'
import Score from './Score'

export default function Main(props) {
    return (
        <div className='Main bg-dark text-light vh-100 p-3'>
            <div className='fixed-top px-3 py-1'>
                <Score />
            </div>
            <div>
                {/* render the tracks */}
            </div>
            <div className='fixed-bottom px-3 py-1 row'>
                <div className='col text-left'>
                    <Health className='float-left' />
                </div>
                <h3 className='col text-right'>
                    <Timer />
                </h3>
            </div>
        </div>
    )
}
