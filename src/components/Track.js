import React, { Component, OverlayTrigger, Tooltip, Button } from "react";
import Image from "react-bootstrap/Image";
//import { Figure } from "react-bootstrap";
// import Timer from './Timer'
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";

export default class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackNum: props.maxTracks,
    };
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
        if (element[0] == i) {
          hobosOnTrack.push(
            <Figure.Image
              src={require("./../images/user.png")}
              className="bobbing"
              alt="this is alt"
              fluid
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
    console.log("RENDERING with");
    console.log(tracks);
    return tracks;
  }

  render() {
    return (
      <div>
        {this.renderMultTracks(this.state.trackNum, [
          [1, "Hello"],
          [1, "world"],
          [3, "lving"],
        ])}
      </div>
    );
  }
}
