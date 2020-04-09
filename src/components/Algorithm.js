import React from 'react'
import Hobo from "./Hobo"
import Track from "./Track"

export default function Algorithm(props){
    return (
        <div>
            <Hobo
                nextTrain=''
                trainTime={props.trainTime}
                numTracks={props.tracks}
            />
            <Track track={props.track} />
        </div>
        );
} 