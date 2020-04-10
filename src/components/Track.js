import React, { Component } from "react";
import Image from "react-bootstrap/Image";
// import Timer from './Timer'

export default class Track extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps(nextProps) {
    
  // }

  renderMultTracks(numOfTracks, hoboArr) {
    let personLen = (30 / hoboArr.length).toString(10) + "%";
    let trackLen = (70 / numOfTracks).toString(10) + "%";
    let tracks = [];
    for (let i = 0; i < numOfTracks; i++) {
      let hobosOnTrack = [];
      hoboArr.forEach((element) => {
        if (element == i) {
          hobosOnTrack.push(
            <Image
              src={require("./../images/user.png")}
              className="bobbing"
              width={personLen}
              height={personLen}
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
            height={trackLen}
          />
        </div>
      );
    }
    return tracks;
  }

  render() {
    return <div>{this.renderMultTracks(6, [1, 0, 5, 2, 4, 3])}</div>;
  }
}
