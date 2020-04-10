import React, { Component } from "react";
import Image from "react-bootstrap/Image";
// import Timer from './Timer'

export default class Track extends Component {
  constructor(props) {
    super(props);
  }

  renderMultTracks(numOfTracks, hoboArr) {
    let trackLen = toString(100 / numOfTracks) + "%";
    let tracks = [];
    for (let i = 0; i < numOfTracks; i++) {
      let hobosOnTrack = [];
      hoboArr.forEach((element) => {
        if (element == i) {
          hobosOnTrack.push(
            <Image
              src={require("./../images/user.png")}
              className="bobbing"
              width="10%"
              height="10%"
            />
          );
        }
      });

      tracks.push(
        <div>
          {hobosOnTrack}
          <Image
            src={require("./../images/tilted-tracks.png")}
            fluid
            width="100%"
            height={trackLen}
          ></Image>
        </div>
      );
    }
    return tracks;
  }

  render() {
    return (
      <div>
        <div className="container-fluid justify-content-between">
          <div className="col-3 position-relative">
            {/*<Image
              src={require("./../images/user.png")}
              className="bobbing"
              fluid
            />*/}
          </div>
        </div>
        {this.renderMultTracks(9, [1, 0, 5, 6, 2, 2, 2])}
        {/*
        <Image
          src={require("./../images/tilted-tracks.png")}
          className="track"
          fluid
        /> 
        */}
        {/* <div>
                    <h3 className='text-light font-weight-light'>
                        Track: {this.props.track}
                    </h3>
                </div> */}
      </div>
    );
  }
}
