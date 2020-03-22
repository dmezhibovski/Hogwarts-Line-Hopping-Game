import React from 'react'
import Timer from './Timer'
import Health from './Health'
import Score from './Score'
import Track from './Track'

export default function Main(props) {
    return (
        <div className='Main bg-dark text-light vh-100 p-0 m-0 container-fluid d-flex flex-column flex-nowrap justify-content-between'>
            <div className='p-3'>
                <h3 className='font-weight-light'>
                    {props.name}
                </h3>
                <Score />
            </div>
            <div className='p-0 m-0'>
                <Track track={Math.round(props.tracks/2)} />
            </div>
            <div className='px-3 py-1 row'>
                <div className='col-9 text-left'>
                    <Health className='float-left' />
                </div>
                <h3 className='col-3 text-right font-weight-light'>
                    Time Remaing: <Timer minutes={5} seconds={0} />
                </h3>
            </div>
        </div>
    )
}
